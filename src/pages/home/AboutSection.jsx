import React from "react";
import aboutBanner from "./../../assets/images/about-banner.png";
import { useNavigate } from "react-router-dom";

const AboutSection = () => {
  const navigate = useNavigate();

  return (
    <section aria-label="aboutSection" className="py-16">
      <div className="grid lg:grid-cols-2 justify-center items-center px-5 gap-2 container mx-auto">
        {/* About section image start*/}
        <figure className="flex justify-start items-center sm:mb-5">
          <img
            src={aboutBanner}
            alt="hero banner"
            className="w-full lg:w-[85%]"
          />
        </figure>
        {/* About section image end*/}

        {/* About section info data start */}
        <div className="flex justify-center items-center">
          <div>
            <p className="text-base md:text-xl lg:text-2xl font-bold uppercase text-primary mb-1 md:mb-3 lg:mb-4">
              About Us
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-accent mb-3 md:mb-5 lg:mb-8">
              We Care For Your Dental Health
            </h1>
           <p className="text-base text-neutral mb-5">
  At Parkwood Green Dental, your smile is our top priority.
   Our team of experienced dentists is committed to providing gentle, 
   personalized, and high-quality dental care for patients of all ages.
    We combine modern technology with compassionate care to ensure every visit is comfortable and stress-free.
</p>

<p className="text-base text-neutral mb-5">
  Our mission is to promote lifelong dental health through preventative care, education,
   and professional treatments in a warm and welcoming environment. We treat every patient with compassion, 
   deliver excellence in every procedure, and build trust through honest, transparent care.
</p>


            <button className="btn text-base-100 uppercase font-bold bg-gradient-to-r from-accent to-primary"
            onClick={() => navigate("/about")}
            >
              read more
            </button>
          </div>
        </div>
        {/* About section info data end */}
      </div>
    </section>
  );
};

export default AboutSection;
