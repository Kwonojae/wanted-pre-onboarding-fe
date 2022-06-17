import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import classes from '../styles/Login.module.css';

const Login = (props) => {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [emailIsValid, setEmailIsValid] = useState();
  const [enteredPassword, setEnteredPassword] = useState('');
  const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);
  const navigate = useNavigate();

  const emailRegex = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z](.[a-z{2,8}])?/g;
  const pwdRegex =
    /(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}/g;
  //최소8자 하나 이상의 문자 하나의 숫자 및 하나의 특수문자

  useEffect(() => {
    const identifier = setTimeout(() => {
      setFormIsValid(
        emailRegex.test(enteredEmail) && pwdRegex.test(enteredPassword)
      );
      console.log('Checking form validity!');
    }, 500);
    return () => {
      console.log('CLEANUP');
      clearTimeout(identifier);
      //새로운 타이머 설정하기 전에 마지막 타이머 지움
    };
  }, [enteredEmail, enteredPassword]);
  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);
  };

  const validateEmailHandler = () => {
    setEmailIsValid(emailRegex.test(enteredEmail));
  };

  const validatePasswordHandler = () => {
    setPasswordIsValid(pwdRegex.test(enteredPassword));
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(enteredEmail, enteredPassword);
    navigate('/home');
  };

  return (
    <form className={classes.login} onSubmit={submitHandler}>
      <div
        className={`${classes.control} ${
          emailIsValid === false ? classes.invalid : ''
        }`}
      >
        <label htmlFor="email">E-Mail</label>
        <input
          type="email"
          id="email"
          value={enteredEmail}
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}
        />
      </div>
      <div
        className={`${classes.control} ${
          passwordIsValid === false ? classes.invalid : ''
        }`}
      >
        <label htmlFor="password">password</label>
        <input
          type="password"
          id="password"
          value={enteredPassword}
          onChange={passwordChangeHandler}
          onBlur={validatePasswordHandler}
        />
      </div>
      <div className={`${classes.control}`}>
        <button type="submit" disabled={!formIsValid}>
          Login
        </button>
      </div>
    </form>
  );
};

export default Login;
