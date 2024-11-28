import { motion } from 'framer-motion';
import { destinations, interests, activities } from '../data/tripData';
import './Steps.css';
import { useState } from 'react';

export const StepOne = ({ tripPlan, handleInputChange, errors }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    featured: false,
    type: 'all'
  });

  const filteredDestinations = destinations.filter(dest => {
    const matchesSearch = dest.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         dest.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFeatured = !filters.featured || dest.featured;
    const matchesType = filters.type === 'all' || dest.type === filters.type;
    
    return matchesSearch && matchesFeatured && matchesType;
  });

  return (
    <motion.div 
      className="step-content"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
    >
      <h2>Select Your Destination</h2>
      <p className="step-description">Choose from our curated selection of destinations in Chhattisgarh</p>
      
      {errors.destination && (
        <div className="error-message">
          <i className="fas fa-exclamation-circle"></i>
          {errors.destination}
        </div>
      )}

      <div className="destination-section">
        <div className="destination-filters">
          <div className="search-box">
            <i className="fas fa-search search-icon"></i>
            <input 
              type="text"
              placeholder="Search destinations..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="filter-group">
            <h4>Quick Filters</h4>
            <div className="filter-options">
              <label className="filter-option">
                <input 
                  type="checkbox"
                  checked={filters.featured}
                  onChange={(e) => setFilters({...filters, featured: e.target.checked})}
                />
                Featured Destinations
              </label>
            </div>
          </div>

          <div className="filter-group">
            <h4>Destination Type</h4>
            <div className="filter-options">
              {['all', 'wildlife', 'heritage', 'nature', 'spiritual'].map(type => (
                <label key={type} className="filter-option">
                  <input 
                    type="radio"
                    name="type"
                    checked={filters.type === type}
                    onChange={() => setFilters({...filters, type})}
                  />
                  {type.charAt(0).toUpperCase() + type.slice(1)}
                </label>
              ))}
            </div>
          </div>
        </div>

        <div className="destination-grid">
          {filteredDestinations.map(dest => (
            <motion.div 
              key={dest.id} 
              className={`destination-card ${tripPlan.destination === dest.id ? 'selected' : ''}`}
              onClick={() => handleInputChange({
                target: { name: 'destination', value: dest.id }
              })}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="destination-image">
                <img src={dest.image} alt={dest.name} />
                {dest.featured && (
                  <motion.span 
                    className="featured-badge"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                  >
                    Featured
                  </motion.span>
                )}
              </div>
              <div className="destination-info">
                <h3>{dest.name}</h3>
                <p>{dest.description}</p>
                <div className="destination-highlights">
                  {dest.highlights.map((highlight, index) => (
                    <span key={index} className="highlight-tag">
                      <i className={highlight.icon}></i> {highlight.text}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export const StepTwo = ({ tripPlan, handleInputChange, errors }) => (
  <motion.div 
    className="step-content"
    initial={{ opacity: 0, x: 20 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -20 }}
  >
    <h2>Travel Details</h2>
    <p className="step-description">Help us understand your travel preferences</p>

    <div className="form-grid">
      <div className="form-group">
        <label>Travel Dates</label>
        <div className="date-inputs">
          <div className="date-field">
            <span className="date-label">Start Date</span>
            <input 
              type="date"
              name="dates.start"
              value={tripPlan.dates.start}
              onChange={handleInputChange}
              min={new Date().toISOString().split('T')[0]}
              className={errors.dates ? 'error' : ''}
            />
          </div>
          <div className="date-field">
            <span className="date-label">End Date</span>
            <input 
              type="date"
              name="dates.end"
              value={tripPlan.dates.end}
              onChange={handleInputChange}
              min={tripPlan.dates.start || new Date().toISOString().split('T')[0]}
              className={errors.dates ? 'error' : ''}
            />
          </div>
        </div>
        {errors.dates && (
          <div className="error-message">
            <i className="fas fa-exclamation-circle"></i>
            {errors.dates}
          </div>
        )}
      </div>

      <div className="form-group">
        <label>Number of Travelers</label>
        <input 
          type="number"
          name="travelers"
          value={tripPlan.travelers}
          onChange={handleInputChange}
          min="1"
          max="20"
        />
      </div>

      <div className="form-group">
        <label>Transportation Preference</label>
        <select 
          name="transportation"
          value={tripPlan.transportation}
          onChange={handleInputChange}
          className={errors.transportation ? 'error' : ''}
        >
          <option value="">Select transportation</option>
          <option value="car">Private Car</option>
          <option value="bus">Bus</option>
          <option value="train">Train</option>
          <option value="flight">Flight</option>
        </select>
        {errors.transportation && (
          <div className="error-message">
            <i className="fas fa-exclamation-circle"></i>
            {errors.transportation}
          </div>
        )}
      </div>

      <div className="form-group">
        <label>Budget Range (per person)</label>
        <select 
          name="budget"
          value={tripPlan.budget}
          onChange={handleInputChange}
          className={errors.budget ? 'error' : ''}
        >
          <option value="">Select budget range</option>
          <option value="budget">Budget (Under ₹10,000)</option>
          <option value="moderate">Moderate (₹10,000 - ₹25,000)</option>
          <option value="luxury">Luxury (Above ₹25,000)</option>
        </select>
        {errors.budget && (
          <div className="error-message">
            <i className="fas fa-exclamation-circle"></i>
            {errors.budget}
          </div>
        )}
      </div>
    </div>
  </motion.div>
);

export const StepThree = ({ 
  tripPlan, 
  handleInterestToggle, 
  handleActivityToggle, 
  handleInputChange, 
  errors 
}) => (
  <motion.div 
    className="step-content"
    initial={{ opacity: 0, x: 20 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -20 }}
  >
    <h2>Your Preferences</h2>
    <p className="step-description">Tell us what interests you most about Chhattisgarh</p>

    <div className="form-section">
      <h3>Interests</h3>
      {errors.interests && (
        <div className="error-message">
          <i className="fas fa-exclamation-circle"></i>
          {errors.interests}
        </div>
      )}
      <div className="interests-grid">
        {interests.map(interest => (
          <motion.div
            key={interest.id}
            className={`interest-card ${tripPlan.interests.includes(interest.id) ? 'selected' : ''}`}
            onClick={() => handleInterestToggle(interest.id)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <i className={interest.icon}></i>
            <span>{interest.name}</span>
          </motion.div>
        ))}
      </div>
    </div>

    <div className="form-section">
      <h3>Accommodation Preference</h3>
      <select
        name="accommodation"
        value={tripPlan.accommodation}
        onChange={handleInputChange}
        className={errors.accommodation ? 'error' : ''}
      >
        <option value="">Select accommodation type</option>
        <option value="hotel">Hotel</option>
        <option value="resort">Resort</option>
        <option value="homestay">Homestay</option>
        <option value="camping">Camping</option>
      </select>
      {errors.accommodation && (
        <div className="error-message">
          <i className="fas fa-exclamation-circle"></i>
          {errors.accommodation}
        </div>
      )}
    </div>

    <div className="form-section">
      <h3>Activities</h3>
      {errors.activities && (
        <div className="error-message">
          <i className="fas fa-exclamation-circle"></i>
          {errors.activities}
        </div>
      )}
      <div className="activities-grid">
        {activities.map(activity => (
          <motion.div
            key={activity.id}
            className={`activity-card ${tripPlan.activities.includes(activity.id) ? 'selected' : ''}`}
            onClick={() => handleActivityToggle(activity.id)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="activity-image">
              <img src={activity.image} alt={activity.name} />
            </div>
            <div className="activity-info">
              <h4>{activity.name}</h4>
              <p>{activity.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </motion.div>
);

export const StepFour = ({ tripPlan, handleInputChange, errors }) => (
  <motion.div 
    className="step-content"
    initial={{ opacity: 0, x: 20 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -20 }}
  >
    <h2>Review & Contact Information</h2>
    <p className="step-description">Please review your selections and provide your contact details</p>

    <div className="review-summary">
      <motion.div 
        className="review-section"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h3>Selected Destination</h3>
        <p>{destinations.find(d => d.id === tripPlan.destination)?.name}</p>
      </motion.div>

      <motion.div 
        className="review-section"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <h3>Travel Details</h3>
        <p>Dates: {tripPlan.dates.start} to {tripPlan.dates.end}</p>
        <p>Travelers: {tripPlan.travelers}</p>
        <p>Transportation: {tripPlan.transportation}</p>
        <p>Budget Range: {tripPlan.budget}</p>
      </motion.div>

      <motion.div 
        className="review-section"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <h3>Selected Interests</h3>
        <div className="selected-items">
          {tripPlan.interests.map(interestId => (
            <span key={interestId} className="selected-tag">
              {interests.find(i => i.id === interestId)?.name}
            </span>
          ))}
        </div>
      </motion.div>

      <motion.div 
        className="review-section"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <h3>Selected Activities</h3>
        <div className="selected-items">
          {tripPlan.activities.map(activityId => (
            <span key={activityId} className="selected-tag">
              {activities.find(a => a.id === activityId)?.name}
            </span>
          ))}
        </div>
      </motion.div>
    </div>

    <div className="contact-form">
      <h3>Contact Information</h3>
      <div className="form-grid">
        <div className="form-group">
          <label>Full Name</label>
          <input 
            type="text"
            name="contactInfo.name"
            value={tripPlan.contactInfo.name}
            onChange={handleInputChange}
            className={errors.name ? 'error' : ''}
            placeholder="Enter your full name"
          />
          {errors.name && (
            <div className="error-message">
              <i className="fas fa-exclamation-circle"></i>
              {errors.name}
            </div>
          )}
        </div>

        <div className="form-group">
          <label>Email</label>
          <input 
            type="email"
            name="contactInfo.email"
            value={tripPlan.contactInfo.email}
            onChange={handleInputChange}
            className={errors.email ? 'error' : ''}
            placeholder="Enter your email"
          />
          {errors.email && (
            <div className="error-message">
              <i className="fas fa-exclamation-circle"></i>
              {errors.email}
            </div>
          )}
        </div>

        <div className="form-group">
          <label>Phone Number</label>
          <input 
            type="tel"
            name="contactInfo.phone"
            value={tripPlan.contactInfo.phone}
            onChange={handleInputChange}
            className={errors.phone ? 'error' : ''}
            placeholder="Enter your phone number"
          />
          {errors.phone && (
            <div className="error-message">
              <i className="fas fa-exclamation-circle"></i>
              {errors.phone}
            </div>
          )}
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
  </motion.div>
);