import React, { useState } from 'react';

// Represent a single to-do item with edit, delete functionality
function ToDoItem({ todo, onToggle, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  // Enable the editing mode
  const handleEdit = () => {
    setIsEditing(true);
  };

  // Save all the edited text
  const handleSave = () => {
    onEdit(todo.id, editText);
    setIsEditing(false);
  };

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center shadow-sm" style={{borderColor: todo.completed ? '#ffd700' : '#ffd70044', opacity: todo.completed ? 0.7 : 1, transition: 'opacity 0.3s'}}>
      <div className="d-flex align-items-center">
        {/* Checkbox for completion */}
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
          className="form-check-input me-2"
          style={{accentColor: '#ffd700', width: '1.2em', height: '1.2em'}}
        />
        {isEditing ? (
          // Input for editing to do text
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            className="form-control me-2"
            style={{ width: '199px', background: '#222', color: '#ffd700', border: '1px solid #ffd700' }}
          />
        ) : (
          // Display to do texts
          <span
            style={{ textDecoration: todo.completed ? 'line-through' : 'none', color: todo.completed ? '#ffd70099' : '#ffd700', fontWeight: 501, fontSize: '1.2rem', transition: 'color 0.4s' }}
            className="me-2"
          >
            {todo.text}
          </span>
        )}
      </div>
      <div className="d-flex align-items-center">
        {isEditing ? (
          // Save button
          <button className="btn btn-success btn-sm me-2" onClick={handleSave} title="Save">
            <svg width="18" height="18" fill="#111" viewBox="0 0 24 24"><path d="M20.285 6.709l-11.285 11.285-5.285-5.285 1.414-1.414 3.871 3.871 9.871-9.871z"/></svg>
          </button>
        ) : (
          // Edit button
          <button className="btn btn-warning btn-sm me-2" onClick={handleEdit} title="Edit">
            <svg width="18" height="18" fill="#111" viewBox="0 0 24 24"><path d="M3 17.25V21h3.75l11.06-11.06-3.75-3.75L3 17.25zm17.71-10.04a1.003 1.003 0 0 0 0-1.42l-2.54-2.54a1.003 1.003 0 0 0-1.42 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/></svg>
          </button>
        )}
        {/* Delete button */}
        <button className="btn btn-danger btn-sm" onClick={() => onDelete(todo.id)} title="Delete">
          <svg width="18" height="18" fill="#ffd700" viewBox="0 0 24 24"><path d="M3 6h18v2H3V6zm2 3h14v13a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V9zm3 2v9h2v-9H8zm4 0v9h2v-9h-2z"/></svg>
        </button>
      </div>
    </li>
  );
}

export default ToDoItem;