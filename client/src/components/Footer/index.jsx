import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer>
      <div className="footer-column">
        <h4 className='g2k'>Get to know Retro Rewind</h4>
        <ul>
          <li className='footer-link'><Link to="/shop">Shop</Link></li>
          <li className='footer-link'><Link to="/about">About</Link></li>
          <li className='footer-link'><Link to="/contact">Contact</Link></li>
        </ul>
        <p>Customer Service: 123-456-7890</p>
      </div>

      <div className="footer-column">
        <h4 className='g2k2'>Help</h4>
        <hr />
        <ul>
          <li className='footer-link'><Link to="/FAQPage">FAQ</Link></li>
          <li className='footer-link'><Link to="/ShippingReturnsPage">Shipping & Returns</Link></li>
          <li className='footer-link'><Link to="/StorePolicyPage">Store Policy</Link></li>
        </ul>
      </div>

      <div className="footer-column">
        <h4 className='g2k2'>Follow Us</h4>
        <hr />
        <div className='icons'>
          <p className='footer-icon'>
            <Link to="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook /> {/* Display Facebook icon */}
            </Link>
          </p>
          <p className='footer-icon'>
            <Link to="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram /> {/* Display Instagram icon */}
            </Link>
          </p>
          <p className='footer-icon'>
            <Link to="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter /> {/* Display Twitter icon */}
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;