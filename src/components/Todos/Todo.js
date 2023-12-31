/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';

import { FaCheck } from 'react-icons/fa';
import { RiDeleteBin2Line, RiTodoFill } from 'react-icons/ri';

import styles from './Todo.module.css';

function Todo({ todo, deleteTodo, toggleTodo }) {
  return (
    <div className={`${styles.todo} ${todo.isCompleted ? styles.completedTodo : ''}`}>
      <RiTodoFill className={styles.todoIcon} />
      <div className={styles.todoText}>{todo.text}</div>
      <RiDeleteBin2Line className={styles.deleteIcon} onClick={() => deleteTodo(todo.id)} />
      <FaCheck onClick={() => toggleTodo(todo.id)} className={styles.checkIcon} />
    </div>
  );
}

export default Todo;
