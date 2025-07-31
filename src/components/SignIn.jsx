import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const SignIn = ({ darkMode }) => {
  const navigate = useNavigate();

   const logoStyle = {
    position: 'absolute',
    width: '400px', // increased from 60px to 100px
    height: 'auto',
    zIndex: 10,
  };


  const topLeftStyle = {
    ...logoStyle,
    top: '1rem',
    left: '1rem',
  };

  const topRightStyle = {
    ...logoStyle,
    top: '1rem',
    right: '1rem',
  };

  return (
    <div className={darkMode ? 'auth-wrapper dark-mode' : 'auth-wrapper'} style={{ position: 'relative' }}>
      {/* Logo Top Left */}
      <img src="images/ku logo.png" alt="Left Logo" style={topLeftStyle} />

      {/* Logo Top Right */}
      <img src="images/nit logo.png" alt="Right Logo" style={topRightStyle} />

      <div className="auth-illustration left">
        <img src="images/i1.png" alt="Illustration" />
      </div>

      <div className="auth-card">
        <h2>
          Welcome <br />
          <strong>Back</strong>
        </h2>
        <p>Please sign in to continue</p>

        <form>
          <div className="input-box">
            <span className="input-icon">📧</span>
            <input type="email" placeholder="Your Email" required />
          </div>

          <div className="input-box">
            <span className="input-icon">🔒</span>
            <input type="password" placeholder="Your Password" required />
          </div>

          <button type="submit" className="btn primary">Sign In</button>
          <button type="button" className="btn google">
            <img src="https://img.icons8.com/color/16/000000/google-logo.png" alt="Google" />
            Google
          </button>
        </form>

        <div className="auth-footer">
          <p>
            Don’t have an account? <Link to="/signup">Sign up</Link>
          </p>

          <div className="back-to-home">
            <button onClick={() => navigate('/')} className="btn secondary">
              ← Back to Home
            </button>
          </div>
        </div>
      </div>

      <div className="auth-illustration right">
        <img src="images/i2.jpg" alt="Chart Illustration" />
      </div>
    </div>
  );
};

export default SignIn;
