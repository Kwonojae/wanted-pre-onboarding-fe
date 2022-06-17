import React from 'react';
import Navigation from './Navigation';

const Layout = (props) => {
  return (
    <header>
      <h1>레이아웃 컴포넌트</h1>
      <Navigation
        isLoggedIn={props.isAuthenticated}
        onLogout={props.onLogout}
      />
    </header>
  );
};

export default Layout;
