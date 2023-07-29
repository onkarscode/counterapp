import { useState } from "react";
import "./App.css";

function App() {

const [count, setCount]=useState(0)



const inc =()=>{
 setCount(count + 1);
}

const dec =()=>{
if(count >0){
  setCount(count -1)
}
}

  return (
    <>
    <div className="container">
    <button className="box" id="decrease" onClick={dec}>
      -
    </button>
    <div className="value" id="num" >{count}</div>
    <button className="box" id="increase" onClick={inc}>
      +
    </button>
  </div>
  </>
  );
}

export default App;
