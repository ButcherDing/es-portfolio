import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { api } from "../../../utils/api";

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

const ExerciseOne = () => {
  const [fruits, setFruits] = useState([]);
  const [searchField, setSearchField] = useState("");
  const debounceValue = useDebounceValue(searchField);
  // const controller = new AbortController();

  console.log("rerender");

  // const { data: exerciseData, isLoading } = api.exerciseData.getAll.useQuery();

  // const signal = controller.signal;

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>): void => {
    setSearchField(event.target.value);
  };

  return (
    <section className="flex h-screen w-full flex-col items-center">
      <div className="mt-5 flex flex-col items-center justify-center gap-5">
        <h1 id="heading-1">Exercise 1</h1>
        <input
          type="search"
          placeholder="Filter fruit"
          className="input-bordered input-secondary input w-full max-w-xs"
          onChange={onChangeHandler}
        />
        <div>
          {/* {exerciseData?.map((exercise) =>
            exercise.data
              .filter((string) =>
                string.toLowerCase().includes(debounceValue.toLowerCase())
              )
              .map((string, i) => (
                <p className="" key={string + `${i}`}>
                  {string}
                </p>
              ))
          )} */}
        </div>
      </div>
    </section>
  );
};

export default ExerciseOne;
