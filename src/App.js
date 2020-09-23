import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { UserProvider } from './context/UserContext';
import Auth from './features/authentication/Auth';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faCog } from '@fortawesome/free-solid-svg-icons';

library.add(faCog);

export default function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <Auth />
      </UserProvider>
    </BrowserRouter>
  );
}
