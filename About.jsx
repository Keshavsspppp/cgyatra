import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Link } from 'react-router-dom';
import './About.css';

const About = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const scrollProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const stats = [
    { number: "1000+", label: "Tourist Spots", icon: "fas fa-map-marker-alt" },
    { number: "50+", label: "Cultural Events", icon: "fas fa-calendar-alt" },
    { number: "100k+", label: "Happy Visitors", icon: "fas fa-smile" },
    { number: "30+", label: "Awards Won", icon: "fas fa-trophy" }
  ];

  const features = [
    {
      icon: "fas fa-mountain",
      title: "Natural Wonders",
      description: "Explore breathtaking waterfalls, dense forests, and scenic landscapes"
    },
    {
      icon: "fas fa-drum",
      title: "Cultural Heritage",
      description: "Experience vibrant tribal traditions and ancient customs"
    },
    {
      icon: "fas fa-temple",
      title: "Historic Temples",
      description: "Visit ancient temples and archaeological marvels"
    }
  ];

  return (
    <div className="about-container">
      <motion.div 
        className="progress-bar"
        style={{ scaleX: scrollProgress }}
      />

      {/* Hero Section */}
      <section className="hero-section" ref={ref}>
        <div className="hero-content">
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Discover Chhattisgarh
          </motion.h1>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Experience the heart of incredible India
          </motion.p>

          <div className="stats-container">
            {stats.map((stat, index) => (
              <motion.div 
                key={index}
                className="stat-card"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 + 0.4 }}
              >
                <i className={stat.icon}></i>
                <h3>{stat.number}</h3>
                <p>{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="section-content">
          <motion.h2
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            Why Choose Chhattisgarh
          </motion.h2>
          <div className="features-grid">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="feature-card"
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <i className={feature.icon}></i>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="section-content">
          <motion.div
            className="cta-content"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2>Start Your Journey Today</h2>
            <p>Experience the magic of Chhattisgarh's culture and landscapes</p>
            <Link to="/contact" className="cta-button">
              Plan Your Visit
              <i className="fas fa-arrow-right"></i>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;