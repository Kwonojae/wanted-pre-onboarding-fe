import React, { Children } from 'react';

const Home = (props) => {
  return (
    <div>
      {Outlet}
      <h1>home컴포넌트 </h1>
    </div>
  );
};

export default Home;
