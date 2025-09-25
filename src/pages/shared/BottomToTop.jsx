

import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function BottomToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const { pathname } = useLocation();

  // scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [pathname]);

  // show/hide button based on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {isVisible && (
        <button
          onClick={() =>
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
          }
          style={{
            position: "fixed",
            padding: ".1rem .5rem",
            fontSize: "30px",
            bottom: "40px",
            right: "35px",
            backgroundColor: "#2f62da",
            color: "#fff",
            borderRadius: "50%",
            textAlign: "center",
            border: "none",
            cursor: "pointer",
          }}
        >
          <i className="ri-arrow-up-line"></i>
        </button>
      )}
    </>
  );
}

export default BottomToTop;
