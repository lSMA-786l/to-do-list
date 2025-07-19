import React from 'react';
import ToDoItem from './ToDoItem';

// Renders the list of to do items
function ToDoList({ todos, onToggle, onDelete, onEdit }) {
  return (
    <ul className="list-group mb-4" style={{background: 'transparent', padding: 0}}>
      {todos.map((todo) => (
        <ToDoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </ul>
  );
}

export default ToDoList;