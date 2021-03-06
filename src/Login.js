import React, { useState } from 'react';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState(null)

  const handleSubmit = event => {
    event.preventDefault();
    const userData = {
      username,
      password
    }
    setUser(userData)
  }

  return (
    <div style={{
      display: 'grid',
      textAlign: 'center',
      justifyItems: "center"
    }}>
      <h2>Login</h2>
      <form
        style={{
          display: 'grid',
          textAlign: 'center',
          justifyItems: "center"
        }}
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder="Username"
          onChange={event => setUsername(event.target.value)} />
        <input
          type="password"
          placeholder='password'
          onChange={event => setPassword(event.target.value)}
        />
        <button type="submit">Submit</button>
      </form>

      {user && JSON.stringify(user, null, 2)}

    </div>
  );
}