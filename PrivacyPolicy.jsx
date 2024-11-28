import { motion } from 'framer-motion';
import './Legal.css';

const PrivacyPolicy = () => {
  return (
    <motion.div 
      className="legal-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="legal-content">
        <h1>Privacy Policy</h1>
        <p className="last-updated">Last Updated: March 20, 2024</p>

        <section>
          <h2>1. Information We Collect</h2>
          <h3>Personal Information:</h3>
          <ul>
            <li>Name and contact details</li>
            <li>Login credentials</li>
            <li>Payment information</li>
            <li>Travel preferences</li>
            <li>Booking history</li>
          </ul>
        </section>

        <section>
          <h2>2. How We Use Your Information</h2>
          <p>We use your information to:</p>
          <ul>
            <li>Process your bookings and payments</li>
            <li>Provide customer support</li>
            <li>Send important updates about your bookings</li>
            <li>Improve our services</li>
            <li>Send promotional content (with your consent)</li>
          </ul>
        </section>

        <section>
          <h2>3. Information Sharing</h2>
          <p>We may share your information with:</p>
          <ul>
            <li>Service providers (hotels, tour operators)</li>
            <li>Payment processors</li>
            <li>Legal authorities when required</li>
          </ul>
        </section>

        <section>
          <h2>4. Data Security</h2>
          <p>We protect your data through:</p>
          <ul>
            <li>Encryption of sensitive data</li>
            <li>Regular security audits</li>
            <li>Access controls</li>
            <li>Secure data storage</li>
          </ul>
        </section>

        <section>
          <h2>5. Your Rights</h2>
          <p>You have the right to:</p>
          <ul>
            <li>Access your personal data</li>
            <li>Correct inaccurate data</li>
            <li>Request data deletion</li>
            <li>Withdraw consent</li>
            <li>Export your data</li>
          </ul>
        </section>

        <section>
          <h2>6. Cookies Policy</h2>
          <p>We use cookies to:</p>
          <ul>
            <li>Remember your preferences</li>
            <li>Analyze site traffic</li>
            <li>Improve user experience</li>
            <li>Enable certain site features</li>
          </ul>
        </section>

        <section>
          <h2>7. Contact Us</h2>
          <p>For privacy-related inquiries:</p>
          <div className="contact-info">
            <p>Email: privacy@cgtourism.com</p>
            <p>Phone: +91 XXX XXX XXXX</p>
            <p>Address: Tourism Board, Raipur, Chhattisgarh</p>
          </div>
        </section>
      </div>
    </motion.div>
  );
};

export default PrivacyPolicy;