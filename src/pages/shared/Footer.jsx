// import React from "react";
// import { Link } from "react-router-dom";
// import BottomToTop from "./BottomToTop";

// const Footer = () => {
//   return (
//     <footer>
//       <BottomToTop />
  
//       <div className="bg-accent py-16">
//         <div className="grid px-5 sm:grid-cols-2 lg:grid-cols-4 gap-5 container mx-auto text-base-100">
//           <div>
//             <div>
//               <div>
//                 <Link to="#">
//                   <h2 className="text-4xl font-bold text-base-100 mb-5">
//                     Dentelo.
//                   </h2>
//                 </Link>
//                 <p className="mb-5 text-neutral text-sm">
//                 Parkwood Green Dental is committed to providing gentle, affordable, and high-quality dental care for
//                  families in Hillside and surrounding areas. Our goal is to keep your smile healthy and confident for life.
//                 </p>
//               </div>
//               <div className="flex justify-start items-center gap-3">
//                 <i className="ri-time-line text-3xl bg-primary p-2 rounded"></i>
//                 <div className="text-neutral text-sm">
//                   <h2>Monday-Saturday:</h2>
//                   <h2>9:00am-10:00pm</h2>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div>
//             <h2 className="text-2xl font-bold">Others Links</h2>
//             <ul className="mt-5 text-sm">
//               <li className="flex justify-start text-neutral gap-1 mb-3 hover:text-base-100">
//                 <i className="ri-add-line text-primary"></i>
//                 <Link to="/home">Home</Link>
//               </li>
//               <li className="flex justify-start text-neutral gap-1 mb-3 hover:text-base-100">
//                 <i className="ri-add-line text-primary"></i>
//                 <Link to="/about">About Us</Link>
//               </li>
//               <li className="flex justify-start text-neutral gap-1 mb-3 hover:text-base-100">
//                 <i className="ri-add-line text-primary"></i>
//                 <Link to="/services">Services</Link>
//               </li>
//               <li className="flex justify-start text-neutral gap-1 mb-3 hover:text-base-100">
//                 <i className="ri-add-line text-primary"></i>
//                 <Link to="/blogs">Blogs</Link>
//               </li>
//               <li className="flex justify-start text-neutral gap-1 mb-3 hover:text-base-100">
//                 <i className="ri-add-line text-primary"></i>
//                 <Link to="/contact">Contact</Link>
//               </li>
//             </ul>
//           </div>
//           <div>
//             <h2 className="text-2xl font-bold">Our Services</h2>
//             <ul className="mt-5 text-sm">
//               <li className="flex justify-start text-neutral gap-1 mb-3 hover:text-base-100">
//                 <i className="ri-add-line text-primary"></i>
//                 <Link to="#">Root Canal</Link>
//               </li>
//               <li className="flex justify-start text-neutral gap-1 mb-3 hover:text-base-100">
//                 <i className="ri-add-line text-primary"></i>
//                 <Link to="#">Alignment Teeth</Link>
//               </li>
//               <li className="flex justify-start text-neutral gap-1 mb-3 hover:text-base-100">
//                 <i className="ri-add-line text-primary"></i>
//                 <Link to="#">Cosmetic Teeth</Link>
//               </li>
//               <li className="flex justify-start text-neutral gap-1 mb-3 hover:text-base-100">
//                 <i className="ri-add-line text-primary"></i>
//                 <Link to="#">Oral Hygiene</Link>
//               </li>
//               <li className="flex justify-start text-neutral gap-1 mb-3 hover:text-base-100">
//                 <i className="ri-add-line text-primary"></i>
//                 <Link to="#">Cavity Inspection</Link>
//               </li>
//               <li className="flex justify-start text-neutral gap-1 mb-3 hover:text-base-100">
//                 <i className="ri-add-line text-primary"></i>
//                 <Link to="#">Live Advisory</Link>
//               </li>
//             </ul>
//           </div>
//           <div>
//             <h2 className="text-2xl font-bold mb-5">Contact Us</h2>

//             <div className="flex justify-start items-center gap-3 mb-3">
//               <i className="ri-map-pin-line text-3xl bg-primary p-2 rounded"></i>
//               <div className="text-neutral text-sm">
//                 <h4>1247/Plot No. 39, 15th Phase</h4>
//                 <h2>LHB Colony, Kanpur</h2>
//               </div>
//             </div>

//             <div className="flex justify-start items-center gap-3 mb-3">
//               <i className="ri-phone-fill text-3xl bg-primary p-2 rounded"></i>
//               <div className="text-neutral text-sm">
//                 <h4>+91-7052-101-786</h4>
//               </div>
//             </div>

//             <div className="flex justify-start items-center gap-3 mb-3">
//               <i className="ri-mail-line text-3xl bg-primary p-2 rounded"></i>
//               <div className="text-neutral text-sm">
//                 <h4>help@example.com</h4>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="p-4 bg-[#222] text-base-100">
//         <div className="flex justify-center items-center">
//           <p className="text-xs">
//             Copyright © 2022 Dentelo. All Rights Reserved.
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;


