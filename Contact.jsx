import { useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [submitStatus, setSubmitStatus] = useState({
    status: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitStatus({ status: 'loading', message: 'Sending message...' });

    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubmitStatus({
        status: 'success',
        message: 'Thank you! Your message has been sent successfully.'
      });
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      setSubmitStatus({
        status: 'error',
        message: 'Sorry, there was an error sending your message. Please try again.'
      });
    }
  };

  const mapContainerStyle = {
    width: '100%',
    height: '450px'
  };
  
  const center = {
    lat: 21.2513844, // Your location's latitude
    lng: 81.5964167  // Your location's longitude
  };

  const MapComponent = () => {
    return (
      <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          center={center}
          zoom={14}
        >
          <Marker position={center} />
        </GoogleMap>
      </LoadScript>
    );
  };

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <div className="contact-hero">
        <h1>Contact Us</h1>
        <p>Get in touch with us for any queries about Chhattisgarh Tourism</p>
      </div>

      {/* Quick Contact Info */}
      <div className="quick-contact">
        <div className="container">
          <div className="contact-info-grid">
            <div className="contact-info-card">
              <i className="fas fa-map-marker-alt"></i>
              <h3>Visit Us</h3>
              <p>IIIT</p>
              <p>NR</p>
              <p>Raipur, Chhattisgarh 492001</p>
            </div>

            <div className="contact-info-card">
              <i className="fas fa-phone-alt"></i>
              <h3>Call Us</h3>
              <p>Toll Free: 1400 180 1961</p>
              <p>Phone: +91 6263210596</p>
              <p>Mobile: +91 98765 43210</p>
            </div>

            <div className="contact-info-card">
              <i className="fas fa-envelope"></i>
              <h3>Email Us</h3>
              <p>info@cgyatra.com</p>
              <p>support@cgyatra.com</p>
              <p>bookings@cgyatra.com</p>
            </div>

            <div className="contact-info-card">
              <i className="fas fa-clock"></i>
              <h3>Working Hours</h3>
              <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
              <p>Saturday: 9:00 AM - 4:00 PM</p>
              <p>Sunday: Closed</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Contact Section */}
      <div className="main-contact-section">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Form */}
            <div className="contact-form-container">
              <h2>Send us a Message</h2>
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="email">Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="Enter your email"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone">Phone</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject *</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="Enter message subject"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Write your message here..."
                    rows="5"
                  ></textarea>
                </div>

                {submitStatus.message && (
                  <div className={`submit-status ${submitStatus.status}`}>
                    {submitStatus.message}
                  </div>
                )}

                <button 
                  type="submit" 
                  className="primary-button"
                  disabled={submitStatus.status === 'loading'}
                >
                  {submitStatus.status === 'loading' ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>

            {/* Map Section */}
            <div className="map-container">
              <h2>Find Us</h2>
              <div className="map">
                <MapComponent />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="faq-section">
        <div className="container">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h3>How can I book a tour package?</h3>
              <p>You can book tour packages through our website or by contacting our office directly. We offer various packages suitable for different preferences and budgets.</p>
            </div>
            <div className="faq-item">
              <h3>What is the best time to visit Chhattisgarh?</h3>
              <p>The best time to visit Chhattisgarh is from October to March when the weather is pleasant and suitable for outdoor activities and sightseeing.</p>
            </div>
            <div className="faq-item">
              <h3>Do you provide custom tour packages?</h3>
              <p>Yes, we offer customized tour packages based on your preferences, duration of stay, and budget. Contact our team for personalized tour planning.</p>
            </div>
            <div className="faq-item">
              <h3>What documents are required for booking?</h3>
              <p>For booking, you'll need a valid ID proof (Aadhar Card, Passport, etc.) and address proof. International tourists need a valid visa and passport.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;