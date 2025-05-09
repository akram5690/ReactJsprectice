import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from './counterSlice';

function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="d-flex m-5 justify-content-center">
      <div className="card shadow-lg p-4 text-center border-0" style={{ width: '400px', borderRadius: '20px' }}>
        <h2 className="mb-3 fw-bold text-dark">Counter App</h2>
        <div className="display-3 fw-semibold mb-4 py-3 rounded bg-white text-primary shadow-sm"
             style={{ border: '3px solid #0d6efd', borderRadius: '15px' }}>
          {count}
        </div>
        <div className="d-flex justify-content-between gap-3">
          <button className="btn btn-outline-primary w-50" onClick={() => dispatch(increment())}>
            ➕ Increment
          </button>
          <button className="btn btn-outline-secondary w-50" onClick={() => dispatch(decrement())}>
            ➖ Decrement
          </button>
        </div>
      </div>
    </div>
  );
}

export default Counter;
