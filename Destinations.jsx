import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Destinations.css';

// Destination Data
const destinationsData = [
    {
        id: 1,
        name: "Chitrakote Falls",
        location: "Bastar",
        description: "Known as the 'Niagara Falls of India', this horseshoe-shaped waterfall is the widest in India. The falls are located on the Indravati River and drop from a height of about 95 feet. During monsoon, the width extends to nearly 1000 feet, creating a spectacular sight.",
        image: "/images/destinations/chitrakote.jpg",
        galleryImages: [
          "/images/destinations/chitrakote1.jpg",
          "/images/destinations/chitrakote2.jpg",
          "/images/destinations/chitrakote3.jpg"
        ],
        rating: 4.8,
        category: "Waterfall",
        bestTime: "July to March",
        activities: ["Photography", "Nature Walk", "Picnic", "Boating", "Camping"],
        distance: "270 km from Raipur",
        howToReach: "Nearest railway station is Jagdalpur (38 km). Regular buses available from Jagdalpur to Chitrakote.",
        accommodation: ["Luxury Resorts", "Forest Rest Houses", "Budget Hotels"],
        highlights: [
          "India's broadest waterfall",
          "Rainbow formation during sunny days",
          "Boat rides available",
          "Sunset viewing points"
        ],
        entryFee: {
          indian: "₹20",
          foreign: "₹100",
          camera: "₹50"
        },
        timings: "6:00 AM to 6:00 PM"
      },
      {
        id: 2,
        name: "Tirathgarh Waterfall",
        location: "Jagdalpur",
        description: "A stunning multi-tiered waterfall surrounded by dense forests, Tirathgarh Falls cascades down from a height of 300 feet. The waterfall creates multiple natural pools and offers a mesmerizing view especially during the monsoon season. The surrounding area is rich in biodiversity and provides excellent opportunities for nature lovers.",
        image: "/images/destinations/tirathgarh.jpg",
        galleryImages: [
          "/images/destinations/tirathgarh-1.jpg",
          "/images/destinations/tirathgarh-2.jpg",
          "/images/destinations/tirathgarh-3.jpg"
        ],
        rating: 4.6,
        category: "Waterfall",
        bestTime: "October to March",
        activities: ["Trekking", "Photography", "Bird Watching", "Nature Walks", "Swimming"],
        distance: "220 km from Raipur",
        howToReach: "Nearest railway station is Jagdalpur (35 km). Regular buses and taxis available from Jagdalpur.",
        accommodation: ["Forest Rest House", "Eco Resorts", "Homestays"],
        highlights: [
          "Multi-tiered waterfall structure",
          "Natural swimming pools",
          "Rich biodiversity",
          "Trekking trails",
          "Ancient temple nearby"
        ],
        entryFee: {
          indian: "₹15",
          foreign: "₹75",
          camera: "₹30"
        },
        timings: "7:00 AM to 5:00 PM"
      },
    
      {
        id: 3,
        name: "Bhoramdeo Temple",
        location: "Kawardha",
        description: "Often called the 'Khajuraho of Chhattisgarh', this 11th-century temple complex is a masterpiece of Nagara architecture. The main temple is dedicated to Lord Shiva and features intricate carvings depicting scenes from mythology, daily life, and various forms of art. The temple complex is surrounded by the scenic Maikal Hills.",
        image: "/images/destinations/bhoramdeo.jpg",
        galleryImages: [
          "/images/destinations/bhoramdeo-1.jpg",
          "/images/destinations/bhoramdeo-2.jpg",
          "/images/destinations/bhoramdeo-3.jpg"
        ],
        rating: 4.5,
        category: "Temple",
        bestTime: "October to March",
        activities: [
          "Temple Visit",
          "Architecture Tours",
          "Photography",
          "Meditation",
          "Cultural Exploration"
        ],
        distance: "125 km from Raipur",
        howToReach: "Nearest railway station is Kawardha (15 km). Regular buses available from Raipur and Bilaspur.",
        accommodation: [
          "Temple Guest House",
          "Heritage Hotels",
          "Budget Hotels",
          "Government Rest House"
        ],
        highlights: [
          "Ancient architectural marvel",
          "Intricate stone carvings",
          "Peaceful surroundings",
          "Historical significance",
          "Annual temple festival in February"
        ],
        entryFee: {
          indian: "Free",
          foreign: "Free",
          camera: "₹20"
        },
        timings: "5:00 AM to 9:00 PM"
      },
    
      {
        id: 4,
        name: "Kanger Valley National Park",
        location: "Bastar",
        description: "A biodiversity hotspot spanning over 200 sq km, Kanger Valley National Park is known for its pristine forests, unique cave systems, and diverse wildlife. The park features spectacular limestone caves, underground streams, and is home to many endangered species including the rare Bastar Hill Myna.",
        image: "/images/destinations/kanger-valley.jpg",
        galleryImages: [
          "/images/destinations/kanger-valley-1.jpg",
          "/images/destinations/kanger-valley-2.jpg",
          "/images/destinations/kanger-valley-3.jpg"
        ],
        rating: 4.7,
        category: "Wildlife",
        bestTime: "November to June",
        activities: [
          "Safari",
          "Cave Exploration",
          "Bird Watching",
          "Nature Trails",
          "Wildlife Photography"
        ],
        distance: "250 km from Raipur",
        howToReach: "Nearest airport is Raipur. Regular buses available from Jagdalpur (27 km).",
        accommodation: [
          "Forest Rest Houses",
          "Eco Lodges",
          "Camping Sites",
          "Government Guest House"
        ],
        highlights: [
          "Kotumsar Cave - India's second longest cave",
          "Kailash Cave with unique formations",
          "Bastar Hill Myna sanctuary",
          "Pristine waterfalls",
          "Rich tribal culture"
        ],
        entryFee: {
          indian: "₹40",
          foreign: "₹400",
          camera: "₹100",
          vehicle: "₹200"
        },
        timings: "6:00 AM to 5:00 PM"
      },
    
      {
        id: 5,
        name: "Mainpat Hill Station",
        location: "Surguja",
        description: "Known as the 'Shimla of Chhattisgarh', Mainpat is a pristine hill station situated at an altitude of 3,781 feet. The plateau region features rolling meadows, pine forests, waterfalls, and unique Tibetan settlements. The area is known for its pleasant climate, panoramic views, and rich cultural heritage.",
        image: "/images/destinations/mainpat.jpg",
        galleryImages: [
          "/images/destinations/mainpat-1.jpg",
          "/images/destinations/mainpat-2.jpg",
          "/images/destinations/mainpat-3.jpg"
        ],
        rating: 4.4,
        category: "Hill Station",
        bestTime: "October to March",
        activities: [
          "Camping",
          "Hiking",
          "Cultural Tours",
          "Monastery Visits",
          "Adventure Sports",
          "Sunset Viewing"
        ],
        distance: "320 km from Raipur",
        howToReach: "Nearest railway station is Ambikapur (87 km). Regular buses and taxis available from Ambikapur.",
        accommodation: [
          "Tibetan Homestays",
          "Forest Rest House",
          "Eco Resorts",
          "Camping Sites"
        ],
        highlights: [
          "Tiger Point viewpoint",
          "Tibetan settlements",
          "Buddhist monasteries",
          "Mehta Point waterfall",
          "Tribal villages",
          "Adventure sports facilities"
        ],
        entryFee: {
          indian: "Free",
          foreign: "Free",
          camera: "Free",
          parkingFee: "₹30"
        },
        timings: "Open 24 hours"
      },
      {
        id: 6,
        name: "Sirpur Heritage Site",
        location: "Mahasamund",
        description: "Sirpur is an ancient city that flourished between the 6th and 8th centuries CE. This archaeological wonder showcases a perfect blend of Hindu, Buddhist, and Jain cultures. The site features well-preserved temples, monasteries, and ancient market complexes that tell tales of its glorious past.",
        image: "/images/destinations/sirpur.jpg",
        galleryImages: [
          "/images/destinations/sirpur-1.jpg",
          "/images/destinations/sirpur-2.jpg",
          "/images/destinations/sirpur-3.jpg"
        ],
        rating: 4.3,
        category: "Heritage",
        bestTime: "September to March",
        activities: [
          "Archaeological Tours",
          "Photography",
          "Historical Walks",
          "Cultural Programs",
          "Museum Visits"
        ],
        distance: "78 km from Raipur",
        howToReach: "Regular buses available from Raipur. Nearest railway station is Mahasamund (28 km).",
        accommodation: [
          "Heritage Hotels",
          "Tourist Rest House",
          "Budget Hotels",
          "Homestays"
        ],
        highlights: [
          "Lakshmana Temple - 7th century brick temple",
          "Buddha Vihara with unique architecture",
          "Ancient market complex",
          "Annual Sirpur Music and Dance Festival",
          "Archaeological museum"
        ],
        entryFee: {
          indian: "₹25",
          foreign: "₹300",
          camera: "₹50",
          videoCamera: "₹100"
        },
        timings: "8:00 AM to 6:00 PM"
      },
    
      {
        id: 7,
        name: "Barnawapara Wildlife Sanctuary",
        location: "Balodabazar",
        description: "Spread across 244 sq km, Barnawapara Wildlife Sanctuary is a pristine ecosystem known for its diverse flora and fauna. The sanctuary is home to leopards, sloth bears, Indian gaur, and numerous species of deer. The mixed deciduous forests and beautiful grasslands make it a paradise for nature lovers and wildlife enthusiasts.",
        image: "/images/destinations/barnawapara.jpg",
        galleryImages: [
          "/images/destinations/barnawapara-1.jpg",
          "/images/destinations/barnawapara-2.jpg",
          "/images/destinations/barnawapara-3.jpg"
        ],
        rating: 4.5,
        category: "Wildlife",
        bestTime: "November to June",
        activities: [
          "Wildlife Safari",
          "Nature Trails",
          "Bird Watching",
          "Wildlife Photography",
          "Camping",
          "Educational Tours"
        ],
        distance: "100 km from Raipur",
        howToReach: "Nearest railway station is Raipur. Regular buses and taxis available from Raipur.",
        accommodation: [
          "Forest Rest Houses",
          "Eco Tourism Complex",
          "Camping Sites",
          "Nature Camps"
        ],
        highlights: [
          "Rich biodiversity",
          "Scenic nature trails",
          "Ancient Cheradih temple",
          "Waterhole points",
          "Bird watching towers",
          "Interpretation center"
        ],
        entryFee: {
          indian: "₹50",
          foreign: "₹500",
          camera: "₹100",
          safari: "₹1500 per vehicle"
        },
        timings: "6:00 AM to 6:00 PM",
        safariTimings: {
          morning: "6:00 AM to 10:00 AM",
          evening: "3:00 PM to 6:00 PM"
        }
      },
    
      {
        id: 8,
        name: "Danteshwari Temple",
        location: "Dantewada",
        description: "One of the 52 Shakti Peeths of India, Danteshwari Temple is a sacred shrine dedicated to Goddess Danteshwari. Built in the 14th century, this temple is not just a religious site but also an architectural marvel that showcases the rich cultural heritage of the region. The temple is particularly significant during Dussehra celebrations.",
        image: "/images/destinations/danteshwari.jpg",
        galleryImages: [
          "/images/destinations/danteshwari-1.jpg",
          "/images/destinations/danteshwari-2.jpg",
          "/images/destinations/danteshwari-3.jpg"
        ],
        rating: 4.6,
        category: "Temple",
        bestTime: "October to March",
        activities: [
          "Temple Visit",
          "Religious Ceremonies",
          "Cultural Experience",
          "Photography",
          "Meditation"
        ],
        distance: "350 km from Raipur",
        howToReach: "Nearest railway station is Kirandul (3 km). Regular buses available from Jagdalpur and Raipur.",
        accommodation: [
          "Temple Guest House",
          "Budget Hotels",
          "Dharamshalas",
          "Government Rest House"
        ],
        highlights: [
          "Ancient Shakti Peeth",
          "Unique architecture",
          "Grand Dussehra celebration",
          "Traditional tribal offerings",
          "Evening aarti ceremony"
        ],
        entryFee: {
          indian: "Free",
          foreign: "Free",
          camera: "₹20",
          specialPuja: "Starting from ₹251"
        },
        timings: {
          morning: "4:00 AM to 12:00 PM",
          evening: "4:00 PM to 9:00 PM",
          aarti: {
            morning: "5:00 AM",
            evening: "7:30 PM"
          }
        },
        festivals: [
          "Dussehra (October)",
          "Chaitra Navratri (March-April)",
          "Sharad Navratri (September-October)"
        ]
      },
    
      {
        id: 9,
        name: "Tala Caves",
        location: "Janjgir-Champa",
        description: "The Tala Caves represent an extraordinary example of rock-cut architecture dating back to the 7th-8th century CE. These Buddhist caves feature intricate carvings, meditation chambers, and beautiful sculptures that provide insights into the ancient Buddhist culture of the region. The site includes both natural and man-made caves.",
        image: "/images/destinations/tala.jpg",
        galleryImages: [
          "/images/destinations/tala-1.jpg",
          "/images/destinations/tala-2.jpg",
          "/images/destinations/tala-3.jpg"
        ],
        rating: 4.2,
        category: "Heritage",
        bestTime: "October to March",
        activities: [
          "Cave Exploration",
          "Historical Tours",
          "Photography",
          "Archaeological Study",
          "Rock Climbing"
        ],
        distance: "150 km from Raipur",
        howToReach: "Nearest railway station is Champa (25 km). Regular buses available from Bilaspur and Raipur.",
        accommodation: [
          "Government Rest House",
          "Budget Hotels in Champa",
          "Homestays",
          "Tourist Lodge"
        ],
        highlights: [
          "Ancient Buddhist architecture",
          "Rock-cut sculptures",
          "Meditation chambers",
          "Historical inscriptions",
          "Panoramic valley views"
        ],
        entryFee: {
          indian: "₹15",
          foreign: "₹200",
          camera: "₹50",
          guide: "₹300"
        },
        timings: "8:00 AM to 5:00 PM",
        facilities: [
          "Guide Services",
          "Drinking Water",
          "Parking",
          "Information Center"
        ],
        nearbyAttractions: [
          "Shivarinarayan Temple (20 km)",
          "Sheorinarayan Temple (25 km)",
          "Champa City (25 km)"
        ]
      },
      {
        id: 10,
        name: "Madku Dweep",
        location: "Bilaspur",
        description: "An island formed by the Shivnath River, Madku Dweep is a unique blend of natural beauty and ancient heritage. The island houses several ancient temples dating back to the 7th-8th century CE. The serene environment, coupled with archaeological significance, makes it a perfect destination for history enthusiasts and nature lovers.",
        image: "/images/destinations/madku-dweep.jpg",
        galleryImages: [
          "/images/destinations/madku-dweep-1.jpg",
          "/images/destinations/madku-dweep-2.jpg",
          "/images/destinations/madku-dweep-3.jpg"
        ],
        rating: 4.4,
        category: "Heritage",
        bestTime: "October to March",
        activities: [
          "Island Exploration",
          "Temple Visits",
          "Picnicking",
          "Photography",
          "River Side Walks",
          "Archaeological Tours"
        ],
        distance: "90 km from Raipur",
        howToReach: "Nearest railway station is Bilaspur (30 km). Regular buses and taxis available from Bilaspur.",
        accommodation: [
          "Tourist Rest House",
          "Dharamshalas",
          "Hotels in Bilaspur"
        ],
        highlights: [
          "Ancient temples",
          "River island ecosystem",
          "Archaeological remains",
          "Peaceful environment",
          "Riverside picnic spots"
        ],
        entryFee: {
          indian: "₹10",
          foreign: "₹100",
          camera: "₹30",
          boat: "₹50 per person"
        },
        timings: "6:00 AM to 6:00 PM"
      },
    
      {
        id: 11,
        name: "Achanakmar Tiger Reserve",
        location: "Bilaspur",
        description: "A pristine forest reserve spanning 914 sq km, Achanakmar Tiger Reserve is known for its rich biodiversity and beautiful sal forests. The reserve is home to tigers, leopards, and various species of deer. The undulating terrain and diverse ecosystem make it a paradise for wildlife enthusiasts and nature photographers.",
        image: "/images/destinations/achanakmar.jpg",
        galleryImages: [
          "/images/destinations/achanakmar-1.jpg",
          "/images/destinations/achanakmar-2.jpg",
          "/images/destinations/achanakmar-3.jpg"
        ],
        rating: 4.7,
        category: "Wildlife",
        bestTime: "October to June",
        activities: [
          "Tiger Safari",
          "Nature Walks",
          "Wildlife Photography",
          "Bird Watching",
          "Tribal Village Visits"
        ],
        distance: "190 km from Raipur",
        howToReach: "Nearest railway station is Bilaspur (50 km). Regular buses available from Bilaspur.",
        accommodation: [
          "Forest Rest Houses",
          "Eco Tourism Complex",
          "Camping Sites",
          "Resorts"
        ],
        highlights: [
          "Tiger sightings",
          "Dense sal forests",
          "Tribal culture",
          "Diverse wildlife",
          "Beautiful landscapes"
        ],
        entryFee: {
          indian: "₹60",
          foreign: "₹600",
          camera: "₹100",
          safari: "₹2000 per vehicle"
        },
        timings: {
          morning: "6:00 AM to 10:00 AM",
          evening: "3:00 PM to 6:00 PM"
        },
        safariBooking: "Advanced booking required for safari"
      },
    
      {
        id: 12,
        name: "Kendai Waterfall",
        location: "Korba",
        description: "Hidden in the dense forests of Korba district, Kendai Waterfall is a pristine natural wonder cascading down multiple tiers. The waterfall, surrounded by lush greenery, creates a mesmerizing atmosphere with its crystal-clear water and peaceful environment. It's an ideal spot for nature lovers and adventure seekers.",
        image: "/images/destinations/kendai.jpg",
        galleryImages: [
          "/images/destinations/kendai-1.jpg",
          "/images/destinations/kendai-2.jpg",
          "/images/destinations/kendai-3.jpg"
        ],
        rating: 4.3,
        category: "Waterfall",
        bestTime: "July to March",
        activities: [
          "Waterfall Visit",
          "Hiking",
          "Photography",
          "Swimming",
          "Nature Walks",
          "Picnicking"
        ],
        distance: "210 km from Raipur",
        howToReach: "Nearest railway station is Korba (35 km). Local transport available from Korba.",
        accommodation: [
          "Hotels in Korba",
          "Forest Rest House",
          "Camping Sites"
        ],
        highlights: [
          "Multi-tiered waterfall",
          "Natural swimming pools",
          "Trekking trails",
          "Scenic viewpoints",
          "Dense forest surroundings"
        ],
        entryFee: {
          indian: "₹20",
          foreign: "₹100",
          camera: "₹30"
        },
        timings: "7:00 AM to 5:00 PM"
      },
    
      {
        id: 13,
        name: "Rajiv Lochan Temple",
        location: "Rajim",
        description: "A magnificent temple complex dating back to the 7th-8th century, known for its beautiful architecture and religious significance. The temple is dedicated to Lord Vishnu and is one of the most important pilgrimage sites in Chhattisgarh. The annual Rajim Kumbh Mela attracts thousands of devotees.",
        image: "/images/destinations/rajiv-lochan.jpg",
        galleryImages: [
          "/images/destinations/rajiv-lochan-1.jpg",
          "/images/destinations/rajiv-lochan-2.jpg",
          "/images/destinations/rajiv-lochan-3.jpg"
        ],
        rating: 4.5,
        category: "Temple",
        bestTime: "October to March",
        activities: [
          "Temple Visit",
          "Architecture Tour",
          "Religious Ceremonies",
          "Cultural Photography",
          "Meditation"
        ],
        distance: "45 km from Raipur",
        howToReach: "Regular buses available from Raipur. Nearest railway station is Raipur.",
        accommodation: [
          "Dharamshalas",
          "Guest Houses",
          "Budget Hotels"
        ],
        highlights: [
          "Ancient architecture",
          "Rajim Kumbh Mela",
          "Confluence of three rivers",
          "Religious significance",
          "Historical sculptures"
        ],
        entryFee: {
          indian: "Free",
          foreign: "Free",
          camera: "₹20"
        },
        timings: {
          morning: "5:00 AM to 12:00 PM",
          evening: "4:00 PM to 9:00 PM"
        },
        festivals: [
          "Rajim Kumbh Mela (February)",
          "Kartik Purnima",
          "Ram Navami"
        ]
      },
    
      {
        id: 14,
        name: "Ghatarani Waterfall",
        location: "Raigarh",
        description: "A pristine waterfall cascading down multiple tiers, surrounded by lush greenery and peaceful environment. The waterfall creates a natural pool perfect for swimming during safe seasons, and the surrounding area offers excellent opportunities for nature walks and picnics.",
        image: "/images/destinations/ghatarani.jpg",
        galleryImages: [
          "/images/destinations/ghatarani-1.jpg",
          "/images/destinations/ghatarani-2.jpg",
          "/images/destinations/ghatarani-3.jpg"
        ],
        rating: 4.4,
        category: "Waterfall",
        bestTime: "July to March",
        activities: [
          "Waterfall Visit",
          "Nature Walk",
          "Swimming",
          "Picnic",
          "Bird Watching",
          "Photography"
        ],
        distance: "250 km from Raipur",
        howToReach: "Nearest railway station is Raigarh (40 km). Local transport available from Raigarh.",
        accommodation: [
          "Hotels in Raigarh",
          "Forest Rest House",
          "Eco Resorts"
        ],
        highlights: [
          "Multi-tiered waterfall",
          "Natural swimming pool",
          "Dense forest",
          "Picnic spots",
          "Bird watching opportunities"
        ],
        entryFee: {
          indian: "₹20",
          foreign: "₹100",
          camera: "₹30"
        },
        timings: "6:00 AM to 6:00 PM"
      },
      {
        id: 15,
        name: "Purkhouti Muktangan",
        location: "Raipur",
        description: "An open-air museum showcasing the rich cultural heritage of Chhattisgarh through traditional houses, artifacts, and tribal art. The museum complex features life-size replicas of tribal dwellings, cultural exhibits, and regular cultural performances that bring the state's heritage to life.",
        image: "/images/destinations/purkhouti.jpg",
        galleryImages: [
          "/images/destinations/purkhouti-1.jpg",
          "/images/destinations/purkhouti-2.jpg",
          "/images/destinations/purkhouti-3.jpg"
        ],
        rating: 4.6,
        category: "Heritage",
        bestTime: "October to March",
        activities: [
          "Cultural Tours",
          "Museum Visit",
          "Art Exhibitions",
          "Photography",
          "Traditional Craft Workshops",
          "Cultural Performances"
        ],
        distance: "5 km from Raipur",
        howToReach: "Regular city buses and auto-rickshaws available from Raipur city center.",
        accommodation: [
          "Hotels in Raipur",
          "Guest Houses",
          "Budget Hotels"
        ],
        highlights: [
          "Traditional tribal houses",
          "Cultural artifacts",
          "Craft demonstrations",
          "Folk performances",
          "Interactive exhibits"
        ],
        entryFee: {
          indian: "₹30",
          foreign: "₹200",
          camera: "₹50",
          guide: "₹200"
        },
        timings: "10:00 AM to 6:00 PM (Closed on Mondays)"
      },
    
      {
        id: 16,
        name: "Nandan Van Zoo",
        location: "Raipur",
        description: "A modern zoological park spread across 800 acres, featuring diverse wildlife in their natural habitats. The zoo includes a butterfly park, reptile house, and various themed sections representing different ecosystems. It serves as both a recreational and educational facility.",
        image: "/images/destinations/nandan-van.jpg",
        galleryImages: [
          "/images/destinations/nandan-van-1.jpg",
          "/images/destinations/nandan-van-2.jpg",
          "/images/destinations/nandan-van-3.jpg"
        ],
        rating: 4.3,
        category: "Wildlife",
        bestTime: "October to March",
        activities: [
          "Zoo Visit",
          "Wildlife Photography",
          "Nature Walk",
          "Educational Tours",
          "Bird Watching",
          "Butterfly Watching"
        ],
        distance: "15 km from Raipur",
        howToReach: "Regular buses and taxis available from Raipur city.",
        accommodation: [
          "Hotels in Raipur",
          "Eco Lodges",
          "Guest Houses"
        ],
        highlights: [
          "Diverse wildlife species",
          "Butterfly park",
          "Reptile house",
          "Educational programs",
          "Natural habitats",
          "Children's park"
        ],
        entryFee: {
          indian: "₹50",
          foreign: "₹300",
          camera: "₹100",
          children: "₹25"
        },
        timings: "9:00 AM to 5:00 PM (Closed on Tuesdays)"
      }
];

