
import React from "react";
import { Link } from "react-router-dom";


const ServiceCard = ({ id, title, description, img }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 hover:shadow-xl transition">
      <img src={img} alt={title} className="w-full h-40 object-cover rounded-md" />
      <h2 className="text-xl font-bold mt-3">{title}</h2>
      <p className="text-gray-600 mt-2">{description}</p>
      <Link to={`/services/${id}`}>
        <button className="mt-3 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
          Learn More
        </button>
      </Link>
    </div>
  );
};

export default ServiceCard;
