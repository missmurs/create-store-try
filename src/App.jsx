import { useSelector } from "react-redux";
import "./App.css";

function App() {
  const balance = useSelector((state) => state.balance.value);
  console.log(balance);

  return (
    <>
      <div>
        <p>Balance:{balance}</p>
        <button>Deposit 10 credits</button>
      </div>
    </>
  );
}

export default App;
