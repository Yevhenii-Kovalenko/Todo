/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';

import { RiDeleteBin2Line, RiRefreshLine } from 'react-icons/ri';

import styles from './TodosActions.module.css';
import Button from '../UI/Button';

function TodosActions({ resetTodo, completedTodo, completedTodosExist }) {
  return (
    <div className={styles.todosActionsContainer}>
      <Button onClick={() => resetTodo()} title="Reset Todos">
        <RiRefreshLine />
      </Button>
      <Button
        onClick={() => completedTodo()}
        title="Clear Completed Todos"
        disabled={!completedTodosExist}
      >
        <RiDeleteBin2Line />
      </Button>
    </div>
  );
}

export default TodosActions;
