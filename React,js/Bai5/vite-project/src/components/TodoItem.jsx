function TodoItem({ todo, index, deleteTodo }) {
  return (
    <li>
      {todo}
      <button onClick={() => deleteTodo(index)}>❌</button>
    </li>
  );
}

export default TodoItem;
