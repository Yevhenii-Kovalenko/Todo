import React from 'react';

import Todo from './Todo';
import styles from './TodoList.module.css';

function TodoList({ todos, deleteTodo, toggleTodo }) {
  return todos.length === 0 ? (
    <h1>Todo list is empty</h1>
  ) : (
    <div className={styles.todoListContainer}>
      {todos.map((todo) => (
        <Todo deleteTodo={deleteTodo} key={todo.id} todo={todo} toggleTodo={toggleTodo} />
      ))}
    </div>
  );
}
export default TodoList;
