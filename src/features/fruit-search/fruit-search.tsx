import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { api } from "../../utils/api";

const fakeApi = (query: string, signal?: AbortSignal): Promise<string[]> => {
  const fruits = ["apple", "banana", "mango", "papaya", "raspberry"];

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (signal?.aborted) {
        reject(signal.reason);
      }
      resolve(
        fruits.filter((fruit) => {
          fruit.toLowerCase().includes(query.toLowerCase());
        })
      );
    }, Math.random() * 1000);
  });
};

const useDebounceValue = (value: string, time = 300) => {
  const [debounceValue, setDebounceValue] = useState(value);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebounceValue(value);
    }, time);

    return () => {
      clearTimeout(timeout);
    };
  }, [value, time]);

  return debounceValue;
};

const FruitSearch = () => {
  const [searchField, setSearchField] = useState("");
  const debounceValue = useDebounceValue(searchField);

  const { data: fruitEntries, isLoading } = api.fruits.getAll.useQuery();

  console.log(fruitEntries);

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>): void => {
    setSearchField(event.target.value);
  };

  return (
    <section className="flex h-screen w-full flex-col items-center gap-5 lg:flex-row lg:items-start lg:justify-center">
      <div className="justify-top mt-5 flex flex-col items-center gap-5">
        <h1 className="text-lg font-bold">🍓 FRUIT SEARCH ( Debounced 🏀 ) </h1>
        <input
          type="search"
          placeholder="Filter fruit"
          className="input-bordered input-secondary input w-full max-w-xs"
          onChange={onChangeHandler}
        />
        <div>
          {fruitEntries
            ?.map(({ name }) => name)
            .filter((string) =>
              string.toLowerCase().includes(debounceValue.toLowerCase())
            )
            .map((string, i) => (
              <p className="" key={string + `${i}`}>
                {string}
              </p>
            ))}
        </div>
      </div>
      {/* <div className="justify-top mt-5 flex flex-col items-center gap-5">
        <h1 id="heading-1">Add Fruit</h1>
        <input
          type="search"
          placeholder="Name a fruit"
          className="input-bordered input-secondary input w-full max-w-xs"
          onChange={onChangeHandler}
        />
      </div> */}
    </section>
  );
};

export default FruitSearch;
