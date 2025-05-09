import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addtodo, deletetodo, editetodo } from './todoSlice';

const Addtodo = () => {
  const [input, setinput] = useState('');
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState('');

  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todo);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() === '') {
      alert('Please Enter a todo');
      return;
    }
    dispatch(addtodo(input));
    alert('Data added successfully');
    setinput('');
  };

  const handledelete = (id) => {
    if (confirm('Are you sure?')) {
      dispatch(deletetodo(id));
    }
  };

  const handleEditClick = (todo) => {
    setEditId(todo.id);
    setEditText(todo.text);
  };

  const handleEditSave = (id) => {
    if (editText.trim() === '') {
      alert('Todo cannot be empty');
      return;
    }
    dispatch(editetodo({ id, newText: editText }));
    setEditId(null);
    setEditText('');
  };

  return (
    <>
      <div className='container mt-5'>
        <div className='row justify-content-center'>
          <div className='col-md-8 col-lg-6'>
            <div className='card shadow-sm'>
              <div className='card-body'>
                <h5 className='card-title mb-3 text-center'>📝 Add a Todo</h5>
                <form onSubmit={handleSubmit} className='d-flex gap-2'>
                  <input
                    onChange={(e) => setinput(e.target.value)}
                    value={input}
                    type='text'
                    placeholder='What do you need to do?'
                    className='form-control'
                  />
                  <button className='btn btn-primary'>Add</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='container mt-4'>
        <div className='row justify-content-center'>
          <div className='col-md-10 col-lg-8'>
            <div className='table-responsive rounded'>
              <table className='table table-bordered table-hover shadow'>
                <thead className='table-dark text-center'>
                  <tr>
                    <th>Todo Item</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody className='text-center'>
                  {todos.map((todo) => (
                    <tr key={todo.id}>
                      <td className='text-start'>
                        {editId === todo.id ? (
                          <input
                            type='text'
                            value={editText}
                            onChange={(e) => setEditText(e.target.value)}
                            className='form-control'
                          />
                        ) : (
                          todo.text
                        )}
                      </td>
                      <td>
                        {editId === todo.id ? (
                          <>
                            <button
                              onClick={() => handleEditSave(todo.id)}
                              className='btn btn-sm btn-success me-2'
                            >
                              Save
                            </button>
                            <button
                              onClick={() => {
                                setEditId(null);
                                setEditText('');
                              }}
                              className='btn btn-sm btn-secondary'
                            >
                              Cancel
                            </button>
                          </>
                        ) : (
                          <>
                            <button
                              onClick={() => handleEditClick(todo)}
                              className='btn btn-sm btn-warning me-2'
                            >
                              Edit
                            </button>
                            <button
                              onClick={() => handledelete(todo.id)}
                              className='btn btn-sm btn-danger'
                            >
                              Delete
                            </button>
                          </>
                        )}
                      </td>
                    </tr>
                  ))}
                  {todos.length === 0 && (
                    <tr>
                      <td colSpan='2' className='text-muted'>
                        No todos yet.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Addtodo;
