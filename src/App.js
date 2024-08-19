import './App.css';
import { useState } from 'react';
import TodoForm from './components/todoForm';

function App() {
  const [todos, setTodos] = useState([]);

  function addTodo(title) {
    const newTodo = {
      id: Math.floor(Math.random() * 1000000),
      title,
      completed: false,
    };

    setTodos([...todos, newTodo]);
  }
  return (
    <div className="App">
      <TodoForm addTodo={addTodo} />
    </div>
  );
}

export default App;
