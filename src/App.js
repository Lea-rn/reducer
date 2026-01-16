import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [count , setCount] = useState(0) ; 
  const [step , setStep] = useState(1) ; 

  const date = new Date ("june 16 2025")
  date.setDate(date.getDate() + count)  


  const dec = function (){
    setCount((cur)=> cur - step)
  }

   
  const inc = function (){
    setCount ((cur)=> cur + step)
  }

  const definecount = function (e){
    setCount(Number(e.target.value))
  }

  const defineStep = function (e){
  setStep(Number(e.target.value))
  }

  const reset = function (){
    setCount(0)
    setStep(1)
  }

  return (
    <div className="App">
     <div>
      <input
      type='range'
      min="0"
      max="10"
      value={step}
      onChange={defineStep}
      />
      <span>{step}</span>
     </div>
     <div>
      <button onClick={dec}>-</button>
      <input value={count} onChange={definecount}/>
      <button onClick={inc}>+</button>
     </div>
     <p>{date.toDateString()}</p>

     <div>
      <button onClick={reset}>Reset</button>
     </div>
    </div>
  );
}

export default App;
