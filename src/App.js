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
    // one-way
    // setInfo({ ...info, count: info.count });
    // two-way
    setInfo((prev) => ({
      ...prev,
      count: info.count,
    }));
    console.log(info);
  };

  let handleChange = (e) => {
    // one-way
    // setInfo({ ...info, name: e.target.value });
    // two-way
    setInfo((prev) => ({
      ...prev,
      name: e.target.value,
    }));
    console.log(info);
  };

  return (
    <div className="App">
      <div>
        <h1>useState LifeCycle Hooks</h1>
      </div>
      <input onChange={handleChange} />
      <h2>
        {info.name}: {info.count}
      </h2>
      <button onClick={handleClick}>Click</button>
    </div>
  );
}

export default App;
