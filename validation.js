export const validateStep = (step, tripPlan) => {
    const errors = {};
  
    switch(step) {
      case 1:
        if (!tripPlan.destination) {
          errors.destination = 'Please select a destination';
        }
        break;
  
      case 2:
        if (!tripPlan.dates.start || !tripPlan.dates.end) {
          errors.dates = 'Please select both start and end dates';
        }
        if (tripPlan.dates.start && tripPlan.dates.end && 
            new Date(tripPlan.dates.start) > new Date(tripPlan.dates.end)) {
          errors.dates = 'End date must be after start date';
        }
        if (!tripPlan.transportation) {
          errors.transportation = 'Please select transportation preference';
        }
        if (!tripPlan.budget) {
          errors.budget = 'Please select your budget range';
        }
        break;
  
      case 3:
        if (tripPlan.interests.length === 0) {
          errors.interests = 'Please select at least one interest';
        }
        if (!tripPlan.accommodation) {
          errors.accommodation = 'Please select accommodation type';
        }
        if (tripPlan.activities.length === 0) {
          errors.activities = 'Please select at least one activity';
        }
        break;
  
      case 4:
        if (!tripPlan.contactInfo.name) {
          errors.name = 'Please enter your name';
        }
        if (!tripPlan.contactInfo.email) {
          errors.email = 'Please enter your email';
        } else if (!/\S+@\S+\.\S+/.test(tripPlan.contactInfo.email)) {
          errors.email = 'Please enter a valid email';
        }
        if (!tripPlan.contactInfo.phone) {
          errors.phone = 'Please enter your phone number';
        } else if (!/^\d{10}$/.test(tripPlan.contactInfo.phone.replace(/[- ]/g, ''))) {
          errors.phone = 'Please enter a valid 10-digit phone number';
        }
        break;
  
      default:
        break;
    }
  
    return errors;
  };