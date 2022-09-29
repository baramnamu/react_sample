import { useEffect, useState } from 'react';
import style from './App.module.css';

function App() {
  const [value, setValue] = useState('');
  const [todos, setTodos] = useState([]);

  const onInputChange = (event) => {
    setValue(event.target.value);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    if (value.trim() === '') return;
    setTodos((presentTodos) => [...presentTodos, value]);
    setValue('');
  };

  useEffect(() => {
    console.log('call an API');
    return () => {
      console.log('destroying this component');
    };
  }, []);
  useEffect(() => {
    console.log('todos =', todos);
  }, [todos]);

  return (
    <div className={style.Centering}>
      <form onSubmit={onSubmit}>
        <label htmlFor="inputTask">Input Your Task: </label>
        <input id="inputTask" placeholder="input your tasks" value={value} onChange={onInputChange} />
        <button>Submit</button>
      </form>
      <ul>
        {todos.map((t, i) => (
          <li key={i}>{t}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
