// App.jsx
import React, { useState } from 'react';
import SignUp from './SignUp';
import Login from './Login';

const App = () => {
  const [isSignedUp, setSignedUp] = useState(false);
  const [isLoggedIn, setLoggedIn] = useState(false);

  const handleSignUp = () => {
    // Update the state to indicate that the user is signed up
    setSignedUp(true);
  };

  const handleLogin = (success) => {
    // Update the state based on the login result
    setLoggedIn(success);
  };

  return (
    <div>
      {!isSignedUp ? (
        <SignUp onSignUp={handleSignUp} />
      ) : (
        <>
          {!isLoggedIn ? (
            <Login onLogin={handleLogin} />
          ) : (
            <p>Welcome! You are logged in.</p>
          )}
        </>
      )}
    </div>
  );
};

export default App;
