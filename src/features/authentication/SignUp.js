import React from 'react';

export default function SignUp() {
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
              ></input>
            </div>
            <div className='sign-up__input-container'>
              <input
                type='email'
                className='sign-up__input font__montserrat'
                placeholder='Email address'
              ></input>
            </div>
            <div className='sign-up__input-container'>
              <input
                type='password'
                className='sign-up__input font__montserrat'
                placeholder='Password'
              ></input>
            </div>
            <div className='sign-up__input-container'>
              <input
                type='password'
                className='sign-up__input font__montserrat'
                placeholder='Confirm password'
              ></input>
            </div>

            <button className='sign-up__action-button'>Sign up</button>
          </form>
        </main>

        <footer className='sign-up__footer-container'>
          <div className='sign-up__footer-info-container'>
            <span className='sign-up__info'>Already have an account?</span>
            <span className='sign-up__link'>Sign in</span>
          </div>
          <div className='sign-up__footer-info-container'>
            <span className='sign-up__info'>Forgetten your password?</span>
            <span className='sign-up__link'>Reset password</span>
          </div>
        </footer>
      </div>
    </div>
  );
}
