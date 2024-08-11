export default function StateManagerComponent() {
  const selectCounterValue = (state) => state.value;

  const currentValue = selectCounterValue(store.getState());

  const increment = () => {
    store.dispatch({ type: "counter/increment" });
  };

  return (
    <div>
      Value: {currentValue} <button onClick={increment}>Increment</button>
    </div>
  );
}
