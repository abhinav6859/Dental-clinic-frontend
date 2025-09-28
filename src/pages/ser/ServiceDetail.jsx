import React, { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import services from "./servicesData";

const ServiceDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const service = services.find((s) => s.id === parseInt(id));

  useEffect(() => {
    if (service?.link) {
      navigate(service.link, { replace: true });
    }
  }, [service, navigate]);

  if (!service) {
    return <h2 className="text-center text-red-500">Service not found</h2>;
  }

  if (service.link) return null;

  return (
    
    <div className="w-full bg-white text-white p-6 rounded-2xl shadow-lg
          
            ">
             <div
  className="w-full bg-gradient-to-r bg-sky-700   text-white p-6 rounded-2xl shadow-md
            hover:shadow-xl hover:-translate-y-1
             transition-all duration-300 ease-in-out"
>
        <h3 className="text-lg ">What can we offer you?</h3>
      <h1 className="text-3xl font-bold mt-2">{service.title}</h1>
      <h2 className="text-xl  mt-1"> {service.discription}</h2>
</div>

      {service.img && (
        <img
          src={service.img}
          alt={service.title}
          className="w-80 h-70 object-cover rounded-lg shadow-lg mt-3"
        />
      )}
<div className="mt-3 text-gray-600 font-sans font-semibold whitespace-pre-line">
  {service.details}
</div>
      <button className="mt-5 bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-800"
      onClick={() => navigate("/Appointment")}
      >
        Book Now
      </button>

      <Link to="/services">
        <button className="mt-5 ml-4 bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-800">
          ← Back to Services
        </button>
      </Link>
    </div>
  );
};

export default ServiceDetail;
