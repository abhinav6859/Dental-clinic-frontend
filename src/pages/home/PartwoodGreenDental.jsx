import React from 'react';
import { useNavigate } from "react-router-dom";
import { FaTooth, FaUserMd, FaMoneyBillWave, FaCalendarCheck } from "react-icons/fa";



const cards = [
  {
    title: "Services and Treatments",
    description:
      "With a gentle and professional approach, we provide all our patients with high-quality, long lasting dental care. We hope to change people’s perceptions of dentistry.",
    button: "READ MORE",
     backgroundColor: "bg-gradient-to-r from-teal-400 via-green-400 to-lime-400 ",
      icon: <FaTooth className="text-white text-2xl" />,
          link: "/Services",
  },
  {
    title: "Dental Care",
    description:
      "Parkwood Green Dental hopes to be your number one choice for all your emergency dental care needs. Our team of expert dentists are always here to help you.",
    button: "READ MORE",
      backgroundColor: "bg-cyan-400",
       icon: <FaUserMd className="text-white text-2xl" />,
       link: "/dentalcare",
  },
  {
    title: "Payment Option",
    description:
      "We shall collaborate with you to pinpoint the most suitable payment options. Not only do we accept all private health insurers, but under the Medicare Child Dental...",
    button: "READ MORE",
      backgroundColor: "bg-cyan-500",
         icon: <FaMoneyBillWave className="text-white text-2xl" />,
  },
  {
    title: "Schedule Appointment",
    description:
      "Consultation is by appointment only. To book now call Parkwood Green Dental on (03) 9449 4100 and we will ensure you get the country’s best dental care.",
    button: "BOOK NOW",
   
      backgroundColor: "bg-cyan-600",
            icon: <FaCalendarCheck className="text-white text-2xl" />,
              link: "/Appointment",
  },
];
const PartwoodGreenDental = () => {


   const navigate = useNavigate();



  return (

 <div className="w-full rounded-md text-base-100 text-xs lg:text-sm uppercase bg-gradient-to-r from-accent to-primary py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 ">
        {cards.map((card, index) => (
          <div
            key={index}
           className={`${card.backgroundColor}  rounded-lg p-6 flex flex-col items-center shadow-lg 
                       transition duration-300 ease-in-out
                       hover:bg-cyan-700 active:bg-cyan-800`}
          >
            {/* Icon */}
           <div
  className="bg-green-500 w-16 h-16 flex items-center justify-center rounded-full -mt-12 shadow-md
             transition transform duration-300 ease-in-out 
             hover:scale-125 hover:rotate-12 hover:bg-green-600"
>
  {card.icon}
</div>
            {/* Content */}
            <h3 className="mt-6 text-xl font-semibold text-center">
              {card.title}
            </h3>
            <p className="mt-3 text-sm text-center">{card.description}</p>

            {/* Button */}
            <button
             onClick={() => card.link && navigate(card.link)}
            className="mt-6 px-5 py-2 bg-white text-black font-semibold rounded shadow 
                               hover:bg-gray-200 active:bg-gray-300 transition">
              {card.button}
            </button>
          </div>
        ))}
      </div>
    </div>
    
  );
};

export default PartwoodGreenDental;