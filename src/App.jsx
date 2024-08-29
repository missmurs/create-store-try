import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { deposit } from "./redux/store";

function App() {
  const dispatch = useDispatch();
  const balance = useSelector((state) => state.balance.value);
  console.log(balance);

  return (
    <>
      <div>
        <p>Balance:{balance}</p>
        <button onClick={() => dispatch(deposit(10))}>
          Deposit 10 credits
        </button>
        <button onClick={() => dispatch(deposit(5))}>Deposit 5 credits</button>
      </div>
    </>
  );
}

export default App;
