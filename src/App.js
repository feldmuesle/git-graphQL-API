import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [inputValue, setInputValue] = useState('')

  function handleChange(event) {
    const value = event.target.value
    setInputValue(value)
  }

  function handleSubmit(event) {
    event.preventDefault()
    console.log('handle submit')
  }

  return (
    <div className="App">
      <label htmlFor="username">Github user name</label>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          onChange={handleChange}
          value={inputValue}
          placeholder="please enter a valid Github user"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
