import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Feed from './Feed';
import classes from '../styles/Home.module.css';

const Home = (props) => {
  const [feedList, setFeedList] = useState([]);
  useEffect(() => {
    fetch('/Data/feed.json', {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((data) => {
        // console.log('성공');
        setFeedList(data);
      });
  });
  return (
    <>
      <div className={classes['feed']}>
        {feedList.map((data) => {
          return <Feed key={data.id} data={data} />;
        })}
      </div>
    </>
  );
};

export default Home;
