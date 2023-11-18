import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import { FaRecordVinyl } from "react-icons/fa";


function Nav() {

  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <ul className="flex-row">
          <li className="mx-1">
            <Link to="/orderHistory">
              Order History
            </Link>
          </li>
          <li className="mx-1">
            {/* this is not using the Link component to logout or user and then refresh the application to the start */}
            <a href="/" onClick={() => Auth.logout()}>
              Logout
            </a>
          </li>
          <li className="mx-1">
            <input className="search-bar" type="text" placeholder="Search.."></input>
          </li>
          <li className="mx-1">
            <a href="/Shop">Shop</a>
          </li>
          <li className="mx-1">
            <a href="/About">About</a>
          </li>
          <li className="mx-1">
            <a href="/Contact">Contact</a>
          </li>
        </ul>
      );
    } else {
      return (
        <ul className="flex-row">
          <li className="mx-1">
            <Link to="/signup">
              Signup
            </Link>
          </li>
          <li className="mx-1">
            <Link to="/login">
              Login
            </Link>
          </li>
          <li className="mx-1">
            <a href="">About</a>
          </li>
          <li className="mx-1">
            <a href="/Contact">Contact</a>
          </li>
        </ul>
      );
    }
  }

  return (
    <header className="flex-row px-1">
      <h1>
        <Link to="/">
          <span className="fa-record" role="img" aria-label="shopping bag"><FaRecordVinyl /></span>
          <span className="shop-name">Retro Rewind Vinyls</span>
        </Link>
      </h1>

      <nav>
        {showNavigation()}
      </nav>
    </header>
  );
}

export default Nav;