// Destination Card Component
const DestinationCard = ({ destination }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div 
      className="destination-card"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="destination-image">
        <img src={destination.image} alt={destination.name} />
        <span className="category-tag">{destination.category}</span>
        {destination.bestTime && (
          <span className="best-time-tag">
            <i className="fas fa-clock"></i> Best Time: {destination.bestTime}
          </span>
        )}
      </div>
      <div className="destination-content">
        <div className="destination-header">
          <h3>{destination.name}</h3>
          <div className="rating">
            <span className="star">★</span>
            {destination.rating}
          </div>
        </div>
        <div className="location">
          <i className="fas fa-map-marker-alt"></i>
          {destination.location}
          {destination.distance && (
            <span className="distance">
              <i className="fas fa-road"></i> {destination.distance}
            </span>
          )}
        </div>
        <p>{destination.description}</p>
        
        {destination.activities && (
          <div className="activities">
            <h4>Activities:</h4>
            <div className="activity-tags">
              {destination.activities.map((activity, index) => (
                <span key={index} className="activity-tag">
                  {activity}
                </span>
              ))}
            </div>
          </div>
        )}
        
        <motion.button 
          className="explore-btn"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Explore More
        </motion.button>
      </div>
    </motion.div>
  );
};

// Main Destinations Component
const Destinations = () => {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [filteredDestinations, setFilteredDestinations] = useState(destinationsData);

  useEffect(() => {
    const filtered = selectedFilter === 'All' 
      ? destinationsData
      : destinationsData.filter(item => item.category === selectedFilter);
    setFilteredDestinations(filtered);
  }, [selectedFilter]);

  return (
    <section className="destinations-section">
      <motion.div 
        className="destinations-header"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2>Popular Destinations</h2>
        <p>Explore the beauty and culture of Chhattisgarh</p>
      </motion.div>
      
      <div className="destinations-filter">
        {['All', 'Waterfall', 'Wildlife', 'Temple', 'Hill Station', 'Culture'].map(filter => (
          <motion.button
            key={filter}
            className={`filter-btn ${selectedFilter === filter ? 'active' : ''}`}
            onClick={() => setSelectedFilter(filter)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {filter}
          </motion.button>
        ))}
      </div>

      <motion.div 
        className="destinations-grid"
        layout
      >
        <AnimatePresence>
          {filteredDestinations.map(destination => (
            <motion.div
              key={destination.id}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.4 }}
            >
              <DestinationCard destination={destination} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default Destinations;