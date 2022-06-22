import React from 'react';
import { useState } from 'react';
import classes from '../styles/Feed.module.css';

const Feed = ({ data }) => {
  const [comment, setComment] = useState('');
  const onChange = (event) => setComment(event.target.value);
  const [commentArray, setCommentArray] = useState([]);
  const onSubmit = (event) => {
    event.preventDefault();
    //이벤트가 발생해도 `submit` 새로고침을 막는 함수
    if (comment === '') {
      //댓글이 공백이라면 바로 리턴하여 함수를 끝낸다.
      return;
    }
    //setCommentArray 는 빈 배열안에 댓글입력 값을 넣는것
    setCommentArray((commentValueList) => [comment, ...commentValueList]);
    setComment('');
    //또한 마지막에 setComment 댓글의 setState값을 공백으로 주어
    //submit을 하게되면 댓글의 값은 공백으로 하게되는것이다.
  };
  return (
    <>
      <div className={classes.post}>
        <div className={classes.info}>
          <div className={classes.user}>
            <div className={classes.profile}>
              <img src={data.userImg} alt="" />
            </div>
            <p className={classes.username}>{data.userName}</p>
          </div>
        </div>
        <img src={data.userImg} className={classes.postimg} alt="" />
        <div className={classes.content}>
          <div className={classes.reaction}>
            <img src="./img/gg.png" className={classes.reicon} alt="" />
            <img src="./img/love.png" className={classes.reicon} alt="" />
            <img src="./img/post.png" className={classes.reicon} alt="" />
            <img src="./img/love.png" className={classes.save} alt="" />
          </div>
          {/* 댓글 불러오는곳 */}
          <p className={classes.likes}>1,012 likes</p>
          {data.comment.map((comment) => (
            <div key={comment.id}>
              <p className={classes.description}>
                <span>{comment.userName}</span>
                {comment.content}
              </p>
            </div>
          ))}
          {commentArray.map((value, index) => (
            <div key={index}>
              <p className={classes.description}>
                <span>{value}</span>
                {/* {comment.content} */}
              </p>
            </div>
          ))}
          <p className={classes.time}>2 minutes ago</p>
        </div>
        <form className={classes.comment} onSubmit={onSubmit}>
          <img src="./img/love.png" className={classes.icon} alt="" />
          <input
            type="text"
            className={classes.commentbox}
            placeholder="Add a comment"
            value={comment}
            onChange={onChange}
          />
          <button className={classes.btn}>post</button>
        </form>
      </div>
    </>
  );
};

export default Feed;
