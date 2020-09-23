import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './Auth.style.css';
import ConfirmEmail from './ConfirmEmail';
import SignIn from './SignIn';
import SignUp from './SignUp';

export default function Auth() {
  return (
    <div className='auth__container'>
      <Switch>
        <Route path='/sign-in'>
          <SignIn />
        </Route>

        <Route path='/sign-up'>
          <SignUp />
        </Route>

        <Route path='/confirm-email'>
          <ConfirmEmail></ConfirmEmail>
        </Route>
      </Switch>
    </div>
  );
}
