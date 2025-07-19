import { useState } from 'react';
import Header from './Header';
import ToDoList from './ToDoList';
import './App.css';

// Motivational quotes for sidebar
const quotes = [
  'Success is the sum of small efforts, repeated day in and day out.',
  'The secret of getting ahead is getting started.',
  'Productivity is never an accident. It is always the result of a commitment to excellence.',
  "Don't watch the clock; do what it does. Keep going.",
  'The future depends on what you do today.'
];

function App() {
  // State for todos and input field
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React', completed: false },
    { id: 2, text: 'Build a To-Do App', completed: false },
  ]);
  const [input, setInput] = useState('');
  // Calculate completed and active tasks
  const completedCount = todos.filter(t => t.completed).length;
  const activeCount = todos.length - completedCount;
  // Pick a random motivational quote
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

  // Add a new todo
  const handleAdd = (e) => {
    e.preventDefault();
    if (input.trim() === '') return;
    setTodos([
      ...todos,
      { id: Date.now(), text: input, completed: false },
    ]);
    setInput('');
  };

  // Toggle completion status
  const handleToggle = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Delete a todo
  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // Edit a todo's text
  const handleEdit = (id, newText) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, text: newText } : todo
      )
    );
  };

  return (
    <div className="container py-4 d-flex flex-row gap-4 justify-content-center align-items-start" style={{minHeight: '80vh'}}>
      <div className="flex-grow-1" style={{maxWidth: 500}}>
        <Header />
        {/* Input form for adding todos */}
        <form className="mb-4 d-flex" onSubmit={handleAdd}>
          <input
            type="text"
            className="form-control me-2"
            placeholder="Add a new to-do..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button type="submit" className="btn btn-primary">
            Add
          </button>
        </form>
        {/* To-Do List */}
        <ToDoList
          todos={todos}
          onToggle={handleToggle}
          onDelete={handleDelete}
          onEdit={handleEdit}
        />
      </div>
      {/* Sidebar with stats and quote */}
      <aside className="p-4 d-flex flex-column align-items-center justify-content-start" style={{background: '#181818', borderRadius: '18px', minWidth: 260, boxShadow: '0 4px 32px 0 #000a', color: '#ffd700', minHeight: 400}}>
        <h4 style={{fontWeight: 700, marginBottom: 16}}>Productivity Stats</h4>
        <div style={{fontSize: '1.1rem', marginBottom: 12}}>
          <span style={{color: '#ffd700'}}>Total Tasks:</span> {todos.length}
        </div>
        <div style={{fontSize: '1.1rem', marginBottom: 12}}>
          <span style={{color: '#ffd700'}}>Completed:</span> {completedCount}
        </div>
        <div style={{fontSize: '1.1rem', marginBottom: 24}}>
          <span style={{color: '#ffd700'}}>Active:</span> {activeCount}
        </div>
        <hr style={{width: '100%', borderColor: '#ffd70044', margin: '16px 0'}} />
        <h5 style={{fontWeight: 600, marginBottom: 10}}>Motivational Quote</h5>
        <blockquote style={{fontStyle: 'italic', color: '#ffd700cc', textAlign: 'center'}}>
          {randomQuote}
        </blockquote>
      </aside>
    </div>
  );
}

export default App;
