import styles from './styles.module.css';
import { useState } from 'react';

function TodoForm({ addTodo }) {
  const [todoName, setTodoName] = useState('');

  function handleSubmit(evt) {
    evt.preventDefault();
    if (todoName.trim()) {
      addTodo(todoName.trim());
      setTodoName('');
    }
  }

  return (
    <form action="" onSubmit={handleSubmit}>
      <input
        type="text"
        value={todoName}
        onChange={(evt) => {
          setTodoName(evt.target.value);
        }}
      />
      <input type="submit" />
    </form>
  );
}

export default TodoForm;
