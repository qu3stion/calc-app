import { useState } from 'react'

function Calculator() {
  const [firstNum, currFirstNum] = useState(0);
  const [secondNum, currSecondNum] = useState(0);
  const [operation, currOperation] = useState(0);

  function Change(e) {
    currOperation(e.target.value);
  }

  const [sum, currSum] = useState("");

  function algoRythym() {
    if (operation === "add") {
      return currSum(firstNum + secondNum)
    } else if (operation === "subtract") {
      return currSum(firstNum - secondNum);
    } else if (operation === "multiply") {
      return currSum(firstNum * secondNum);
    } else if (operation === "divide") {
      return currSum(firstNum / secondNum);
    }
  }

  return (
  <div className="container">
    <h1>Add with React!</h1>

    <form className="add">
      <input type="number" name="value1"
        onChange={(e) => currFirstNum(e.target.value)} value={firstNum}
      />

      <span>+</span>

      <select name="operationIcons" onChange={Change} value={operation}>
        <option value="add">+</option>
        <option value="subtract">-</option>
        <option value="multiply">*</option>
        <option value="divide">/</option>
      </select>

      <input type="text" name="value2"
        onChange={(e) => currSecondNum(e.target.value)} value={secondNum}
      />

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
