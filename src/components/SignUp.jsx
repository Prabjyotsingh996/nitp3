import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/style.css';

const SignUp = ({ darkMode }) => {
  const navigate = useNavigate();

  return (
    <div className={darkMode ? 'auth-wrapper dark-mode' : 'auth-wrapper'}>
      <div className="auth-illustration left">
        <img src="images/i1.png" alt="Illustration" />
      </div>

      <div className="auth-card">
        <h2>
          Lets <br />
          <strong>Start</strong>
        </h2>
        <p>Sign up to continue</p>

        <form>
          <div className="input-box">
            <span className="input-icon">👤</span>
            <input type="text" placeholder="Username" required />
          </div>
          <div className="input-box">
            <span className="input-icon">📧</span>
            <input type="email" placeholder="Your Email" required />
          </div>
          <div className="input-box">
            <span className="input-icon">🔒</span>
            <input type="password" placeholder="Your Password" required />
          </div>

          <button type="submit" className="btn primary">Sign Up</button>
          <button type="button" className="btn google">
            <img src="https://img.icons8.com/color/16/000000/google-logo.png" alt="Google" /> 
            Google
          </button>
        </form>

        <p className="auth-footer">
          Already have an account? <Link to="/signin">Sign In</Link>
        </p>

        {/* Back Button Below Sign In */}
        <div className="back-to-home">
          <button onClick={() => navigate('/')} className="btn secondary">
            ← Back to Home
          </button>
        </div>
      </div>

      <div className="auth-illustration right">
        <img src="images/i2.jpg" alt="Chart Illustration" />
      </div>
    </div>
  );
};

export default SignUp;
