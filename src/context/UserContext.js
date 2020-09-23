import React, { useState } from 'react';

export const UserContext = React.createContext(undefined);

export function UserProvider(props) {
  const userState = useState(undefined);

  return (
    <UserContext.Provider value={userState}>
      {props.children}
    </UserContext.Provider>
  );
}
