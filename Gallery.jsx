import { useState, useEffect } from 'react';
import './Gallery.css';

const galleryData = [
    {
        id: 1,
        title: "Chitrakote Falls",
        category: "Waterfalls",
        image: "/images/gallery/chitrakote-falls.jpg",
        description: "India's widest waterfall, known as the 'Niagara of India', during monsoon season"
      },
      {
        id: 2,
        title: "Tribal Dance Performance",
        category: "Culture",
        image: "/images/gallery/tribal-dance.jpg",
        description: "Traditional Bastar tribal dance performance during a local festival"
      },
      {
        id: 3,
        title: "Sirpur Temple Complex",
        category: "Heritage",
        image: "/images/gallery/sirpur-temple.jpg",
        description: "Ancient Buddhist and Hindu temples showcasing remarkable architecture"
      },
      {
        id: 4,
        title: "Tiger at Achanakmar",
        category: "Wildlife",
        image: "/images/gallery/achanakmar-tiger.jpg",
        description: "Royal Bengal Tiger spotted at Achanakmar Tiger Reserve"
      },
      {
        id: 5,
        title: "Mainpat Sunrise",
        category: "Nature",
        image: "/images/gallery/mainpat-sunrise.jpg",
        description: "Breathtaking sunrise view from Mainpat, the 'Shimla of Chhattisgarh'"
      },
      {
        id: 6,
        title: "Bastar Dussehra",
        category: "Festivals",
        image: "/images/gallery/bastar-dussehra.jpg",
        description: "Unique 75-day long Bastar Dussehra celebration"
      },
      {
        id: 7,
        title: "Tirathgarh Falls",
        category: "Waterfalls",
        image: "/images/gallery/tirathgarh-falls.jpg",
        description: "Multi-tiered Tirathgarh waterfall in its full glory"
      },
      {
        id: 8,
        title: "Tribal Art",
        category: "Culture",
        image: "/images/gallery/tribal-art.jpg",
        description: "Traditional Dokra art crafted by local artisans"
      },
      {
        id: 9,
        title: "Bhoramdeo Temple",
        category: "Heritage",
        image: "/images/gallery/bhoramdeo-temple.jpg",
        description: "Intricate carvings at the 'Khajuraho of Chhattisgarh'"
      },
      {
        id: 10,
        title: "Kanger Valley",
        category: "Nature",
        image: "/images/gallery/kanger-valley.jpg",
        description: "Lush green landscapes of Kanger Valley National Park"
      },
      {
        id: 11,
        title: "Madai Festival",
        category: "Festivals",
        image: "/images/gallery/madai-festival.jpg",
        description: "Traditional Madai festival celebrations in Bastar"
      },
      {
        id: 12,
        title: "Barnawapara Wildlife",
        category: "Wildlife",
        image: "/images/gallery/barnawapara-wildlife.jpg",
        description: "Spotted deer at Barnawapara Wildlife Sanctuary"
      },
      {
        id: 13,
        title: "Teerathgarh Waterfall",
        category: "Waterfalls",
        image: "/images/gallery/teerathgarh-falls.jpg",
        description: "Scenic beauty of Teerathgarh Falls during monsoon"
      },
      {
        id: 14,
        title: "Tribal Market",
        category: "Culture",
        image: "/images/gallery/tribal-market.jpg",
        description: "Weekly tribal haat (market) showcasing local products"
      },
      {
        id: 15,
        title: "Danteshwari Temple",
        category: "Heritage",
        image: "/images/gallery/danteshwari-temple.jpg",
        description: "Ancient Danteshwari Temple in Dantewada"
      },
      {
        id: 16,
        title: "Peacock Dance",
        category: "Wildlife",
        image: "/images/gallery/peacock.jpg",
        description: "Peacock displaying its feathers in natural habitat"
      },
      {
        id: 17,
        title: "Valley Views",
        category: "Nature",
        image: "/images/gallery/valley-views.jpg",
        description: "Panoramic valley views from Mainpat highlands"
      },
      {
        id: 18,
        title: "Hareli Festival",
        category: "Festivals",
        image: "/images/gallery/hareli-festival.jpg",
        description: "Agricultural festival celebrations in rural Chhattisgarh"
      },
      {
        id: 19,
        title: "Cave Formations",
        category: "Nature",
        image: "/images/gallery/cave-formations.jpg",
        description: "Stunning stalactite formations in Kutumsar Cave"
      },
      {
        id: 20,
        title: "Traditional Dance",
        category: "Culture",
        image: "/images/gallery/traditional-dance.jpg",
        description: "Panthi dance performance by local artists"
      },
      {
        id: 21,
        title: "Rajim Temples",
        category: "Heritage",
        image: "/images/gallery/rajim-temples.jpg",
        description: "Ancient temple complex at Rajim Kumbh"
      },
      {
        id: 22,
        title: "Forest Life",
        category: "Wildlife",
        image: "/images/gallery/forest-life.jpg",
        description: "Wild elephants in their natural habitat"
      },
      {
        id: 23,
        title: "Sunset at Sirpur",
        category: "Nature",
        image: "/images/gallery/sirpur-sunset.jpg",
        description: "Golden sunset over ancient Sirpur ruins"
      },
      {
        id: 24,
        title: "Tribal Crafts",
        category: "Culture",
        image: "/images/gallery/tribal-crafts.jpg",
        description: "Traditional bell metal crafting by local artisans"
      },
      {
        id: 25,
        title: "Champaran Temple",
        category: "Heritage",
        image: "/images/gallery/champaran-temple.jpg",
        description: "Historic temple at Champaran, birthplace of Saint Vallabhacharya"
      },
      {
        id: 26,
        title: "Kendai Waterfall",
        category: "Waterfalls",
        image: "/images/gallery/kendai-falls.jpg",
        description: "Hidden gem in Korba district, surrounded by dense forests and natural beauty"
      },
      {
        id: 27,
        title: "Laxman Temple Architecture",
        category: "Heritage",
        image: "/images/gallery/laxman-temple.jpg",
        description: "Intricate brick carvings of the 7th-century Laxman Temple in Sirpur"
      },
      {
        id: 28,
        title: "Gadiya Mountain Trek",
        category: "Nature",
        image: "/images/gallery/gadiya-mountain.jpg",
        description: "Scenic trekking trails of Gadiya Mountain in Koriya district"
      },
      {
        id: 29,
        title: "Raut Nacha",
        category: "Culture",
        image: "/images/gallery/raut-nacha.jpg",
        description: "Traditional Raut community dance celebrating pastoral life"
      },
      {
        id: 30,
        title: "Chaiturgarh Fort",
        category: "Heritage",
        image: "/images/gallery/chaiturgarh-fort.jpg",
        description: "Ancient hilltop fort with panoramic views of surrounding valleys"
      },
      {
        id: 31,
        title: "Tamor Pingla Wildlife",
        category: "Wildlife",
        image: "/images/gallery/tamor-pingla.jpg",
        description: "Rare species of birds at Tamor Pingla Wildlife Sanctuary"
      },
      {
        id: 32,
        title: "Malhar Temples",
        category: "Heritage",
        image: "/images/gallery/malhar-temples.jpg",
        description: "Archaeological remains of ancient temples at Malhar"
      },
      {
        id: 33,
        title: "Tribal Pottery",
        category: "Culture",
        image: "/images/gallery/tribal-pottery.jpg",
        description: "Traditional pottery making in Bastar region"
      },
      {
        id: 34,
        title: "Rakasganda Falls",
        category: "Waterfalls",
        image: "/images/gallery/rakasganda-falls.jpg",
        description: "Majestic waterfall in Jashpur district during peak monsoon"
      },
      {
        id: 35,
        title: "Pali Rock Paintings",
        category: "Heritage",
        image: "/images/gallery/pali-paintings.jpg",
        description: "Prehistoric rock art at Pali showcasing ancient civilization"
      },
      {
        id: 36,
        title: "Khutaghat Dam",
        category: "Nature",
        image: "/images/gallery/khutaghat-dam.jpg",
        description: "Scenic reservoir surrounded by Maikal hills"
      },
      {
        id: 37,
        title: "Karma Dance",
        category: "Festivals",
        image: "/images/gallery/karma-dance.jpg",
        description: "Traditional Karma festival celebrations by tribal communities"
      },
      {
        id: 38,
        title: "Indravati National Park",
        category: "Wildlife",
        image: "/images/gallery/indravati-park.jpg",
        description: "Wild buffalo in their natural habitat at Indravati"
      },
      {
        id: 39,
        title: "Mahadev Cave Temple",
        category: "Heritage",
        image: "/images/gallery/mahadev-cave.jpg",
        description: "Ancient cave temple with natural Shiva lingam formation"
      },
      {
        id: 40,
        title: "Tribal Jewelry Making",
        category: "Culture",
        image: "/images/gallery/tribal-jewelry.jpg",
        description: "Traditional metal jewelry crafting by tribal artisans"
      },
      {
        id: 41,
        title: "Ramgarh Hills",
        category: "Nature",
        image: "/images/gallery/ramgarh-hills.jpg",
        description: "Misty morning views of Ramgarh hill station"
      },
      {
        id: 42,
        title: "Govind Valley",
        category: "Nature",
        image: "/images/gallery/govind-valley.jpg",
        description: "Pristine valley views with rich biodiversity"
      },
      {
        id: 43,
        title: "Surang Tila",
        category: "Heritage",
        image: "/images/gallery/surang-tila.jpg",
        description: "Ancient stepped temple architecture in Sirpur"
      },
      {
        id: 44,
        title: "Tribal Bamboo Craft",
        category: "Culture",
        image: "/images/gallery/bamboo-craft.jpg",
        description: "Intricate bamboo crafting by local artisans"
      },
      {
        id: 45,
        title: "Kotumsar Cave",
        category: "Nature",
        image: "/images/gallery/kotumsar-cave.jpg",
        description: "Limestone cave formations in Kanger Valley"
      },
      {
        id: 46,
        title: "Teej Festival",
        category: "Festivals",
        image: "/images/gallery/teej-festival.jpg",
        description: "Women celebrating Teej festival with traditional swings"
      },
      {
        id: 47,
        title: "Sloth Bear",
        category: "Wildlife",
        image: "/images/gallery/sloth-bear.jpg",
        description: "Sloth bear spotted in Achanakmar Tiger Reserve"
      },
      {
        id: 48,
        title: "Ratanpur Fort",
        category: "Heritage",
        image: "/images/gallery/ratanpur-fort.jpg",
        description: "Historical Ratanpur fort and its ancient architecture"
      },
      {
        id: 49,
        title: "Tribal Music",
        category: "Culture",
        image: "/images/gallery/tribal-music.jpg",
        description: "Traditional musical instruments and performances"
      },
      {
        id: 50,
        title: "Gangrel Dam",
        category: "Nature",
        image: "/images/gallery/gangrel-dam.jpg",
        description: "Sunset views at Gangrel Dam, state's largest reservoir"
      }
];

