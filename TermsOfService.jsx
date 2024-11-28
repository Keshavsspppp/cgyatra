import { motion } from 'framer-motion';
import './Legal.css';

const TermsOfService = () => {
  return (
    <motion.div 
      className="legal-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="legal-content">
        <h1>Terms of Service</h1>
        <p className="last-updated">Last Updated: March 20, 2024</p>

        <section>
          <h2>1. Acceptance of Terms</h2>
          <p>By accessing and using the Chhattisgarh Tourism website and services, you agree to be bound by these Terms of Service.</p>
        </section>

        <section>
          <h2>2. User Accounts</h2>
          <ul>
            <li>You must be at least 18 years old to create an account</li>
            <li>You are responsible for maintaining the confidentiality of your account</li>
            <li>You agree to provide accurate and complete information</li>
            <li>You are responsible for all activities under your account</li>
          </ul>
        </section>

        <section>
          <h2>3. Booking and Reservations</h2>
          <p>When making bookings through our platform:</p>
          <ul>
            <li>All bookings are subject to availability</li>
            <li>Prices are subject to change without notice</li>
            <li>Cancellation policies vary by service provider</li>
            <li>Payment information must be accurate and valid</li>
          </ul>
        </section>

        <section>
          <h2>4. User Conduct</h2>
          <p>Users agree not to:</p>
          <ul>
            <li>Violate any applicable laws or regulations</li>
            <li>Infringe on intellectual property rights</li>
            <li>Submit false or misleading information</li>
            <li>Interfere with platform security</li>
          </ul>
        </section>

        <section>
          <h2>5. Content Guidelines</h2>
          <p>When submitting content (reviews, photos, etc.):</p>
          <ul>
            <li>Content must be accurate and truthful</li>
            <li>You must have rights to share the content</li>
            <li>No inappropriate or offensive material</li>
            <li>We reserve the right to remove content</li>
          </ul>
        </section>

        <section>
          <h2>6. Limitation of Liability</h2>
          <p>Chhattisgarh Tourism shall not be liable for:</p>
          <ul>
            <li>Service disruptions or technical issues</li>
            <li>Third-party service provider actions</li>
            <li>Personal injury during tours or activities</li>
            <li>Loss or damage to personal property</li>
          </ul>
        </section>

        <section>
          <h2>7. Contact Information</h2>
          <p>For questions about these terms, contact us at:</p>
          <div className="contact-info">
            <p>Email: legal@cgtoursim.com</p>
            <p>Phone: +91 XXX XXX XXXX</p>
            <p>Address: Tourism Board, Raipur, Chhattisgarh</p>
          </div>
        </section>
      </div>
    </motion.div>
  );
};

export default TermsOfService;