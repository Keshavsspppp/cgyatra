import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './Activities.css';

const activitiesData = [
  {
    id: 1,
    title: "Waterfall Trekking",
    description: "Explore magnificent waterfalls like Chitrakote and Tirathgarh through guided treks",
    image: "/images/activities/waterfall-trek.jpg",
    duration: "4-6 hours",
    difficulty: "Moderate",
    icon: "fas fa-hiking"
  },
  {
    id: 2,
    title: "Wildlife Safari",
    description: "Spot tigers, leopards, and rare species in Kanger Valley National Park",
    image: "/images/activities/wildlife-safari.jpg",
    duration: "3-4 hours",
    difficulty: "Easy",
    icon: "fas fa-paw"
  },
  {
    id: 3,
    title: "Tribal Village Tours",
    description: "Experience authentic tribal life and cultural traditions",
    image: "/images/activities/tribal-tour.jpg",
    duration: "Full Day",
    difficulty: "Easy",
    icon: "fas fa-users"
  },
  {
    id: 4,
    title: "Cave Exploration",
    description: "Discover ancient caves like Kutumsar and Kailash caves",
    image: "/images/activities/cave-exploration.jpg",
    duration: "2-3 hours",
    difficulty: "Moderate",
    icon: "fas fa-mountain"
  },
  {
    id: 5,
    title: "Temple Photography",
    description: "Capture the beauty of ancient temples and architecture",
    image: "/images/activities/temple-photo.jpg",
    duration: "Flexible",
    difficulty: "Easy",
    icon: "fas fa-camera"
  },
  {
    id: 6,
    title: "Local Cooking Classes",
    description: "Learn traditional Chhattisgarhi cuisine from local experts",
    image: "/images/activities/cooking-class.jpg",
    duration: "3 hours",
    difficulty: "Easy",
    icon: "fas fa-utensils"
  }
];

const Activities = () => {
  return (
    <section className="activities-section">
      <div className="container">
        <h2>Things to Do in Chhattisgarh</h2>
        <p className="section-subtitle">Explore exciting activities and experiences</p>
        
        <div className="activities-grid">
          {activitiesData.map((activity) => (
            <motion.div
              key={activity.id}
              className="activity-card"
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="activity-image">
                <img src={activity.image} alt={activity.title} />
                <div className="activity-difficulty">
                  <span className={`difficulty-badge ${activity.difficulty.toLowerCase()}`}>
                    {activity.difficulty}
                  </span>
                </div>
              </div>
              
              <div className="activity-content">
                <div className="activity-icon">
                  <i className={activity.icon}></i>
                </div>
                <h3>{activity.title}</h3>
                <p>{activity.description}</p>
                <div className="activity-meta">
                  <span className="duration">
                    <i className="far fa-clock"></i> {activity.duration}
                  </span>
                </div>
                <Link to={`/activities/${activity.id}`} className="activity-link">
                  Learn More <i className="fas fa-arrow-right"></i>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="activities-cta">
          <Link to="/activities" className="view-all-activities">
            View All Activities
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Activities;