import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { auth } from '../firebase';

const Navigation = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate(); 

  useEffect(() => {
    //Firebase Auth function that automatically listens if a user logs in or logs out
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      //This is a callback function that runs every time the authentication state changes
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await auth.signOut();  // use this method for logout
      setUser(null);  //after logput setUser null
      navigate('/');  // after logout go to login page
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };

  const showdata = [
    { pathname: "Register", path: "/Register" },
    { pathname: "Login", path: "/" },
  ];

  if (user) {
    showdata.push({ pathname: "Employee", path: "/Employee" });
    showdata.push({ pathname: "Add Data", path: "/Updatedata" });
  }

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Navbar</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {showdata.map(item => (
              <li key={item.pathname} className="nav-item">
                <NavLink to={item.path} className="nav-link">
                  {item.pathname}
                </NavLink>
              </li>
            ))}
          </ul>
          
          {/* Show logout button only if user is logged in */}
          {user && (
            <button className="btn btn-outline-danger" onClick={handleLogout}>
              Logout
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
