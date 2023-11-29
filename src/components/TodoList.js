import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({todos, markTodo, removeTodo}) => {
    return (
        <div>
            {
                todos.map(
                    (todo, index) => (
                        <TodoItem
                            key={index}
                            index={index}
                            todo={todo}
                            markTodo={markTodo}
                            removeTodo={removeTodo}
                        />
                    )
                )
            }
        </div>
    );
};

export default TodoList;