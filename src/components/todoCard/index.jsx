import TodoContext from '../../context/TodoContext';
import styles from './styles.module.css';
import { useContext } from 'react';

function TodoCard({ id, title, completed }) {
  const { removeTodo, completeTodo } = useContext(TodoContext);

  return (
    <li
      className={styles.item}
      style={{ textDecoration: completed ? 'line-through' : 'none' }}
    >
      <input
        checked={completed}
        type="checkbox"
        onChange={() => completeTodo(id)}
      />
      <span>{id}</span>
      <span>{title}</span>
      <span
        onClick={() => {
          removeTodo(id);
        }}
        style={{ color: 'red' }}
      >
        X
      </span>
    </li>
  );
}

export default TodoCard;
