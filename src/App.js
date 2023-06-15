/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from 'react';

import { v4 as uuidv4 } from 'uuid';

import './App.css';
import TodoForm from './components/Todos/TodoForm';
import TodoList from './components/Todos/TodoList';
import TodosActions from './components/Todos/TodosActions';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodoHandler = (text) => {
    const newTodo = {
      text,
      isCompleted: false,
      id: uuidv4(),
    };
    setTodos([...todos, newTodo]);
  };
  const deleteTodoHandler = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleTodoHandler = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : { ...todo }
      )
    );
  };

  const resetTodoHandler = () => {
    setTodos([]);
  };

  const completedTodoHandler = () => {
    setTodos(todos.filter((todo) => todo.isCompleted !== true));
  };

  const completedTodoCounter = todos.filter((todo) => todo.isCompleted).length;

  return (
    <div className="App">
      <h1>Todo App</h1>
      <TodoForm addTodo={addTodoHandler} />
      {!!todos.length && (
        <TodosActions
          completedTodosExist={!!completedTodoCounter}
          resetTodo={resetTodoHandler}
          completedTodo={completedTodoHandler}
        />
      )}

      <TodoList todos={todos} deleteTodo={deleteTodoHandler} toggleTodo={toggleTodoHandler} />
      {completedTodoCounter > 0 && (
        <div>
          {`You completed ${completedTodoCounter}
					${completedTodoCounter > 1 ? 'todos' : 'todo'}!`}
        </div>
      )}
    </div>
  );
}

export default App;
