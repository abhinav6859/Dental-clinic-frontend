import React from "react";
import dentistImg from "../../assets/images/123.jpeg";
import { NavLink } from "react-router-dom";

const DentalCarePage = () => {
  return (
    <div className="font-sans text-gray-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-200 to-blue-400 text-white py-16 px-6 md:px-20">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-lg mb-2">What can we offer you?</h3>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Dental Care Melbourne
          </h1>
          <p className="text-lg md:text-xl leading-relaxed">
            A tooth consists of four major parts. The enamel, which is the hard
            outer coating, the dentine, a softer material that supports the
            enamel and forms most of the tooth...
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="max-w-6xl mx-auto px-6 md:px-20 py-16 grid md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">
            We are Your Hillside Emergency Dentist
          </h2>
          <p className="mb-6 leading-relaxed">
            Have a dental emergency that needs immediate attention? Or a quick
            dental treatment when your regular dentist is unavailable? We can
            help. Parkwood Green Dental offers emergency dental care in Hillside
            just when you need it.
          </p>
          <p className="mb-6 leading-relaxed">
            Our dentists are experienced in resolving a wide number of serious
            dental issues. From persistent toothaches to cracked teeth, lost
            fillings, and more — get instant relief for all dental emergencies
            from our friendly dentists today. Call to book an appointment.
          </p>

          <h3 className="text-xl font-semibold mb-4">
            Why Visit an Emergency Dentist?
          </h3>
          <p className="leading-relaxed">
            Most often people ignore dental issues until they develop into
            something far more complex to treat. If you are not sure whether the
            pain you have is a dental emergency a dentist can confirm with a
            quick diagnosis. This improves your chances of saving a potentially
            damaged tooth or crown before it is too late.
          </p>
        </div>

        {/* Image */}
        <div className="flex justify-center">
          <img
            src={dentistImg}
            alt="Dental treatment"
            className="rounded-lg shadow-lg w-full max-w-md"
          />
        </div>
      </section>

        <section className="bg-gray-50 py-16 px-6 md:px-20">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-semibold mb-6">
            Why Us for Emergency Dental Care in Hillside?
          </h2>
          <p className="mb-6 leading-relaxed">
            At Parkwood Green Dental we do not take chances with serious tooth
            problems. We understand the severity of pain and trauma one faces
            during dental emergencies and swiftly help ease it with the right
            approach.
          </p>
          <p className="mb-6 leading-relaxed">
            For us, no dental issue is big or small. Everyone from our dentists
            to allied dental staff is registered, highly-experienced, and caring
            and will go the extra mile to offer all the support and assistance
            you need during treatment.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="max-w-5xl mx-auto py-16 px-6 md:px-20">
        <h2 className="text-2xl font-semibold mb-6">Our Emergency Services</h2>
        <p className="mb-6 leading-relaxed">
          We offer emergency dental care services to our patients. In most
          cases, injuries would be the main reason for seeking emergency dental
          care. Our emergency dental care services also include a thorough
          examination and diagnosis of the issue as well as treatment or
          medication. Our years of experience has allowed us to tackle any
          dental situation.
        </p>

        <h3 className="text-xl font-semibold mb-4">
          Common dental emergencies include:
        </h3>
        <ul className="list-disc pl-6 space-y-2 mb-8">
          <li>Pulpitis</li>
          <li>Abscesses</li>
          <li>Cellulitis</li>
          <li>Pericoronitis</li>
          <li>Broken / Loose / Missing Teeth</li>
        </ul>
      </section>

      {/* Locations Section */}
      <section className="bg-gray-100 py-16 px-6 md:px-20">
        <div className="max-w-5xl mx-auto">
          <p className="mb-6 leading-relaxed">
            Our clinic is headquartered in Hillside and we cater to patients
            coming from areas like Aintree, Burnside, Cairnlea, Calder Park,
            Caroline Springs, Delahey, Fraser Rise, Keilor, Keilor Downs, Keilor
            Lodge, Rockbank, St Albans, Sydenham, Taylors Hill, Taylors Lakes,
            Watergardens, and surrounding regions.
          </p>
          <p className="mb-6 leading-relaxed">
            With the best dental amenities and tools, our dentists are waiting
            to help you. You can call us on{" "}
            <span className="font-bold">(03) 9449 4100</span> for any emergency
            consultation.
          </p>

          <button className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 transition">
             <NavLink to="/appointment" className="font-bold">
            BOOK DENTAL CARE MELBOURNE TODAY
           
             
            </NavLink>
          </button>
        </div>
      </section>
    </div>
  );
};

export default DentalCarePage;
