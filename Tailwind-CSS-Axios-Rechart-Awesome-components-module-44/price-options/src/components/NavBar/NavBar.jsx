import { IoIosMenu, IoMdClose } from "react-icons/io";
import Link from "../Link/Link";
import { useState } from "react";
const NavBar = () => {
  const [open, setOpen] = useState(false);

  const routes = [
    { id: 1, path: "/", name: "Home" },
    { id: 2, path: "/about", name: "About Us" },
    { id: 3, path: "/services", name: "Services" },
    { id: 4, path: "/contact", name: "Contact Us" },
    { id: 5, path: "/profile", name: "User Profile" },
  ];

  return (
    <nav className="text-black bg-yellow-200 p-6">
      <div className="md:hidden text-2xl" onClick={() => setOpen(!open)}>
        {open === true ? <IoMdClose /> : <IoIosMenu />}
      </div>
      {/* <ul className="md:flex"> */}
      {/*       <ul
        className={`md:flex bg-yellow-200 px-6 shadow-lg absolute 
          ${open ? "" : "hidden"}`}
      > */}
      <ul
        className={`md:flex bg-yellow-200 px-6 duration-1000 
          absolute md:static 
          ${open ? "top-16" : "-top-60"}`}
      >
        {routes.map((route) => (
          <Link key={route.id} route={route}></Link>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
