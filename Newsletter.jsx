
import { motion } from 'framer-motion';
import './Newsletter.css';

const Newsletter = ({ email, setEmail, handleSubscribe, isLoading, error, isSubscribed }) => {
  return (
    <div className="newsletter-container">
      <motion.div 
        className="newsletter-content"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {isSubscribed ? (
          <div className="success-message">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <i className="fas fa-check-circle"></i>
            </motion.div>
            <h3>Thank You for Subscribing!</h3>
            <p>You'll receive our latest updates and exclusive offers.</p>
          </div>
        ) : (
          <>
            <div className="newsletter-header">
              <h3>Subscribe to Our Newsletter</h3>
              <p>Stay updated with the latest travel tips, destinations, and exclusive offers!</p>
            </div>

            <form onSubmit={handleSubscribe} className="newsletter-form">
              <div className="input-group">
                <i className="far fa-envelope"></i>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  disabled={isLoading}
                  className={error ? 'error' : ''}
                />
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

              <motion.button
                type="submit"
                className={`subscribe-btn ${isLoading ? 'loading' : ''}`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <div className="spinner"></div>
                    Subscribing...
                  </>
                ) : (
                  <>
                    Subscribe Now
                    <i className="fas fa-paper-plane"></i>
                  </>
                )}
              </motion.button>
            </form>

            <div className="newsletter-features">
              <div className="feature">
                <i className="fas fa-lock"></i>
                <span>No Spam</span>
              </div>
              <div className="feature">
                <i className="fas fa-times-circle"></i>
                <span>Unsubscribe Anytime</span>
              </div>
              <div className="feature">
                <i className="fas fa-shield-alt"></i>
                <span>Secure & Private</span>
              </div>
            </div>
          </>
        )}
      </motion.div>
    </div>
  );
};

export default Newsletter;