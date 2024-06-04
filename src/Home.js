import React from 'react';
import { useLocation } from 'react-router-dom';

function Home() {
  const location = useLocation();
  const { state } = location;

  return (
    <div>
      {state ? (
        <div>
          <p>First Name: {state.firstName}</p>
          <p>Last Name: {state.lastName}</p>
          <p>Email: {state.email}</p>
        </div>
      ) : (
        <p>No user data available</p>
      )}
    </div>
  );
}

export default Home;
