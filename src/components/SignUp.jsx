import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/style.css';

const SignUp = ({ darkMode }) => {
  return (
    <div className={darkMode ? 'auth-form dark-mode' : 'auth-form'}>
      <h2>Sign Up</h2>
      <form>
        <input type="text" placeholder="Username" required /><br />
        <input type="email" placeholder="Email" required /><br />
        <input type="password" placeholder="Password" required /><br />
        <button type="submit">Sign Up</button>
      </form>
      <p>Already have an account? <Link to="/signin">Sign In</Link></p>
    </div>
  );
};

export default SignUp;
