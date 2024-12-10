import { useState, useRef} from 'react';
import './App.css';

function App() {
  const inputRef = useRef(null);
  const resultRef = useRef(null);
  const [ result, setResult ] = useState(0);

  const plus = (e) => {
    e.preventDefault();
    setResult((result) => result + Number(inputRef.current.value));
  }

  const minus = (e) => {
    e.preventDefault();
    setResult((result) => result - Number(inputRef.current.value));
  }

  const times = (e) => {
    e.preventDefault();
    setResult((result) => result * Number(inputRef.current.value));
  }

  const divide = (e) => {
    e.preventDefault();
    setResult((result) => result / Number(inputRef.current.value));
  }

  const resetInput = (e) => {
    e.preventDefault();
    inputRef.current.value = 0;
  }

  const resetResult = (e) => {
    e.preventDefault();
    setResult(0);
  }




  return (
    <div className="App">
      <div>
        <h1>Simple Calculator</h1>
      </div>
      <form>
        <p ref={resultRef}>
          {result}
        </p>
      </form>

      <input
      pattern="[0-9]"
      ref={inputRef}
      type="number"
      placeholder='Type a Number....' />


      <button onClick={plus}>Add</button>
      <button onClick={minus}>Substract</button>
      <button onClick={times}>Multiply</button>
      <button onClick={divide}>Divider</button>
      <button onClick={resetInput}>RESET INPUT</button>
      <button onClick={resetResult}>RESET RESULT</button>
    </div>
  );
}

export default App;
