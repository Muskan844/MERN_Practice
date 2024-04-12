import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { useAuth } from "../store/auth";
export const Navbar = () => {
  const {isloggedIn}= useAuth();
  return (
    <>
      <header>
        <div className="container">
          <div className="Logoname">
            <a href="/">Muskan</a>
          </div>
          <nav>
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              {/*href provides link which is same link/url created using react-router-dom for different pages  */}
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
              <li>
                <NavLink to="/service">Service</NavLink>
              </li>
              {!isloggedIn ? <><li>
                <NavLink to="/login">Login</NavLink>
              </li>
              <li>
                <NavLink to="/register">SignUp</NavLink>
              </li></> : <li>
                <NavLink to="/logout">Logout</NavLink>
              </li>}

            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};
