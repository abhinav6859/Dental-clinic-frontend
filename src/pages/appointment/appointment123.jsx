import React, { useState } from "react";
import { FaCalendarCheck } from "react-icons/fa";

const BookAppointment = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    service: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const services = [
    "General Dentistry",
    "Wisdom Teeth Removal",
    "Zoom Teeth Whitening",
    "Orthodontics (Braces)",
    "Dental Crowns",
    "Dental Implants",
    "Veneers",
    "Root Canal Therapy",
    "Emergency Dentistry",
  ];

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // TODO: send formData to your backend API or email service
    console.log("Appointment Data:", formData);

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        date: "",
        time: "",
        service: "",
      });
    }, 3000);
  };

  return (
    <div className="bg-gray-50 py-12 px-6 md:px-16 lg:px-32">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-2xl p-8">
        {/* Header */}
        <div className="flex items-center gap-2 mb-6">
          <FaCalendarCheck className="text-blue-600 text-2xl" />
          <h1 className="text-2xl font-bold text-gray-900">
            Book an Appointment
          </h1>
        </div>
        <p className="text-gray-600 mb-8">
          Fill out the form below to schedule your appointment with{" "}
          <span className="font-semibold text-blue-600">Parkwood Green Dental</span>.
          We’ll get back to you as soon as possible.
        </p>

        {/* Success message */}
        {submitted && (
          <div className="mb-6 p-4 bg-green-100 border border-green-300 text-green-700 rounded-lg">
            ✅ Appointment request submitted successfully! We’ll contact you soon.
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name */}
          <div>
            <label className="block text-gray-700 font-medium">Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="mt-2 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Enter your full name"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-700 font-medium">Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-2 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="you@example.com"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-gray-700 font-medium">Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="mt-2 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="e.g. 9876543210"
            />
          </div>

          {/* Date & Time */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 font-medium">Date</label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
                className="mt-2 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium">Time</label>
              <input
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
                className="mt-2 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
          </div>

          {/* Service */}
          <div>
            <label className="block text-gray-700 font-medium">Service</label>
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
              className="mt-2 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            >
              <option value="">-- Select a Service --</option>
              {services.map((service, index) => (
                <option key={index} value={service}>
                  {service}
                </option>
              ))}
            </select>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Submit Appointment
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookAppointment;
