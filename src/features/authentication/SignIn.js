import React from 'react';
import { Link } from 'react-router-dom';

export default function SignIn() {
  return (
    <div className='sign-in__page-container'>
      <div className='sign-in__container'>
        <header className='sign-in__header-container'>
          <span className='font__montserrat'>Shopy</span>
        </header>

        <main className='sign-in__main-container'>
          <form>
            <div className='sign-in__input-container'>
              <input
                type='email'
                className='sign-in__input font__montserrat'
                placeholder='Email address'
              ></input>
            </div>
            <div className='sign-in__input-container'>
              <input
                type='password'
                className='sign-in__input font__montserrat'
                placeholder='Password'
              ></input>
            </div>

            <button className='sign-in__action-button'>Sign in</button>
          </form>
        </main>

        <footer className='sign-in__footer-container'>
          <div className='sign-in__footer-info-container'>
            <span className='sign-in__info'>Don't have an account?</span>
            <Link className='global__link' to='/sign-up'>Sign up</Link>
          </div>
          <div className='sign-in__footer-info-container'>
            <span className='sign-in__info'>Forgetten your password?</span>
            <span className='global__link'>Reset password</span>
          </div>
        </footer>
      </div>
    </div>
  );
}