const categories = ["All", "Waterfalls", "Culture", "Heritage", "Wildlife", "Nature", "Festivals"];

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredImages, setFilteredImages] = useState(galleryData);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    // Simulate loading time
    setTimeout(() => setIsLoading(false), 1000);
  }, []);

  useEffect(() => {
    const filtered = selectedCategory === "All"
      ? galleryData
      : galleryData.filter(item => item.category === selectedCategory);
    setFilteredImages(filtered);
  }, [selectedCategory]);

  const openLightbox = (image) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  const navigateImage = (direction) => {
    const currentIndex = galleryData.findIndex(img => img.id === selectedImage.id);
    let newIndex;
    
    if (direction === 'next') {
      newIndex = currentIndex === galleryData.length - 1 ? 0 : currentIndex + 1;
    } else {
      newIndex = currentIndex === 0 ? galleryData.length - 1 : currentIndex - 1;
    }
    
    setSelectedImage(galleryData[newIndex]);
  };

  return (
    <div className="gallery-page">
      {/* Hero Section */}
      <div className="gallery-hero">
        <h1>Photo Gallery</h1>
        <p>Explore the beauty of Chhattisgarh through our lens</p>
      </div>

      {/* Category Filter */}
      <div className="gallery-filters">
        {categories.map(category => (
          <button
            key={category}
            className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      {isLoading ? (
        <div className="loading-spinner">
          <div className="spinner"></div>
        </div>
      ) : (
        <div className="gallery-grid">
          {filteredImages.map(item => (
            <div 
              key={item.id} 
              className="gallery-item"
              onClick={() => openLightbox(item)}
            >
              <img src={item.image} alt={item.title} loading="lazy" />
              <div className="gallery-item-overlay">
                <h3>{item.title}</h3>
                <p>{item.category}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Lightbox */}
      {selectedImage && (
        <div className="lightbox" onClick={closeLightbox}>
          <button className="close-btn" onClick={closeLightbox}>×</button>
          <button className="nav-btn prev" onClick={(e) => {
            e.stopPropagation();
            navigateImage('prev');
          }}>‹</button>
          <button className="nav-btn next" onClick={(e) => {
            e.stopPropagation();
            navigateImage('next');
          }}>›</button>
          <div className="lightbox-content" onClick={e => e.stopPropagation()}>
            <img src={selectedImage.image} alt={selectedImage.title} />
            <div className="lightbox-info">
              <h3>{selectedImage.title}</h3>
              <p>{selectedImage.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;