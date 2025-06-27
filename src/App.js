import "./App.css";
import React, { useState } from 'react';


function App() {
  const [count,setCount] = useState(0);

  function decreaseHandler(){
    setCount(count - 1);
  }
  function increaseHandler(){
    setCount(count + 1);
  }
  function resetHandler(){
    setCount(0);
  }

  return (
    <div className="flex-col items-center bg-[#344151] gap-10 justify-center h-[100vh] w-[100vw] flex">
      <div className="font-medium text-2xl text-[#0398d4]">Increment & Decrement</div>
      <div className="flex bg-white rounded-sm gap-10 py-3 text-[25px] text-[#344151] justify-center items-center">
        <button onClick={decreaseHandler} className="border-r-2 items-center justify-center w-20 border-[#bfbfbf] text-6xl">
          -
        </button>

        <div className="font-bold gap-11 text-5xl text-center "> 
          {count}
        </div>

        <button onClick={increaseHandler} className="border-l-2 text-center w-20 border-[#bfbfbf] text-6xl">
          +
        </button>
      </div>

        <button onClick={resetHandler} className="bg-[#0398d4] rounded-sm text-white px-5 py-2 text-lg"> Reset </button>
    </div>
  );
}

export default App;
