import { useReducer } from "react";
// Here I use ENUM & interface instead of type 
enum CounterTypes {
    INCREASE = "INCREASE", 
    DECREASE = "DECREASE", 
}
interface CounterState {
  count: number;
};
interface UpdateAction {
  type: CounterTypes;
  payload: number;
};
interface ResetAction {
  type: string;
  payload?: number
};


type CounterAction = UpdateAction | ResetAction; // Typescript discriminated union
// Reducer Function
const reducer = (state: CounterState, action: CounterAction) => {
const {type,payload = 0} = action ;
  switch (type) {
    case CounterTypes.INCREASE:
      return { count: state.count +  payload };
    case CounterTypes.DECREASE:
      return { count: state.count - payload };
    case "reset":
      return initialValue;
    default:
      return state;
  }
};
const initialValue: CounterState = { count: 0 };

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialValue);
  return (
    <div>
      <p>{state.count}</p>
      <button onClick={() => dispatch({ type: CounterTypes.INCREASE, payload: 1 })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: CounterTypes.DECREASE, payload: 1 })}>
        Decrement
      </button>
      {/* here we need discriminated union typescript*/}
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
};

export default Counter;
