import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
  const navigate = useNavigate();

  // Animation variants for better organization
  const contentVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 }
  };

  const statsVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.6
      }
    }
  };

  const statItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const handleExploreClick = () => {
    navigate('/destinations');
  };

  const handleScrollClick = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  const stats = [
    { number: '40+', label: 'Tourist Spots' },
    { number: '20+', label: 'Waterfalls' },
    { number: '15+', label: 'Wildlife Areas' }
  ];

  return (
    <section className="hero" role="banner" aria-label="Hero Section">
      <div className="hero-content">
        <motion.h1
          variants={contentVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.8 }}
        >
          Discover Chhattisgarh
        </motion.h1>

        <motion.p
          variants={contentVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.8, delay: 0.3 }}
          className="hero-subtitle"
        >
          Experience the heart of India's cultural heritage
        </motion.p>

        <motion.div
          className="hero-stats"
          variants={statsVariants}
          initial="hidden"
          animate="visible"
          aria-label="Tourism Statistics"
        >
          {stats.map(({ number, label }) => (
            <motion.div 
              key={label}
              className="stat-item"
              variants={statItemVariants}
              transition={{ duration: 0.5 }}
            >
              <h3>{number}</h3>
              <p>{label}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.button 
          className="cta-button"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleExploreClick}
          aria-label="Explore Destinations"
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          Explore Now
        </motion.button>
      </div>
      
      <div 
        className="hero-overlay" 
        aria-hidden="true"
      />
      
      <button
        className="scroll-indicator"
        onClick={handleScrollClick}
        aria-label="Scroll to content"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ 
            duration: 1.5, 
            repeat: Infinity,
            ease: "easeInOut" 
          }}
        >
          <i className="fas fa-chevron-down" aria-hidden="true" />
        </motion.div>
      </button>
    </section>
  );
};

export default Hero;