import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import './Auth.css';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      // Add your password reset logic here
      // For example:
      // await authService.sendPasswordResetEmail(email);
      
      setSuccess(true);
      setTimeout(() => {
        navigate('/auth');
      }, 5000); // Redirect after 5 seconds
    } catch (err) {
      setError(err.message || 'Failed to send reset email');
    } finally {
      setLoading(false);
    }
  };

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
          <p>Enter your email to receive reset instructions</p>
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
              <h3>Email Sent!</h3>
              <p>Please check your inbox for password reset instructions.</p>
              <p>Redirecting to login page...</p>
            </div>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
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
                'Send Reset Link'
              )}
            </motion.button>

            <div className="auth-links">
              <Link to="/auth" className="back-to-login">
                <i className="fas fa-arrow-left"></i>
                Back to Login
              </Link>
            </div>
          </form>
        )}
      </motion.div>
    </div>
  );
};

export default ForgotPassword;
