import React, { useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Home from './pages/Home';
import Layout from './pages/Layout';
import Login from './pages/Login';
import PreAssignmentGuide from './pages/PreAssignmentGuide';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const storeUserLoggedIn = localStorage.getItem('isLoggedIn');
    if (storeUserLoggedIn === '1') {
      setIsLoggedIn(true);
    }
  }, []);

  const loginHandler = (email, password) => {
    localStorage.setItem('isLoggedIn', '1'); //로그인 했다는 표식 1
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
    navigate('/');
  };
  return (
    <>
      <Layout isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      <main>
        <Routes>
          {!isLoggedIn && (
            <Route index element={<Login onLogin={loginHandler} />} />
          )}
          {isLoggedIn && (
            <Route path="/home" element={<Home onLogout={logoutHandler} />} />
          )}
        </Routes>
      </main>
    </>
  );
}

export default App;
