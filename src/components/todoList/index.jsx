import styles from './styles.module.css';
import TodoCard from '../todoCard';

function TodoList({ todos }) {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoCard key={todo.id} {...todo} />
      ))}
    </ul>
  );
}

export default TodoList;
