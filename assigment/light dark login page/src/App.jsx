import React, { useContext } from 'react';
import { ThemeContext } from './context/Appcontext';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from './app/store';
import LoginPage from './component/Loginpage';
import './App.css';

function App() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  return (
    <>
    <div className={`app ${theme}`}>
      <div className="header">
        <button onClick={toggleTheme} className="btn toggle-btn">
          {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
        </button>
          <button onClick={() => dispatch(logout())} className="btn logout-btn">
            Logout
          </button>
      </div>

      <div className="main-content">
        {user ? <h2 className="welcome-text">Welcome, {user.name}!</h2> : <LoginPage />}
      </div>
    </div>
    </>
  );
}

export default App;
