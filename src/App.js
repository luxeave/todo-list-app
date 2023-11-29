import React, { useState } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

const App = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = text => {
    const newTodos = [...todos, { text, isCompleted: false }];
    setTodos(newTodos);
  };

  const markTodo = index => {
    const newTodos = todos.map((todo, i) => {
      if (i === index) {
        return { ...todo, isCompleted: !todo.isCompleted };
      }
      return todo;
    });

    setTodos(newTodos);
  };

  const removeTodo = index => {
    // filter returns a new array with the elements that pass the condition
    const newTodos = todos.filter(
      (todo, i) => i !== index   
    );

    setTodos(newTodos);
  };

  return (
    <div className="app">
      <h1>Todo List</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList
        todos={todos}
        markTodo={markTodo}
        removeTodo={removeTodo}
      />
    </div>
  );
}

export default App;