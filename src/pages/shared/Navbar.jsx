
import React from "react"; 
import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import  services  from "../ser/servicesData";

const Navbar = () => {
  const [stickyClass, setStickyClass] = useState("relative");
  const [checkbox, setCheckbox] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);
    return () => {
      window.removeEventListener("scroll", stickNavbar);
    };
  }, []);

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 151
        ? setStickyClass("fixed top-0 left-0 z-50 bg-white shadow-lg w-full")
        : setStickyClass("relative");
    }
  };

  const logout = () => {
    localStorage.removeItem("accessToken");
  };

  // active link
  let activeStyle = {
    color: "blue",
  };

  const toggleMobileMenu = () => {
    setCheckbox(!checkbox);
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setCheckbox(false);
    setIsMobileMenuOpen(false);
    setIsOpen(false);
  };

  return (
   <header className="relative top-0 left-0 w-full bg-white shadow-md z-50">
      {/* Top mini navbar start*/}
      <div className="bg-accent py-3 hidden md:block">
        <div className="flex justify-between container mx-auto px-4">
          <div>
            <ul className="flex flex-wrap gap-3 text-sm">
              <li className="flex justify-center items-center gap-2">
                <i className="ri-mail-line text-secondary"></i>
                <Link to="mailto:info@example.com" className="text-base-100 text-xs md:text-sm">
                  info@example.com
                </Link>
              </li>
              <li className="flex justify-center items-center gap-2">
                <i className="ri-phone-line text-secondary"></i>
                <Link to="tel:+917052101786" className="text-base-100 text-xs md:text-sm">
                  +91-7052-101-786
                </Link>
              </li>
              <li className="flex justify-center items-center gap-2">
                <i className="ri-map-pin-line text-secondary"></i>
                <span className="text-base-100 text-xs md:text-sm">
                  <address className="inline">123 Dental St, Tooth City</address>
                </span>
              </li>
            </ul>
          </div>

          <div>
            <ul className="flex justify-center items-center gap-3">
              <li>
                <i className="ri-facebook-circle-line text-lg md:text-xl text-base-100"></i>
              </li>
              <li>
                <i className="ri-instagram-line text-lg md:text-xl text-base-100"></i>
              </li>
              <li>
                <i className="ri-twitter-line text-lg md:text-xl text-base-100"></i>
              </li>
              <li>
                <i className="ri-youtube-line text-lg md:text-xl text-base-100"></i>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* Top mini navbar end*/}

      {/* navbar */}
      <nav className={`w-full ${stickyClass}`}>
        <div className="flex justify-between items-center py-3 md:py-5 container mx-auto relative px-4">
          {/* Logo */}
          <div className="flex-1">
            <Link to="/" onClick={closeMobileMenu}>
              <h2 className="text-2xl md:text-4xl font-bold text-accent hover:text-blue-700 transition transform duration-300 ease-in-out hover:scale-105">
                Dentelo.
              </h2>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block flex-1">
            <div className="flex justify-end items-center gap-4 lg:gap-8">
              <div className="flex-1">
                <ul className="flex justify-center gap-4 lg:gap-6 relative font-bold">
                  <li className="transition transform duration-300 ease-in-out hover:scale-110">
                    <NavLink
                      to="/home"
                      style={({ isActive }) => (isActive ? activeStyle : undefined)}
                      className="text-sm lg:text-base"
                    >
                      Home
                    </NavLink>
                  </li>
                  <li className="transition transform duration-300 ease-in-out hover:scale-110">
                    <NavLink
                      to="about"
                      style={({ isActive }) => (isActive ? activeStyle : undefined)}
                      className="text-sm lg:text-base"
                    >
                      About
                    </NavLink>
                  </li>
                  <li
                    className="transition transform duration-300 ease-in-out hover:scale-110 relative"
                    onMouseEnter={() => setIsOpen(true)}
                    onMouseLeave={() => setIsOpen(false)}
                  >
                    <NavLink
                      to="services"
                      style={({ isActive }) => (isActive ? activeStyle : undefined)}
                      className="text-sm lg:text-base"
                    >
                      Services
                    </NavLink>

                    {isOpen && (
                      <ul 
                        className="absolute top-6 left-0 text-base-100 text-xs lg:text-sm uppercase bg-gradient-to-r from-accent to-primary shadow-lg rounded-lg w-48 py-2  border"  style={{ zIndex: 999999 }}
                        onMouseEnter={() => setIsOpen(true)}
                        onMouseLeave={() => setIsOpen(false)}
                      >
                        {services.map((service) => (
                          <li key={service.id} className="px-3 py-2 hover:bg-gray-800">
                            <NavLink
                              to={`/services/${service.id}`}
                              onClick={() => setIsOpen(false)}
                              className="text-sm block"
                            >
                              {service.title}
                            </NavLink>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                  <li className="transition transform duration-300 ease-in-out hover:scale-110">
                    <NavLink
                      to="blogs"
                      style={({ isActive }) => (isActive ? activeStyle : undefined)}
                      className="text-sm lg:text-base"
                    >
                      Blogs
                    </NavLink>
                  </li>
                  <li className="transition transform duration-300 ease-in-out hover:scale-110">
                    <NavLink
                      to="contact"
                      style={({ isActive }) => (isActive ? activeStyle : undefined)}
                      className="text-sm lg:text-base"
                    >
                      Contact
                    </NavLink>
                  </li>
                  <li className="transition transform duration-300 ease-in-out hover:scale-110">
                    <NavLink
                      to="login"
                      style={({ isActive }) => (isActive ? activeStyle : undefined)}
                      className="text-sm lg:text-base"
                    >
                      Login
                    </NavLink>
                  </li>
                </ul>
              </div>

              <div className="flex-shrink-0">
                <Link
                  to="appointment"
                  className="btn rounded-md text-base-100 text-xs lg:text-sm uppercase bg-gradient-to-r from-accent to-primary px-3 lg:px-5 py-2 transition transform duration-300 ease-in-out hover:scale-105"
                >
                  BOOK APPOINTMENT
                </Link>
              </div>
            </div>
          </div>

          {/* Mobile Navigation Toggle */}
           {/* Mobile navigation */}
          <label className="btn bg-white hover:bg-white px-3 swap swap-rotate border-2 md:hidden">
            <input type="checkbox" checked={checkbox} onChange={() => setCheckbox(!checkbox)} />
            <svg className="swap-off" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512">
              <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
            </svg>
            <svg className="swap-on" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512">
              <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
            </svg>
          </label>

          {checkbox && (
            <div className="absolute top-20 inset-x-4 z-10">
              <ul className="menu bg-base-100 shadow-lg rounded-box w-full p-2 font-bold">
                <li>
                  <NavLink to="/home" onClick={() => setCheckbox(false)}>Home</NavLink>
                </li>
                <li>
                  <NavLink to="/about" onClick={() => setCheckbox(false)}>About Us</NavLink>
                </li>

                {/* Mobile services dropdown */}
                <li>
                  <details>
                    <summary>Services</summary>
                    <ul className="pl-4">
                      {services.map((service) => (
                        <li key={service.id}>
                          <NavLink
                            to={`/services/${service.id}`}
                            onClick={() => setCheckbox(false)}
                          >
                            {service.title}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  </details>
                </li>

                <li>
                  <NavLink to="/blogs" onClick={() => setCheckbox(false)}>Blogs</NavLink>
                </li>
                <li>
                  <NavLink to="/contact" onClick={() => setCheckbox(false)}>Contact Us</NavLink>
                </li>
                <li>
                  <NavLink to="/login" onClick={() => setCheckbox(false)}>Login</NavLink>
                </li>
                <li>
                  <Link
                    to="/appointment"
                    className="btn text-base-100 bg-gradient-to-r from-secondary to-primary px-7"
                    onClick={() => setCheckbox(false)}
                  >
                    BOOK APPOINTMENT
                  </Link>
                </li>
              </ul>
            </div>
          )}
          </div>
      </nav>
    </header>
  );
};

export default Navbar;