import { useState, lazy, Suspense } from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/hero/Hero';
import LoadingSpinner from '../components/common/LoadingSpinner';
import ErrorBoundary from '../components/common/ErrorBoundary';
import { useInView } from 'react-intersection-observer';
import './Home.css';

// Animation variants
const animations = {
  page: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 0.5 }
  },
  section: {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  }
};

// Lazy loaded components with error boundaries
const withErrorBoundary = (Component) => (props) => (
  <ErrorBoundary>
    <Component {...props} />
  </ErrorBoundary>
);

const LazyComponents = {
  Activities: withErrorBoundary(lazy(() => 
    import('../components/activities/Activities').catch(() => ({
      default: () => <div>Error loading Activities</div>
    }))
  )),
  Destinations: withErrorBoundary(lazy(() => 
    import('../components/destinations/Destinations').catch(() => ({
      default: () => <div>Error loading Destinations</div>
    }))
  )),
  Testimonials: withErrorBoundary(lazy(() => 
    import('../components/testimonials/Testimonials').catch(() => ({
      default: () => <div>Error loading Testimonials</div>
    }))
  )),
  VideoGallery: withErrorBoundary(lazy(() => 
    import('../components/videoGallery/VideoGallery').catch(() => ({
      default: () => <div>Error loading Video Gallery</div>
    }))
  )),
  Newsletter: withErrorBoundary(lazy(() => 
    import('../components/newsletter/Newsletter').catch(() => ({
      default: () => <div>Error loading Newsletter</div>
    }))
  ))
};

const Section = ({ title, id, children }) => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
    fallbackInView: true
  });

  return (
    <section id={id} ref={ref}>
      <div className="section-content">
        <h2>{title}</h2>
        <motion.div
          initial="initial"
          animate={inView ? "whileInView" : "initial"}
          variants={animations.section}
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
};

const Home = () => {
  const [newsletterState, setNewsletterState] = useState({
    email: '',
    isLoading: false,
    error: '',
    isSubscribed: false
  });

  const handleSubscribe = async (e) => {
    e.preventDefault();
    const { email } = newsletterState;

    if (!email) {
      setNewsletterState(prev => ({
        ...prev,
        error: 'Please enter your email address.'
      }));
      return;
    }

    setNewsletterState(prev => ({ ...prev, isLoading: true, error: '' }));

    try {
      // Add your newsletter subscription logic here
      await new Promise(resolve => setTimeout(resolve, 1000));
      setNewsletterState(prev => ({
        ...prev,
        isSubscribed: true,
        isLoading: false
      }));
    } catch (err) {
      setNewsletterState(prev => ({
        ...prev,
        error: 'Failed to subscribe. Please try again.',
        isLoading: false
      }));
    }
  };

  return (
    <ErrorBoundary>
      <motion.main 
        className="home"
        variants={animations.page}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <Hero />
        
        <Suspense fallback={
          <div className="section-loading">
            <LoadingSpinner />
          </div>
        }>
          <Section title="Destinations" id="destinations">
            <LazyComponents.Destinations />
          </Section>

          <Section title="Activities" id="activities">
            <LazyComponents.Activities />
          </Section>

          <Section title="Testimonials" id="testimonials">
            <LazyComponents.Testimonials />
          </Section>

          <Section title="Video Gallery" id="video-gallery">
            <LazyComponents.VideoGallery />
          </Section>

          <Section title="Newsletter" id="newsletter">
            <LazyComponents.Newsletter 
              {...newsletterState}
              setEmail={(email) => setNewsletterState(prev => ({ ...prev, email }))}
              handleSubscribe={handleSubscribe}
            />
          </Section>
        </Suspense>
      </motion.main>
    </ErrorBoundary>
  );
};

export default Home;