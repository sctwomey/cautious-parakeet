import Auth from "../../utils/auth";
import { Link, NavLink } from 'react-router-dom';
import { FaRecordVinyl } from "react-icons/fa";


function Nav() {
  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <ul className="nav-list">
          <li>
            <Link to="/orderHistory" className="nav-link">
              Order History
            </Link>
          </li>
          <li>
            <a href="/" onClick={() => Auth.logout()} className="nav-link">
              Logout
            </a>
          </li>
          <li className="search-bar-container">
            <input className="search-bar" type="text" placeholder="Search.." />
          </li>
          <li>
            <Link to="/Shop" className="nav-link">
              Shop
            </Link>
          </li>
          <li>
            <Link to="/About" className="nav-link">
              About
            </Link>
          </li>
          <li>
            <Link to="/Contact" className="nav-link">
              Contact
            </Link>
          </li>
        </ul>
      );
    } else {
      return (
        <ul className="nav-list">
          <li>
            <Link to="/signup" className="nav-link">
              Signup
            </Link>
          </li>
          <li>
            <Link to="/login" className="nav-link">
              Login
            </Link>
          </li>
          <li>
            <Link to="/About" className="nav-link">
              About
            </Link>
          </li>
          <li>
            <Link to="/Contact" className="nav-link">
              Contact
            </Link>
          </li>
        </ul>
      );
    }
  }

  return (
    <header className="nav-header">
      <h1 className="logo">
        <Link to="/">
          <span className="fa-record" role="img" aria-label="shopping bag">
            <FaRecordVinyl />
          </span>
          <span className="shop-name">Retro Rewind Vinyls</span>
        </Link>
      </h1>
      <nav className="nav-container">
        {showNavigation()}
      </nav>
    </header>
  );
}

export default Nav;
