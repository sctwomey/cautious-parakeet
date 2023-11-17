import React from 'react';
import { Link } from 'react-router-dom';


const ImageCard2 = () => {
  return (
    <div className="image-card">
      <img src="/src/assets/image-card5.jpg" alt="Product" />

      {/* Overlay with Shop button */}
      <div className="overlay">
        <Link to="/About">
          <button className="shop-button">Read About Us</button>
        </Link>
      </div>
    </div>
  );
};

export default ImageCard2;