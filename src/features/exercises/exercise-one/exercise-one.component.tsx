const fakeApi = (query: string): Promise<string[]> => {
  const fruits = ["apple", "banana", "mango", "papaya", "raspberry"];

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(
        fruits.filter((fruit) => {
          fruit.toLowerCase().includes(query.toLowerCase());
        })
      );
    }, Math.random() * 1000);
  });
};

const ExerciseOne = () => {
  return (
    <section>
      <h1>Exercise 1</h1>
    </section>
  );
};

export default ExerciseOne;
