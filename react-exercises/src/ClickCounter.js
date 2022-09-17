import { useCounter } from "./useCounter";

export function ClickCounter({ initialValue }) {
  const { counter, increment, decrement, reset } = useCounter(initialValue);

  // function onCounterChange() {
  //   console.log(`The counter is now ${counter}`);
  // }

  // useEffect(() => {
  //   onCounterChange();
  // }, [counter]);

  return (
    <div>
      <h1>Click : {counter}</h1>
      <button className="bg-green-500" onClick={increment}>
        Increment
      </button>
      <button className="bg-blue-500 ml-2" onClick={decrement}>
        decrement
      </button>
      <button className="bg-red-600 ml-2" onClick={reset}>
        Reset
      </button>
    </div>
  );
}
