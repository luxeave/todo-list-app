import React from 'react';

const TodoItem = ({todo, index, markTodo, removeTodo}) => {
    return (
        <div className="todo">
            <span style={ {textDecoration: todo.isCompleted ? 'line-through' : 'none'} }>{todo.text}</span> 
            <div>
                <button onClick={()=> markTodo(index)}>Complete</button>
                <button onClick={()=> removeTodo(index)}>x</button>
            </div>
        </div>
    );
};

export default TodoItem;