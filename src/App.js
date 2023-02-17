import "./App.css";
import { useState } from "react";
function App() {
  // useState Object
  let [info, setInfo] = useState({
    name: "",
    email: "",
    password: "",
  });

  let handleChange = (e) => {
    let { name, value } = e.target;
    setInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
    console.log(info);
  };

  return (
    <div className="App">
      <div>
        <h1>useState LifeCycle Hooks- Object</h1>
      </div>
      <div>
        <h1>{info.name}</h1>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
        <input name="name" placeholder="name" onChange={handleChange} />
        <input name="email" placeholder="email" onChange={handleChange} />
        <input name="password" placeholder="password" onChange={handleChange} />
      </div>
      <button type="submit">Click</button>
    </div>
  );

  // let handleClick = () => {
  //   info.count++;
  //   // one-way
  //   // setInfo({ ...info, count: info.count });
  //   // two-way
  //   setInfo((prev) => ({
  //     ...prev,
  //     count: info.count,
  //   }));
  //   console.log(info);
  // };
  // let handleChange = (e) => {
  //   // one-way
  //   // setInfo({ ...info, name: e.target.value });
  //   // two-way
  //   setInfo((prev) => ({
  //     ...prev,
  //     name: e.target.value,
  //   }));
  //   console.log(info);
  // };
  // return (
  //   <div className="App">
  // <div>
  //   <h1>{info.name}</h1>
  // </div>;
  //     <input onChange={handleChange} />
  //     <h2>
  //       {info.name}: {info.count}
  //     </h2>
  //     <button onClick={handleClick}>Click</button>
  //   </div>
  // );
}

export default App;
