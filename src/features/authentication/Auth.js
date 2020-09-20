import React from 'react';
import './Auth.style.css';
import SignIn from './SignIn';
import SignUp from './SignUp';

export default function Auth({ signInPage }) {
  const content = signInPage ? <SignIn /> : <SignUp />;

  return <div className='auth__container'>{content}</div>;
}
