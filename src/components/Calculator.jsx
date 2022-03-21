import { useState } from 'react'

function Calculator() {
  const [firstNum, currFirstNum] = useState(0);
  const [secondNum, currSecondNum] = useState(0);


  const [sum, currSum] = useState(0);

  function algoRythym() {

    return currSum(firstNum + secondNum)
  };

  function inputOneChange(e) {
    currFirstNum(parseInt(e.target.value))
  }

  function inputTwoChange(e) {
    currSecondNum(parseInt(e.target.value))
  }

  return (
  <div className="container">
    <h1>Add with React!</h1>

    <form className="add">
      <input type="number" name="value1"
        onChange={inputOneChange}
      />

      <span>+</span>



      <input type="text" name="value2"
        onChange={inputTwoChange}/>

      <span>=</span>

      <button type="button" onClick={algoRythym}>
        Click Here for Result.
      </button>

      <h3>Sums go Here</h3>
      <h2>{sum}</h2>
    </form>
  </div>
  )
};



export default Calculator;
