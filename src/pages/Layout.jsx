import React from 'react';
import Navigation from './Navigation';
import classes from '../styles/Layout.module.css';

const Layout = (props) => {
  return (
    <>
      <header className={classes['main-header']}>
        <h1>Instagram</h1>
        <Navigation
          isLoggedIn={props.isAuthenticated}
          onLogout={props.onLogout}
        />
      </header>
    </>
  );
};

export default Layout;
