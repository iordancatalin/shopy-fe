import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import './ConfirmEmail.style.css';

export default function ConfirmEmail() {
  return (
    <div className='confirm-email__container'>
      <FontAwesomeIcon className='confirm-email__cog-icon' icon='cog' size='7x'></FontAwesomeIcon>
      <div className='confirm-email__text font__montserrat'>
          <span>Confirm email address and then</span>
          <Link to='/sign-in' className='global__link'>Sign in</Link>
      </div>
    </div>
  );
}
