import { useEffect, useState } from 'react';
import styles from './App.module.css';
import StaticButton from './component/Button';

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
    <div className={styles.Centering}>
      <form onSubmit={onSubmit}>
        <label htmlFor="inputTask">Input Your Task: </label>
        <input id="inputTask" placeholder="input your tasks" value={value} onChange={onInputChange} />
        <StaticButton text="Submit" disabled={value.length < 4} />
      </form>
      <ul>
        {todos.map((t, i) => (
          <li key={i}>{t}</li>
        ))}
      </ul>
      <StaticButton text="Reset" fontSize={10} onClick={() => setTodos([])} />
    </div>
  );
}

export default App;
