import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './PlanTrip.css';

const destinations = [
  {
    id: 1,
    name: "Chitrakote Falls",
    image: "/images/destinations/chitrakote.jpg",
    description: "India's widest waterfall, known as the Niagara of India",
    featured: true
  },
  {
    id: 2,
    name: "Bastar",
    image: "/images/destinations/bastar.jpg",
    description: "Experience rich tribal culture and heritage",
    featured: true
  },
  // Add more destinations
];

const interests = [
  "Adventure",
  "Culture",
  "Nature",
  "Wildlife",
  "Photography",
  "Food",
  "History",
  "Spirituality"
];

const accommodationTypes = [
  "Luxury Hotel",
  "Budget Hotel",
  "Resort",
  "Homestay",
  "Camping"
];

const PlanTrip = () => {
  const [step, setStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [tripPlan, setTripPlan] = useState({
    destination: '',
    dates: { start: '', end: '' },
    transportation: '',
    budget: '',
    interests: [],
    activities: [],
    accommodation: '',
    contactInfo: {
      name: '',
      email: '',
      phone: ''
    },
    specialRequests: ''
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTripPlan(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateStep = () => {
    const newErrors = {};
    
    switch(step) {
      case 1:
        if (!tripPlan.destination) newErrors.destination = 'Please select a destination';
        break;
      case 2:
        if (!tripPlan.dates.start || !tripPlan.dates.end) {
          newErrors.dates = 'Please select your travel dates';
        }
        if (!tripPlan.transportation) newErrors.transportation = 'Please select transportation';
        if (!tripPlan.budget) newErrors.budget = 'Please select your budget range';
        break;
      case 3:
        if (tripPlan.interests.length === 0) newErrors.interests = 'Please select at least one interest';
        if (!tripPlan.accommodation) newErrors.accommodation = 'Please select accommodation type';
        break;
      case 4:
        if (!tripPlan.contactInfo.name) newErrors.name = 'Name is required';
        if (!tripPlan.contactInfo.email) newErrors.email = 'Email is required';
        if (!tripPlan.contactInfo.phone) newErrors.phone = 'Phone number is required';
        break;
      default:
        break;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep()) {
      setStep(prev => prev + 1);
    }
  };

  const handlePrevious = () => {
    setStep(prev => prev - 1);
  };

  const handleSubmit = async () => {
    if (validateStep()) {
      setIsLoading(true);
      try {
        // Add your API call here
        await new Promise(resolve => setTimeout(resolve, 2000)); // Simulated API call
        setIsSuccess(true);
      } catch (error) {
        setErrors({ submit: 'Failed to submit trip plan. Please try again.' });
      } finally {
        setIsLoading(false);
      }
    }
  };

  const renderStepContent = () => {
    switch (step) {
      case 1:
        return (
          <div className="step-content">
            <h2>Choose Your Destination</h2>
            <div className="destination-grid">
              {destinations.map(dest => (
                <motion.div
                  key={dest.id}
                  className={`destination-card ${tripPlan.destination === dest.id ? 'selected' : ''}`}
                  onClick={() => handleInputChange({
                    target: { name: 'destination', value: dest.id }
                  })}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="destination-image">
                    <img src={dest.image} alt={dest.name} />
                    {dest.featured && <span className="featured-badge">Featured</span>}
                  </div>
                  <div className="destination-info">
                    <h3>{dest.name}</h3>
                    <p>{dest.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            {errors.destination && (
              <div className="error-message">{errors.destination}</div>
            )}
          </div>
        );

      case 2:
        return (
          <div className="step-content">
            <h2>Travel Details</h2>
            <div className="form-grid">
              <div className="form-group">
                <label>Travel Dates</label>
                <div className="date-inputs">
                  <input
                    type="date"
                    name="dates.start"
                    value={tripPlan.dates.start}
                    onChange={handleInputChange}
                    min={new Date().toISOString().split('T')[0]}
                  />
                  <input
                    type="date"
                    name="dates.end"
                    value={tripPlan.dates.end}
                    onChange={handleInputChange}
                    min={tripPlan.dates.start}
                  />
                </div>
                {errors.dates && <div className="error-message">{errors.dates}</div>}
              </div>

              <div className="form-group">
                <label>Transportation Preference</label>
                <select
                  name="transportation"
                  value={tripPlan.transportation}
                  onChange={handleInputChange}
                >
                  <option value="">Select Transportation</option>
                  <option value="car">Private Car</option>
                  <option value="bus">Bus</option>
                  <option value="train">Train</option>
                  <option value="flight">Flight</option>
                </select>
                {errors.transportation && (
                  <div className="error-message">{errors.transportation}</div>
                )}
              </div>

              <div className="form-group">
                <label>Budget Range (per person)</label>
                <select
                  name="budget"
                  value={tripPlan.budget}
                  onChange={handleInputChange}
                >
                  <option value="">Select Budget Range</option>
                  <option value="budget">Budget (₹5,000 - ₹15,000)</option>
                  <option value="moderate">Moderate (₹15,000 - ₹30,000)</option>
                  <option value="luxury">Luxury (₹30,000+)</option>
                </select>
                {errors.budget && <div className="error-message">{errors.budget}</div>}
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="step-content">
            <h2>Preferences</h2>
            <div className="form-grid">
              <div className="form-group">
                <label>Interests</label>
                <div className="interests-grid">
                  {interests.map(interest => (
                    <motion.div
                      key={interest}
                      className={`interest-tag ${tripPlan.interests.includes(interest) ? 'selected' : ''}`}
                      onClick={() => handleInterestToggle(interest)}
                      whileHover={{ scale: 1.05 }}
                    >
                      {interest}
                    </motion.div>
                  ))}
                </div>
                {errors.interests && (
                  <div className="error-message">{errors.interests}</div>
                )}
              </div>

              <div className="form-group">
                <label>Accommodation Type</label>
                <select
                  name="accommodation"
                  value={tripPlan.accommodation}
                  onChange={handleInputChange}
                >
                  <option value="">Select Accommodation</option>
                  {accommodationTypes.map(type => (
                    <option key={type} value={type.toLowerCase()}>
                      {type}
                    </option>
                  ))}
                </select>
                {errors.accommodation && (
                  <div className="error-message">{errors.accommodation}</div>
                )}
              </div>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="step-content">
            <h2>Contact Information</h2>
            <div className="form-grid">
              <div className="form-group">
                <label>Full Name</label>
                <input
                  type="text"
                  name="contactInfo.name"
                  value={tripPlan.contactInfo.name}
                  onChange={handleInputChange}
                  placeholder="Enter your full name"
                />
                {errors.name && <div className="error-message">{errors.name}</div>}
              </div>

              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  name="contactInfo.email"
                  value={tripPlan.contactInfo.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email"
                />
                {errors.email && <div className="error-message">{errors.email}</div>}
              </div>

              <div className="form-group">
                <label>Phone Number</label>
                <input
                  type="tel"
                  name="contactInfo.phone"
                  value={tripPlan.contactInfo.phone}
                  onChange={handleInputChange}
                  placeholder="Enter your phone number"
                />
                {errors.phone && <div className="error-message">{errors.phone}</div>}
              </div>

              <div className="form-group">
                <label>Special Requests (Optional)</label>
                <textarea
                  name="specialRequests"
                  value={tripPlan.specialRequests}
                  onChange={handleInputChange}
                  placeholder="Any special requirements or requests..."
                  rows="4"
                />
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="plan-trip-page">
      <div className="hero-section">
        <h1>Plan Your Perfect Trip</h1>
        <p>Let us help you create unforgettable memories in Chhattisgarh</p>
      </div>

      <div className="container">
        <div className="planning-steps">
          {[1, 2, 3, 4].map((stepNumber) => (
            <div key={stepNumber} className={`step ${step === stepNumber ? 'active' : ''}`}>
              <div className="step-number">{stepNumber}</div>
              <div className="step-text">
                {stepNumber === 1 && 'Destination'}
                {stepNumber === 2 && 'Details'}
                {stepNumber === 3 && 'Preferences'}
                {stepNumber === 4 && 'Contact'}
              </div>
            </div>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="step-content"
          >
            {isSuccess ? (
              <div className="success-content">
                <i className="fas fa-check-circle"></i>
                <h2>Trip Plan Submitted Successfully!</h2>
                <p>We'll contact you shortly with your customized itinerary.</p>
              </div>
            ) : (
              <>
                {renderStepContent()}
                <div className="step-navigation">
                  {step > 1 && (
                    <button className="prev-btn" onClick={handlePrevious}>
                      <i className="fas fa-arrow-left"></i> Previous
                    </button>
                  )}
                  {step < 4 ? (
                    <button className="next-btn" onClick={handleNext}>
                      Next <i className="fas fa-arrow-right"></i>
                    </button>
                  ) : (
                    <button 
                      className="submit-btn"
                      onClick={handleSubmit}
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <>
                          <div className="loader"></div>
                          Submitting...
                        </>
                      ) : (
                        <>
                          Submit Plan
                          <i className="fas fa-paper-plane"></i>
                        </>
                      )}
                    </button>
                  )}
                </div>
              </>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default PlanTrip;