import React from "react";
import { Link } from "react-router-dom";
import BottomToTop from "./BottomToTop";
import "./Footer.css"; 

const Footer = () => {
  return (
    <footer className="footer-container">
      <BottomToTop />
  
      <div className="bg-accent py-16 footer-main">
        <div className="grid px-5 sm:grid-cols-2 lg:grid-cols-4 gap-8 container mx-auto text-base-100">
          {/* Brand Section */}
          <div className="footer-section">
            <div className="footer-brand">
              <Link to="#" className="footer-logo-link">
                <h2 className="text-4xl font-bold text-base-100 mb-5 logo-text">
                  Dentelo.
                </h2>
              </Link>
              <p className="mb-5 text-neutral text-sm footer-description">
                Mauris non nisi semper, lacinia neque in, dapibus leo.
                Curabitur sagittis libero tincidunt tempor finibus. Mauris at
                dignissim ligula, nec tristique orci.Quisque vitae metus.
              </p>
            </div>
            <div className="flex justify-start items-center gap-3 timing-box">
              <i className="ri-time-line text-3xl bg-primary p-2 rounded icon-hover"></i>
              <div className="text-neutral text-sm">
                <h2 className="timing-text">Monday-Saturday:</h2>
                <h2 className="timing-text">9:00am-10:00pm</h2>
              </div>
            </div>
          </div>

          {/* Links Section */}
          <div className="footer-section">
            <h2 className="text-2xl font-bold section-title">Others Links</h2>
            <ul className="mt-5 text-sm footer-links">
              <li className="footer-link-item">
                <i className="ri-add-line text-primary link-icon"></i>
                <Link to="/home" className="footer-link">Home</Link>
              </li>
              <li className="footer-link-item">
                <i className="ri-add-line text-primary link-icon"></i>
                <Link to="/about" className="footer-link">About Us</Link>
              </li>
              <li className="footer-link-item">
                <i className="ri-add-line text-primary link-icon"></i>
                <Link to="/services" className="footer-link">Services</Link>
              </li>
              <li className="footer-link-item">
                <i className="ri-add-line text-primary link-icon"></i>
                <Link to="/blogs" className="footer-link">Blogs</Link>
              </li>
              <li className="footer-link-item">
                <i className="ri-add-line text-primary link-icon"></i>
                <Link to="/contact" className="footer-link">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Services Section */}
          <div className="footer-section">
            <h2 className="text-2xl font-bold section-title">Our Services</h2>
            <ul className="mt-5 text-sm footer-links">
              <li className="footer-link-item">
                <i className="ri-add-line text-primary link-icon"></i>
                <Link to="#" className="footer-link">Root Canal</Link>
              </li>
              <li className="footer-link-item">
                <i className="ri-add-line text-primary link-icon"></i>
                <Link to="#" className="footer-link">Alignment Teeth</Link>
              </li>
              <li className="footer-link-item">
                <i className="ri-add-line text-primary link-icon"></i>
                <Link to="#" className="footer-link">Cosmetic Teeth</Link>
              </li>
              <li className="footer-link-item">
                <i className="ri-add-line text-primary link-icon"></i>
                <Link to="#" className="footer-link">Oral Hygiene</Link>
              </li>
              <li className="footer-link-item">
                <i className="ri-add-line text-primary link-icon"></i>
                <Link to="#" className="footer-link">Cavity Inspection</Link>
              </li>
              <li className="footer-link-item">
                <i className="ri-add-line text-primary link-icon"></i>
                <Link to="#" className="footer-link">Live Advisory</Link>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="footer-section">
            <h2 className="text-2xl font-bold mb-5 section-title">Contact Us</h2>

            <div className="flex justify-start items-center gap-3 mb-4 contact-item">
              <i className="ri-map-pin-line text-3xl bg-primary p-2 rounded icon-hover"></i>
              <div className="text-neutral text-sm contact-text">
                <h4>1247/Plot No. 39, 15th Phase</h4>
                <h2>LHB Colony, Kanpur</h2>
              </div>
            </div>

            <div className="flex justify-start items-center gap-3 mb-4 contact-item">
              <i className="ri-phone-fill text-3xl bg-primary p-2 rounded icon-hover"></i>
              <div className="text-neutral text-sm contact-text">
                <h4>+91-7052-101-786</h4>
              </div>
            </div>

            <div className="flex justify-start items-center gap-3 mb-4 contact-item">
              <i className="ri-mail-line text-3xl bg-primary p-2 rounded icon-hover"></i>
              <div className="text-neutral text-sm contact-text">
                <h4>help@example.com</h4>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="p-4 bg-[#222] text-base-100 copyright-section">
        <div className="flex justify-center items-center">
          <p className="text-xs copyright-text">
            Copyright © 2022 Dentelo. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;