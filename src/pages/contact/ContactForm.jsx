

import { useState } from "react";
import { MapPin, Mail, Phone } from "lucide-react";
import emailjs from "emailjs-com";


const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "YOUR_SERVICE_ID", // replace with EmailJS service ID
        "YOUR_TEMPLATE_ID", // replace with EmailJS template ID
        formData,
        "YOUR_USER_ID" // replace with EmailJS public key
      )
      .then(
        () => {
          setStatus("Message sent successfully ✅");
          setFormData({ name: "", email: "", subject: "", message: "" });
        },
        (error) => {
          setStatus("Failed to send message ❌. Try again later.");
          console.error("EmailJS Error:", error);
        }
      );
  };

  return (
    <div className="bg-gray-50 py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12">
        {/* LEFT SIDE - CONTACT INFO */}
        <div className="space-y-8">
          <h2 className="text-4xl font-bold text-gray-900">Contact Us</h2>
          <p className="text-lg text-gray-600">
            Have questions? We’d love to hear from you. Reach out today and our
            friendly dental team will get back to you shortly.
          </p>

          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <MapPin className="text-blue-600 w-6 h-6 mt-1" />
              <div>
                <h3 className="font-semibold text-lg text-gray-800">
                  Location
                </h3>
                <p className="text-gray-600">
                  Suite 3, 1-5 Kate Way, Hillside Vic 3037
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Mail className="text-blue-600 w-6 h-6 mt-1" />
              <div>
                <h3 className="font-semibold text-lg text-gray-800">Email</h3>
                <p className="text-gray-600">info@parkwoodgreendental.com.au</p>
                <p className="text-sm text-gray-500">Available 24/7</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Phone className="text-blue-600 w-6 h-6 mt-1" />
              <div>
                <h3 className="font-semibold text-lg text-gray-800">
                  Phone Contact
                </h3>
                <p className="text-gray-600">(03) 9449 4100</p>
                <p className="text-sm text-gray-500">Within working hours</p>
              </div>
            </div>
          </div>

          {/* Google Maps */}
          <div className="mt-10">
            <iframe
              title="Clinic Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3154.768394539656!2d144.7398!3d-37.7066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDQyJzIzLjkiUyAxNDTCsDQ0JzIzLjMiRQ!5e0!3m2!1sen!2sau!4v1695840000000!5m2!1sen!2sau"
              width="100%"
              height="250"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              className="rounded-xl shadow-lg"
            ></iframe>
          </div>
        </div>

        {/* RIGHT SIDE - FORM */}
        <div className="bg-white shadow-xl rounded-2xl p-8">
          <h3 className="text-2xl font-semibold mb-6 text-gray-900">
            Send us a message
          </h3>

          <form onSubmit={handleSubmit} className="space-y-5">
            <input
              type="text"
              name="name"
              placeholder="Your Name *"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 outline-none"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email *"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 outline-none"
            />

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 outline-none"
            />

            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 outline-none"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>

          {status && (
            <p className="mt-4 text-center text-sm text-green-600">{status}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
