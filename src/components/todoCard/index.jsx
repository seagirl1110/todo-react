import styles from './styles.module.css';

function TodoCard({ id, title, completed }) {
  return (
    <li className={styles.item}>
      <input type="checkbox" />
      <span>{id}</span>
      <span>{title}</span>
      <span style={{ color: 'red' }}>X</span>
    </li>
  );
}

export default TodoCard;
