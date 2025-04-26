import { useState, useEffect } from 'react';
import './App.css';
import { addDoc, collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import db from './firebase';

function App() {
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState([]);

  // Add new todo
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (todo !== '') {
      await addDoc(collection(db, 'mytodos'), {
        title: todo
      });
      alert('Todo added successfully');
      setTodo('');
      fetchTodos(); 
    }
  };

  
  const fetchTodos = async () => {
    const snapshot = await getDocs(collection(db, 'mytodos'));
    const data = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data()
    }));
    setTodos(data);
  };

  
  const handleDelete = async (id) => {
    await deleteDoc(doc(db, 'mytodos', id));
    alert("you want delete")
    fetchTodos();
  };

  // Load todos on component mount
  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Firebase ToDo App</h1>
      <form className="mb-4" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter task"
          onChange={(e) => setTodo(e.target.value)}
          value={todo}
          className="border p-2 w-full"
        />
        <button className="bg-dark text-white px-4 py-2 mt-2 w-full">
          Add Task
        </button>
      </form>

      <ul>
        {todos.map((item) => (
          <li
            key={item.id}
            className="flex justify-between items-center border-b p-2"
          >
            {item.title}
            <button
              onClick={() => handleDelete(item.id)}
              className="text-red-500"
            >
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
