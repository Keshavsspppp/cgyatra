import { useState, useEffect } from 'react';
import './Testimonials.css';

const testimonialData = [
  {
    id: 1,
    name: "Rahul Sharma",
    location: "Delhi",
    image: "/images/testimonials/user1.jpg",
    rating: 5,
    text: "Visiting Chitrakote Falls was a life-changing experience. The natural beauty of Chhattisgarh is unmatched. The local guides were very knowledgeable and friendly.",
    tourPackage: "Bastar Adventure Tour"
  },
  {
    id: 2,
    name: "Priya Patel",
    location: "Mumbai",
    image: "/images/testimonials/user2.jpg",
    rating: 5,
    text: "The tribal culture and heritage tours were incredibly authentic. I learned so much about the rich traditions of Chhattisgarh. Highly recommended!",
    tourPackage: "Cultural Heritage Tour"
  },
  {
    id: 3,
    name: "John Miller",
    location: "USA",
    image: "/images/testimonials/user3.jpg",
    rating: 4,
    text: "The wildlife sanctuary visit was amazing. Spotted several rare species and the accommodation arrangements were excellent.",
    tourPackage: "Wildlife Explorer"
  },
  {
    id: 4,
    name: "Meera Reddy",
    location: "Bangalore",
    image: "/images/testimonials/user4.jpg",
    rating: 5,
    text: "The local food, people, and places were amazing. The tour was well-organized and our guide made sure we had the best experience.",
    tourPackage: "Complete Chhattisgarh Tour"
  }
];

const TestimonialCard = ({ testimonial, isActive }) => {
  return (
    <div className={`testimonial-card ${isActive ? 'active' : ''}`}>
      <div className="testimonial-image">
        <img src={testimonial.image} alt={testimonial.name} />
      </div>
      <div className="testimonial-content">
        <div className="rating">
          {[...Array(5)].map((_, index) => (
            <span 
              key={index} 
              className={`star ${index < testimonial.rating ? 'filled' : ''}`}
            >
              ★
            </span>
          ))}
        </div>
        <p className="testimonial-text">{testimonial.text}</p>
        <div className="testimonial-package">{testimonial.tourPackage}</div>
        <div className="testimonial-author">
          <h4>{testimonial.name}</h4>
          <p>{testimonial.location}</p>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  useEffect(() => {
    let interval;
    if (autoplay) {
      interval = setInterval(() => {
        setCurrentSlide((prev) => 
          prev === testimonialData.length - 1 ? 0 : prev + 1
        );
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [autoplay]);

  const nextSlide = () => {
    setCurrentSlide((prev) => 
      prev === testimonialData.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => 
      prev === 0 ? testimonialData.length - 1 : prev - 1
    );
  };

  return (
    <section className="testimonials-section">
      <div className="testimonials-header">
        <h2>What Our Visitors Say</h2>
        <p>Real experiences from our valued tourists</p>
      </div>

      <div className="testimonials-container"
           onMouseEnter={() => setAutoplay(false)}
           onMouseLeave={() => setAutoplay(true)}>
        <button className="nav-button prev" onClick={prevSlide}>
          <i className="fas fa-chevron-left"></i>
        </button>

        <div className="testimonials-slider">
          {testimonialData.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
              isActive={index === currentSlide}
            />
          ))}
        </div>

        <button className="nav-button next" onClick={nextSlide}>
          <i className="fas fa-chevron-right"></i>
        </button>

        <div className="slider-dots">
          {testimonialData.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;