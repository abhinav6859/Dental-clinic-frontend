import React from "react";

const Category = () => {
  const categorys = [
  {
    _id: 1,
    title: "Comprehensive Dental Check-Ups",
    icon: <i className="ri-stethoscope-line"></i>,
  },
  {
    _id: 2,
    title: "Teeth Cleaning & Whitening",
    icon: <i className="ri-brush-line"></i>,
  },
  {
    _id: 3,
    title: "Orthodontics & Braces",
    icon: <i className="ri-hospital-line"></i>,
  },
  {
    _id: 4,
    title: "Emergency Dental Care",
    icon: <i className="ri-first-aid-kit-line"></i>,
  },
  ];

  return (
    <section className="container mx-auto px-5 py-10 bg-[#f7fafd] ">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {categorys.map((category) => (
          <div key={category._id}>
            <div className="p-5 py-10 bg-white shadow-lg text-sm">
              <p className="text-6xl mb-2 text-primary">{category.icon}</p>
              <p className="text-accent text-sm font-bold">{category.title}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Category;
