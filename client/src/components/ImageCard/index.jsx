import React from 'react';
import { Link } from 'react-router-dom';


const ImageCard = () => {
  return (
    <div className="image-card">
      <img src="/images/image-card4.jpg" alt="Product" />

      {/* Overlay with Shop button */}
      <div className="overlay">
        <Link to="/Shop">
          <button className="shop-button">Shop</button>
        </Link>
      </div>
    </div>
  );
};

export default ImageCard;