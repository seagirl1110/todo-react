import TodoContext from '../../context/TodoContext';
import styles from './styles.module.css';
import { useContext } from 'react';

function TodoCard({ id, title, completed }) {
  const { removeTodo } = useContext(TodoContext);

  return (
    <li className={styles.item}>
      <input type="checkbox" />
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
