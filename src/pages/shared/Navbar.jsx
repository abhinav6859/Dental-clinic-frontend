import React from "react";
import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  // navbar sticky to when scroll start
  const [stickyClass, setStickyClass] = useState("relative");

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
        ? setStickyClass("fixed top-0 left-0 z-50 bg-white shadow-lg")
        : setStickyClass("relative");
    }
  };
  // navbar sticky to when scroll end
  const [checkbox, setCheckbox] = useState(false);
 const [isOpen, setIsOpen] = useState(false);

 

  const logout = () => {
    localStorage.removeItem("accessToken");
  };

  // active link
  let activeStyle = {
    color: "blue",
  };

  return (
    <header>
      {/* Top mini navbar start*/}
      <div className="bg-accent py-3 hidden md:block">
        <div className="flex justify-between container mx-auto px-5">
          <div>
            <ul className="flex gap-3 text-sm hover-bordered">
              <li className="flex justify-center items-center gap-2">
                <i className="ri-mail-line text-secondary"></i>
                <Link to="mailto:info@example.com" className="text-base-100">
                  info@example.com
                </Link>
              </li>
              <li className="flex justify-center items-center gap-2">
                <i className="ri-phone-line text-secondary"></i>
                <Link to="tel:+917052101786" className="text-base-100">
                  +91-7052-101-786
                </Link>
                 <i className="ri-map-pin-line text-secondary"></i>
                <Link to="mailto:info@example.com" className="text-base-100">
                  <address>123 Dental St, Tooth City, CA 12345</address>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <ul className="flex justify-center items-center gap-3">
              <li className="">
                <i className="ri-facebook-circle-line text-xl text-base-100"></i>
              </li>
              <li>
                <i className="ri-instagram-line text-xl text-base-100"></i>
              </li>
              <li>
                <i className="ri-twitter-line text-xl text-base-100"></i>
              </li>
              <li>
                <i className="ri-youtube-line text-xl text-base-100"></i>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* Top mini navbar end*/}

      {/* navbar */}
      <nav className={`w-full ${stickyClass}`}>
        <div className="flex justify-between items-center py-5 container mx-auto relative px-5">
          {/* md and lg navigation start*/}
          <div>
            <Link to="/">
              <h2 className="text-4xl font-bold text-accent hover:text-blue-700 transition transform duration-300 ease-in-out 
             hover:scale-125">Dentelo.</h2>
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="flex justify-between items-center md:gap-4 lg:gap-16">
              <div>
                <ul className="flex md:gap-3 lg:gap-6 relative font-bold ">
                  <li className="font-bold transition transform duration-300 ease-in-out 
             hover:scale-125 ">
                    <NavLink
                      to="/home"
                      style={({ isActive }) =>
                        isActive ? activeStyle : undefined
                      }
                    >
                      Home
                    </NavLink>
                  </li>
                  <li className="font-bold transition transform duration-300 ease-in-out 
             hover:scale-125">
                    <NavLink
                      to="about"
                      style={({ isActive }) =>
                        isActive ? activeStyle : undefined
                      }
                    >
                      About
                    </NavLink>
                  </li>
                <li
  className="font-bold transition transform duration-300 ease-in-out 
             hover:scale-125 relative"
  onMouseEnter={() => setIsOpen(true)}
  onMouseLeave={() => setIsOpen(false)}
