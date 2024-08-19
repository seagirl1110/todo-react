import './App.css';
import { useState } from 'react';
import TodoForm from './components/todoForm';
import TodoList from './components/todoList';
import TodoContext from './context/TodoContext';

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

  function removeTodo(todoId) {
    const newTodos = todos.filter((todo) => todo.id !== todoId);
    setTodos(newTodos);
  }

  function completeTodo(todoId) {
    const newTodos = todos.map((todo) =>
      todo.id === todoId
        ? {
            ...todo,
            completed: !todo.completed,
          }
        : todo
    );

    setTodos(newTodos);
  }

  console.log(todos);

  return (
    <TodoContext.Provider value={{ removeTodo, completeTodo }}>
      <div className="App">
        <TodoForm addTodo={addTodo} />
        <TodoList todos={todos} />
      </div>
    </TodoContext.Provider>
  );
}

export default App;
