import { Link, NavLink } from "react-router-dom";
import "./Header.css";
const Header = () => {
  return (
    <div>
      <nav>
        <span>My Website</span>
        <Link to={"/"}>Home</Link>
        <NavLink to={"/users"}>Users</NavLink>
        {/* <Link to={"/users"}>Users</Link> */}
        <NavLink to={"/posts"}>Posts</NavLink>
        {/* <Link to={"/posts"}>Posts</Link> */}
        <Link to={"/about"}>About</Link>
        <Link to={"/contact"}>Contact us</Link>
        {/* 
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
         */}
      </nav>
    </div>
  );
};

export default Header;
