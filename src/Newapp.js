import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Redirect, Link, useHistory } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [error, setError] = useState('');
  const history = useHistory();

  const handleLogin = () => {
    axios.post('http://localhost:5000/login', { username, password })
      .then(response => {
        if (response.status === 200) {
          setError('');
          setLoggedIn(true);
          history.push('/home'); // Redirect to the home page
        }
      })
      .catch(error => {
        setError('Invalid credentials');
      });
  };

  return (
    <div>
      <h2>Login</h2>
      <input type="text" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
      {error && <p>{error}</p>}
      {isLoggedIn && <Redirect to="/home" />}
    </div>
  );
};

const Home = () => {
  return (
    <div>
      <h2>Welcome to the Home Page</h2>
      <p>You are logged in!</p>
    </div>
  );
};

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/login" component={Login} />
        <Route exact path="/home" component={Home} />
      </div>
    </Router>
  );
}

export default NewApp;
