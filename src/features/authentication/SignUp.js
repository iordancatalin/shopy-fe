import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

export default function SignUp() {
  const [username, setUsername] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const history = useHistory();


  const handleChange = (event, setter) => {
    const { value } = event.target;
    setter(value);
  };

  const isFormValid = () =>
    username && emailAddress && password && confirmPassword;

  const handleSignUpClick = async () => {
    const payload = { username, emailAddress, password };

    const response = await fetch('http://localhost:8080/api/v1/sign-up', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if(response.status === 200) { history.push('/confirm-email'); }
  };

  return (
    <div className='sign-up__page-container'>
      <div className='sign-up__container'>
        <header className='sign-up__header-container'>
          <span className='font__montserrat'>Shopy</span>
        </header>

        <main className='sign-up__main-container'>
          <form>
            <div className='sign-up__input-container'>
              <input
                type='text'
                className='sign-up__input font__montserrat'
                placeholder='Username'
                value={username}
                onChange={(event) => handleChange(event, setUsername)}
              ></input>
            </div>
            <div className='sign-up__input-container'>
              <input
                type='email'
                className='sign-up__input font__montserrat'
                placeholder='Email address'
                value={emailAddress}
                onChange={(event) => handleChange(event, setEmailAddress)}
              ></input>
            </div>
            <div className='sign-up__input-container'>
              <input
                type='password'
                className='sign-up__input font__montserrat'
                placeholder='Password'
                value={password}
                onChange={(event) => handleChange(event, setPassword)}
              ></input>
            </div>
            <div className='sign-up__input-container'>
              <input
                type='password'
                className='sign-up__input font__montserrat'
                placeholder='Confirm password'
                value={confirmPassword}
                onChange={(event) => handleChange(event, setConfirmPassword)}
              ></input>
            </div>

            <button
              className='sign-up__action-button'
              disabled={!isFormValid()}
              type='button'
              onClick={handleSignUpClick}
            >
              Sign up
            </button>
          </form>
        </main>

        <footer className='sign-up__footer-container'>
          <div className='sign-up__footer-info-container'>
            <span className='sign-up__info'>Already have an account?</span>
            <Link to='/sign-in' className='global__link'>
              Sign in
            </Link>
          </div>
          <div className='sign-up__footer-info-container'>
            <span className='sign-up__info'>Forgetten your password?</span>
            <span className='global__link'>Reset password</span>
          </div>
        </footer>
      </div>
    </div>
  );
}
