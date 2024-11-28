import { useState } from 'react';
import { motion } from 'framer-motion';
import './VideoGallery.css';
import chitrakoteImage from '../../assets/CHITRAKOTE.jpg'; 
import tribalImage from '../../assets/TRIBAL.jpg';
import wildlifeImage from '../../assets/WILDLIFE.jpg';

const videoData = [
  {
    id: 1,
    title: "Explore Chitrakote Falls",
    description: "India's widest waterfall in Bastar region",
    thumbnail: chitrakoteImage,
    videoUrl: "https://www.youtube.com/embed/t_muEGVNGGE",
  },
  {
    id: 2,
    title: "Tribal Culture of Bastar",
    description: "Experience the unique tribal heritage",
    thumbnail: tribalImage,
    videoUrl: "https://www.youtube.com/embed/yLeyNjf3d6s",
  },
  {
    id: 3,
    title: "Wildlife of Kanger Valley",
    description: "Discover the rich biodiversity",
    thumbnail: wildlifeImage,
    videoUrl: "https://www.youtube.com/embed/fzulsg_XXYU",
  },
  // Add more videos as needed
];

const VideoGallery = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const openVideo = (video) => {
    setSelectedVideo(video);
  };

  const closeVideo = () => {
    setSelectedVideo(null);
  };

  return (
    <section className="video-gallery-section">
      <div className="container">
        <h2>Video Gallery</h2>
        <p className="section-subtitle">Experience Chhattisgarh through our lens</p>

        <div className="video-grid">
          {videoData.map((video) => (
            <motion.div
              key={video.id}
              className="video-card"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
              onClick={() => openVideo(video)}
            >
              <div className="video-thumbnail">
                <img src={video.thumbnail} alt={video.title} />
                <div className="play-button">
                  <i className="fas fa-play"></i>
                </div>
              </div>
              <div className="video-info">
                <h3>{video.title}</h3>
                <p>{video.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {selectedVideo && (
          <div className="video-modal" onClick={closeVideo}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="close-button" onClick={closeVideo}>
                <i className="fas fa-times"></i>
              </button>
              <div className="video-wrapper">
                <iframe
                  src={selectedVideo.videoUrl}
                  title={selectedVideo.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default VideoGallery;