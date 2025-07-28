import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/style.css';

const SignIn = ({ darkMode }) => {
  return (
    <div className={darkMode ? 'auth-form dark-mode' : 'auth-form'}>
      <h2>Sign In</h2>
      <form>
        <input type="text" placeholder="Username" required /><br />
        <input type="password" placeholder="Password" required /><br />
        <button type="submit">Sign In</button>
      </form>
      <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
    </div>
  );
};

export default SignIn;