>
  <NavLink
    to="services"
    style={({ isActive }) => (isActive ? activeStyle : undefined)}
  >
    Services
  </NavLink>

  {isOpen && (
    <ul className="absolute top-6 left-0 bg-blue-200 shadow-lg rounded-lg w-40 py-2 z-30"
     
     onClick={() => setIsOpen(false)}
    >
      <li className="px-1 py-1 hover:bg-gray-100 cursor-pointer">
        <NavLink to="/dentalcare">Dental Care</NavLink>
      </li>
      <li className="px-1 py-1 hover:bg-gray-100">
        <NavLink to="/service2">Comprehensive Exams</NavLink>
      </li>
      <li className="px-1 py-1 hover:bg-gray-100">
        <NavLink to="/service3">Teeth Whitening</NavLink>
      </li>
      <li className="px-1 py-1 hover:bg-gray-100">
        <NavLink to="/service4">Service 4</NavLink>
      </li>
      <li className="px-1 py-1 hover:bg-gray-100">
        <NavLink to="/service5">Service 5</NavLink>
      </li>
      <li className="px-1 py-1 hover:bg-gray-100">
        <NavLink to="/service6">Service 6</NavLink>
      </li>
        <li className="px-1 py-1 hover:bg-gray-100">
        <NavLink to="/service7">Service 7</NavLink>
      </li>
      <li className="px-1 py-1 hover:bg-gray-100">
        <NavLink to="/service8">Service 8</NavLink>
      </li>
      <li className="px-1 py-1 hover:bg-gray-100">
        <NavLink to="/service9">Service 9</NavLink>
      </li>
      <li className="px-1 py-1 hover:bg-gray-100">
        <NavLink to="/service10">Service 10</NavLink>
      </li>
      <li className="px-1 py-1 hover:bg-gray-100">
        <NavLink to="/service11">Service 11</NavLink>
      </li>
      <li className="px-1 py-1 hover:bg-gray-100">
        <NavLink to="/service12">Service 12</NavLink>
      </li>
      <li className="px-1 py-1 hover:bg-gray-100">
        <NavLink to="/service13">Service 13</NavLink>
      </li>
      <li className="px-1 py-1 hover:bg-gray-100">
        <NavLink to="/service14">Service 14</NavLink>
      </li>
     
      
      
    </ul>
  )}
</li>

                  <li className="font-bold transition transform duration-300 ease-in-out 
             hover:scale-125">
                    
                    <NavLink
                      to="blogs"
                      style={({ isActive }) =>
                        isActive ? activeStyle : undefined
                      }
                    >
                      Blogs
                    </NavLink>
                  </li>
                  <li className="font-bold transition transform duration-300 ease-in-out 
             hover:scale-125">
                    <NavLink
                      to="contact"
                      style={({ isActive }) =>
                        isActive ? activeStyle : undefined
                      }
                    >
                      Contact
                    </NavLink>
                  </li>
                  <li className="font-bold transition transform duration-300 ease-in-out 
             hover:scale-125">
                    <NavLink
                        to="login"
                        style={({ isActive }) =>
                          isActive ? activeStyle : undefined
                        }
                      >
                        Login
                      </NavLink>
                  </li>
                </ul>
              </div>

              <div>
                <Link
                  to="appointment"
                  className="btn rounded-md text-base-100 text-sm uppercase bg-gradient-to-r from-accent to-primary px-3 md:px-5
               transition transform duration-300 ease-in-out 
             hover:scale-125 ">
                  BOOK APPOINTMENT
                </Link>
              </div>
            </div>
          </div>
          {/* md and lg navigation end*/}

          {/* Mobile navigation bar start*/}
          <label className="btn bg-white hover:bg-white px-3 swap swap-rotate border-2 md:hidden">
            <input type="checkbox" onClick={() => setCheckbox(!checkbox)} />
            <svg
              className="swap-off"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 512 512"
            >
              <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
            </svg>
            <svg
              className="swap-on"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 512 512"
            >
              <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
            </svg>
          </label>

          {checkbox && (
            <div className="absolute top-20 inset-x-4 z-10">
              <ul className="menu bg-base-100 shadow-lg rounded-box w-full p-2">
                <li className="font-bold">
                  <NavLink to="/home">Home</NavLink>
                </li>
                <li className="font-bold">
                  <NavLink to="/about">About Us</NavLink>
                </li>
                  <li className="font-bold ">
                  <NavLink to="/services">Services</NavLink>
                 
                </li>
                <li className="font-bold">
                  <NavLink to="blogs">Blogs</NavLink>
                </li>
                <li className="font-bold">
                  <NavLink to="contact">Contact Us</NavLink>
                </li>
                <li className="font-bold">
                  <NavLink to="login">Login</NavLink>
                </li>
                <li>
                  <Link
                    to="appointment"
                    className="btn text-base-100 bg-gradient-to-r from-secondary to-primary px-7"
                  >
                    BOOK APPOINTMENT
                  </Link>
                </li>
              </ul>
            </div>
          )}
          {/* Mobile navigation bar end*/}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;