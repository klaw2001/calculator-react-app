import React, { useState } from 'react'

const Calculator = () => {
    const [answer , setAnswer] = useState("")

    const clickHandler = (e) =>{
        setAnswer(answer + e.target.value)
    }
    const calculate = () =>{
        setAnswer(eval(answer))
    }
    const reset = () =>{
        setAnswer('')
    }
  return (
    <div className="calculator">
        <div className="inp-wrapper">

        <input type="text" placeholder='0' name='input' value={answer} />
        <div className="grid">
        <button value="7" onClick={clickHandler}>7</button>
        <button value="8" onClick={clickHandler}>8</button>
        <button value="9" onClick={clickHandler}>9</button>
        <button value="+" onClick={clickHandler}>+</button>
        <button value="4" onClick={clickHandler}>4</button>
        <button value="5" onClick={clickHandler}>5</button>
        <button value="6" onClick={clickHandler}>6</button>
        <button value="-" onClick={clickHandler}>-</button>
        <button value="1" onClick={clickHandler}>1</button>
        <button value="2" onClick={clickHandler}>2</button>
        <button value="3" onClick={clickHandler}>3</button>
        <button value="*" onClick={clickHandler}>*</button>
        <button value="0" onClick={clickHandler}>0</button>
        <button value="." onClick={clickHandler}>.</button>
        <button value="=" onClick={calculate}>=</button>
        <button value="/" onClick={clickHandler}>/</button>
        <button className="clear" onClick={reset}>Clear</button>
        </div>
    </div>
    </div>
  )
}

export default Calculator