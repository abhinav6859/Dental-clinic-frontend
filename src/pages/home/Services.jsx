import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import serviceIcon1 from "../../assets/images/service-icon-1.png";
import serviceIcon2 from "../../assets/images/service-icon-2.png";
import serviceIcon3 from "../../assets/images/service-icon-3.png";
import serviceIcon4 from "../../assets/images/service-icon-4.png";
import serviceIcon5 from "../../assets/images/service-icon-5.png";
import serviceIcon6 from "../../assets/images/service-icon-6.png";
import serviceBg from "../../assets/images/service-banner.png";
import Service from "./Service";
import servicesData from "../ser/servicesData";


function Services() {
  const [showCards, setShowCards] = useState(false);
  const navigate = useNavigate();

   const services = [
    {
      _id: 1,
      title: "Root Canal",
      designation:
        "Aenean eleifend turpis tellus, nec laoreet metus elementum ac.",
      img: serviceIcon1,
    },
    {
      _id: 2,
      title: "Alignment Teeth",
      designation:
        "Aenean eleifend turpis tellus, nec laoreet metus elementum ac.",
      img: serviceIcon2,
    },
    {
      _id: 3,
      title: "Cosmetic Teeth",
      designation:
        "Aenean eleifend turpis tellus, nec laoreet metus elementum ac.",
      img: serviceIcon3,
    },
    {
      _id: 3,
      title: "Oral Hygiene",
      designation:
        "Aenean eleifend turpis tellus, nec laoreet metus elementum ac.",
      img: serviceIcon4,
    },
    {
      _id: 3,
      title: "Live Advisory",
      designation:
        "Aenean eleifend turpis tellus, nec laoreet metus elementum ac.",
      img: serviceIcon5,
    },
    {
      _id: 3,
      title: "Cavity Inspection",
      designation:
        "Aenean eleifend turpis tellus, nec laoreet metus elementum ac.",
      img: serviceIcon6,
    },
  ];
  return (
    <section className="container mx-auto px-5 pt-16 pb-16">
      <div className="text-center mb-3 md:mb-8 lg:mb-16">
        <p className="text-base md:text-xl lg:text-2xl font-bold uppercase text-primary mb-1 md:mb-3 lg:mb-4">
          OUR SERVICES
        </p>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
          What We Provide
        </h1>
      </div>
      <div
        className="grid sm:grid-cols-1 md:grid-cols-2 md:gap-x-8 gap-y-8 lg:gap-x-[420px] bg-no-repeat bg-center md:bg-inherit"
        style={{ backgroundImage: `url(${serviceBg})` }}
      >
                {services.map((service) => (
          <Service key={service._id} service={service} />
               ))}
        {!showCards && (
          <button
            className="btn btn-primary text-white w-48"
            onClick={() => setShowCards(true)}
          >
            Show All Services
          </button>
        )}
        {showCards &&
          servicesData.map((service) => (
            <div key={service.id} className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
              <img
                src={service.img}
                alt={service.title}
                className="w-32 h-32 object-cover mb-4 rounded"
              />
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-gray-700 mb-4 text-center">{service.discription}</p>
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                onClick={() => navigate(`/services/${service.id}`)}
              >
                Read More
              </button>
            </div>
          ))}
      </div>
    </section>
  );
}

export default Services;