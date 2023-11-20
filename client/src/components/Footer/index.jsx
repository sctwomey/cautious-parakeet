import React from 'react';
import { Link } from 'react-router-dom';
// import FAQPage from '../../pages/FAQPage';

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
        <ul>
          <li className='footer-link'><Link to="/Facebook">Facebook</Link></li>
          <li className='footer-link'><Link to="/Instagram">Instagram</Link></li>
          <li className='footer-link'><Link to="/Twitter">Twitter</Link></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;