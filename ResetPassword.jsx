import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate, useParams, Link } from 'react-router-dom';
import './Auth.css';

const ResetPassword = () => {
  const [passwords, setPasswords] = useState({
    newPassword: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isValidToken, setIsValidToken] = useState(true);
  const navigate = useNavigate();
  const { token } = useParams();

  useEffect(() => {
    // Verify token validity
    const verifyToken = async () => {
      try {
        // Add your token verification logic here
        // For example:
        // await authService.verifyResetToken(token);
        setIsValidToken(true);
      } catch (err) {
        setIsValidToken(false);
        setError('Invalid or expired reset link');
      }
    };

    verifyToken();
  }, [token]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    if (passwords.newPassword !== passwords.confirmPassword) {
      setError('Passwords do not match');
      setLoading(false);
      return;
    }

    try {
      // Add your password reset logic here
      // For example:
      // await authService.resetPassword(token, passwords.newPassword);
      
      setSuccess(true);
      setTimeout(() => {
        navigate('/auth');
      }, 3000);
    } catch (err) {
      setError(err.message || 'Failed to reset password');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setPasswords({
      ...passwords,
      [e.target.name]: e.target.value
    });
  };

  if (!isValidToken) {
    return (
      <div className="auth-container">
        <motion.div
          className="auth-card"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="auth-header">
            <h2>Invalid Reset Link</h2>
            <p>This password reset link is invalid or has expired.</p>
          </div>
          <Link to="/forgot-password" className="submit-btn">
            Request New Reset Link
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="auth-container">
      <motion.div
        className="auth-card"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="auth-header">
          <h2>Reset Password</h2>
          <p>Enter your new password below</p>
        </div>

        {error && (
          <motion.div 
            className="error-message"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <i className="fas fa-exclamation-circle"></i>
            {error}
          </motion.div>
        )}

        {success ? (
          <motion.div 
            className="success-message"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <i className="fas fa-check-circle"></i>
            <div>
              <h3>Password Reset Successful!</h3>
              <p>Your password has been successfully reset.</p>
              <p>Redirecting to login page...</p>
            </div>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="newPassword">New Password</label>
              <input
                type="password"
                id="newPassword"
                name="newPassword"
                value={passwords.newPassword}
                onChange={handleChange}
                placeholder="Enter new password"
                required
                disabled={loading}
              />
            </div>

            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={passwords.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm new password"
                required
                disabled={loading}
              />
            </div>

            <motion.button
              type="submit"
              className={`submit-btn ${loading ? 'loading' : ''}`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              disabled={loading}
            >
              {loading ? (
                <span className="loader"></span>
              ) : (
                'Reset Password'
              )}
            </motion.button>
          </form>
        )}
      </motion.div>
    </div>
  );
};

export default ResetPassword;