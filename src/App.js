import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  // let [count, setCount] = useState(0);
  // let [name, setName] = useState("");

  let [info, setInfo] = useState({
    count: 0,
    name: "",
  });

  let handleClick = () => {
    info.count++;
    // oneWay
    // setInfo({ ...info, count: info.count });
    setInfo((prev) => ({
      ...prev,
      count: info.count,
    }));
    console.log(info);
  };

  let handleChange = (e) => {
    // setInfo({ ...info, name: e.target.value });
    setInfo((prev) => ({
      ...prev,
      name: e.target.value,
    }));
    console.log(info);
  };

  return (
    <div className="App">
      <input onChange={handleChange} />
      <h2>
        {info.name}: {info.count}
      </h2>
      <button onClick={handleClick}>Click</button>
    </div>
  );
}

export default App;
