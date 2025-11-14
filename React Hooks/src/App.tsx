import { useState } from 'react';
import { usePrevious } from './usePrevious';
import { useDebouncedState } from './useDebouncedState';
import { useTypewriter } from './useTypewriter';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const previousCount = usePrevious(count);
  
  const [debouncedValue, setDebouncedValue] = useDebouncedState('', 500);
  
  const [typewriterInput, setTypewriterInput] = useState('Hello, World!');
  const typedText = useTypewriter(typewriterInput, 100);
  
  return (
    <div className="container">
      <h1>ATLS 4630 React Hooks</h1>
      
      <div className="demo">
        <h2>usePrevious Example</h2>
        
        <button className="btn-primary" onClick={() => setCount(count + 1)}>
          Increment
        </button>
        <button className="btn-danger" onClick={() => setCount(count - 1)}>
          Decrement
        </button>
        <div className="result">
          <p><strong>Current:</strong> {count}</p>
          <p><strong>Previous:</strong> {previousCount ?? 'undefined'}</p>
        </div>
      </div>
      
      <div className="demo">
        <h2>useDebouncedState Example</h2>

        <input
          type="text"
          onChange={(e) => setDebouncedValue(e.target.value)}
          placeholder="Type something..."
        />
        <div className="result">
          <p><strong>Debounced value:</strong> {debouncedValue || '(empty)'}</p>
          <p className="hint">Updates 500ms after you stop typing</p>
        </div>
      </div>
      
      <div className="demo">
        <h2>useTypewriter Example</h2>

        <input
          type="text"
          value={typewriterInput}
          onChange={(e) => setTypewriterInput(e.target.value)}
          placeholder="Enter text..."
        />
        <div className="result">
          <p className="typewriter">
            {typedText}<span className="cursor">|</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
