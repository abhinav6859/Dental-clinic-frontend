import React from "react";
import dentistImg from "../../assets/images/Comprehensive.png";
import { NavLink } from "react-router-dom";

const ComprehensiveExams = () => {
  return (
    <div className="font-sans text-gray-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-200 to-blue-400 text-white py-16 px-6 md:px-20">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-lg mb-2">What can we offer you?</h3>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Comprehensive Exams
          </h1>
          <p className="text-lg md:text-xl leading-relaxed">
            Maintaining your oral health is crucial in avoiding pain, tooth loss
            and expensive restorative dentistry procedures.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="max-w-6xl mx-auto px-6 md:px-20 py-16 grid md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div>
          <p className="mb-6 leading-relaxed">
            Many people ignore their oral health; owing to that,often they
            suffer from dental pain and tooth loss that might lead to expensive
            restorative dentistry procedures. To avoid such dental problems, it
            is essential to do dental check-ups regularly.
          </p>
          <p className="mb-6 leading-relaxed">
            At Parkwood Green Dental, we offer comprehensive dental check-ups to
            determine all types of dental problems including tooth decay, gum
            disease, discoloured teeth/crowns, cracks, and chipped teeth at an
            affordable cost. We offer high-quality dentistry services.
          </p>

          <h3 className="text-xl font-semibold mb-4">
            What is a Comprehensive Dental Exam?
          </h3>
          <p className="leading-relaxed">
            Well, a comprehensive dental exam is an inevitable component when it
            comes to preventative dentistry. In most cases, a highly qualified
            dental expert will examine the oral health of the patients and will
            determine any oral disease or offer dental care tips to maintain
            healthy oral hygiene.
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

export default ComprehensiveExams;
