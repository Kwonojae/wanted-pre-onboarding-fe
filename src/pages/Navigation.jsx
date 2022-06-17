import React from 'react';
import classes from '../styles/Navigation.module.css';

const Navigation = (props) => {
  return (
    <nav className={classes.nav}>
      <ul>
        {props.isLoggedIn && (
          <li>
            <input placeholder="검색" type="text" />
          </li>
        )}
        {props.isLoggedIn && (
          <li>
            <a href="/home">Users</a>
          </li>
        )}
        {props.isLoggedIn && (
          <li>
            <a href="/home">Admin</a>
          </li>
        )}
        {props.isLoggedIn && (
          <li>
            <button onClick={props.onLogout}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
