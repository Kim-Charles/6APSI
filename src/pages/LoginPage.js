import React, { useState } from 'react';

function LoginPage() {
 
  return (
    <div>
      <h2>Login</h2>
      <div>Username:{" "}<input
        type="text"
        placeholder="Username"
      /></div><br />
      <div>
        Password:{" "}
      <input
        type="password"
        placeholder="Password"
      />
      </div>
      <br />
      <button >Login</button>
    </div>
  );
}

export default LoginPage;
