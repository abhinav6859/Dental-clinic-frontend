
import image from '../../assets/images/LAUGHING-GAS.png';
import image2 from '../../assets/images/wisdom.png';
import image3 from '../../assets/images/Preventive-Care.jpg';
import image4 from '../../assets/images/Dentures.jpg';
import image5 from '../../assets/images/BRIDGE.jpg';

const servicesData = [
  {
    id: 1,
    title: 'Dental Care',
    discription: 'Comprehensive dental care services for all ages.',
    img: 'path/to/dental-care-image.jpg',
    link: '/dentalcare',
  },
 {
  id: 2,
  title: "Dentures",
  img: image4, // replace with your dentures-related image
  discription :" It’s difficult to believe the impact that properly fitted dentures can have on your health, your appearance and your confidence.",
  details: (
    <div className="space-y-6">
    
     

      <p className="text-gray-700 leading-relaxed">
        If you have a set of missing teeth, opting for dentures is a suitable
        choice. A denture can be defined as an artificial tooth or set of teeth
        placed in your mouth, as a replacement to your lost or removed natural
        teeth. Schedule an appointment with{" "}
        <span className="font-semibold text-blue-600">Parkwood Green Dental</span>{" "}
        today for partial dentures at an affordable cost.
      </p>

      {/* What We Do Section */}
      <h2 className="text-2xl font-semibold text-gray-900">What We Do?</h2>
      <p className="text-gray-700 leading-relaxed">
        We are the real experts when it comes to designing partial dentures. Our
        experienced dentists will do an in-depth analysis of the patient and will
        determine what kind of dentures suit them.
      </p>
      <p className="text-gray-700 leading-relaxed">
        Our dentures are custom designed and fit well for all patients. We take
        special care to ensure that our denture blends in naturally with their
        existing teeth.
      </p>

      {/* Types of Dentures */}
      <h2 className="text-2xl font-semibold text-gray-900">Types of Dentures We Do</h2>
      <p className="text-gray-700 leading-relaxed">
        We can provide both full and partial dentures. We prefer a{" "}
        <span className="font-semibold">plastic or metal base framework</span>,
        depending on the patient’s condition. In general, our dentists will
        suggest a plastic partial framework for an emergency or temporary
        replacement. Meanwhile, a metal framework is used as a permanent
        replacement and is in fact the traditional design that restores the
        strength and rigidity offered by natural teeth.
      </p>

      {/* Contact Info */}
      <p className="text-gray-700 font-medium">
        To know more about our dental dentures, feel free to dial our customer
        care number{" "}
        <span className="text-blue-600 font-bold">(03) 9449 4100</span> or you
        can mail{" "}
        <a
          href="mailto:info@parkwoodgreendental.com.au"
          className="text-blue-600 underline"
        >
          info@parkwoodgreendental.com.au
        </a>
        .
      </p>
    </div>
  ),
},
{
  id: 3,
  title: "Bridge",
  discription: "A dental bridge replaces one or more missing teeth. They are recommended in cases where removable dentures or dental implants may not be suitable.",
  img: image5, // replace with your dental bridge image
  details: (
    <div className="space-y-6">
      {/* Intro Section */}

      <p className="text-gray-700 leading-relaxed">
        Looking for professional dental bridge care at an affordable cost? You
        are in the right place. At{" "}
        <span className="font-semibold text-blue-600">Parkwood Green Dental</span>,
        we offer the best professional dental care to patients of all age groups
        at a reasonable cost in Hillside.
      </p>

      <p className="text-gray-700 leading-relaxed">
        If you’re worried about missing one or more teeth, do not hesitate to walk
        into Parkwood Green Dental. Our dentists will explain all the options and
        their pros and cons. When you visit us, we’ll diagnose and recommend the
        dental solution that works best for you.
      </p>

      {/* What We Do Section */}
      <h2 className="text-2xl font-semibold text-gray-900">What We Do?</h2>
      <p className="text-gray-700 leading-relaxed">
        Dental bridge is the process of <span className="font-semibold">bridging the gap</span> 
        caused due to missing teeth. We bridge the gap by using two or more crowns
        to support the teeth.
      </p>
      <p className="text-gray-700 leading-relaxed">
        We mostly prefer <span className="font-semibold">porcelain</span> for making
        pontics/false teeth to fill the gap formed due to missing teeth.
      </p>

      {/* Benefits Section */}
      <h2 className="text-2xl font-semibold text-gray-900">
        Benefits of Choosing Parkwood Green Dental for Your Dental Bridge Work
      </h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-700">
        <li>
          Our dentists will restore your beautiful smile and ability to chew, and
          you will be able to speak flawlessly
        </li>
        <li>Our bridge work will restore your jaw alignment</li>
        <li>
          Our dental bridgework will prevent the remaining teeth from drifting away
          from their original position
        </li>
      </ul>

      {/* Full Porcelain Dental Bridges */}
      <h2 className="text-2xl font-semibold text-gray-900">
        Full Porcelain Dental Bridges
      </h2>
      <p className="text-gray-700 leading-relaxed">
        We recommend full porcelain dental bridges as it is the latest and most
        innovative aesthetic option to replace your missing teeth. Our full
        porcelain bridges are highly attractive and offer you a natural look.
      </p>

      {/* Call to Action */}
      <p className="text-gray-700 font-medium">
        Call us today to schedule an appointment with our dentist for your dental
        care! Feel free to ask us if you have any questions!
      </p>
    </div>
  ),
}
,
  {
    id: 4,
    title: 'UI/UX Design',
    discription: 'Designing user-friendly interfaces and experiences.',
    img: '..',
  },
  {
  id: 5,
  title: "Laughing Gas (Nitrous Oxide)",
  img: image, 
 
  details: `
FEEL MORE RELAXED AND COMFORTABLE IN THE DENTAL CHAIR

BENEFITS INCLUDE:
- NO GAG REFLEX
- REDUCE FEAR & ANXIETY
- REDUCE PAIN & DISCOMFORT
- REDUCE JAW PAIN DURING TREATMENT
- SAFE AND REVERSIBLE

BOOK IN A CONSULTATION WITH DR. ROY HUI
  `
},
{
  id: 6,
  title: "Wisdom Teeth Removal",
  img: image2,
  discription: "The human teeth are arranged in categories. You have the front teeth called the incisor teeth, the four canine teeth usually used for breaking down food and maybe opening those chocolate bars.",
  details: (
    <div className="space-y-4">
     

      <p>
        People tend to get their wisdom teeth during their late teenage years or
        in their twenties. For some people, these wisdom teeth are properly and
        healthily aligned.
      </p>

      <p>
        In some cases, <span className="font-bold text-red-600">surgical removal</span> might be
        required for removing the wisdom teeth. At Parkwood Green Dental, we
        offer high-standard wisdom tooth removal services.
      </p>

      <h2 className="text-xl font-bold mt-4">
        Wisdom Teeth Removal at Parkwood Green Dental
      </h2>

      <p>
        Our dentists are highly experienced when it comes to removing wisdom
        teeth. A consultation and X-ray analysis will be carried out before
        stepping into the procedure at Parkwood Green Dental Clinic.
      </p>

      
        <p>
          We prefer commencing the removal procedure for our patients after
          giving local anaesthesia and exactly pinpointing the tooth position.
          Compared with other clinics in Hillside, our services are both{" "}
          <span className="bg-yellow-200">affordable</span> and high quality.
        </p>

            <h2 className="text-2xl font-semibold text-gray-900">
        Who Should Go for Wisdom Teeth Removal?
      </h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-700">
        <li>People who suffer from pain</li>
        <li>People facing issues like food trapped in wisdom tooth</li>
        <li>
          People facing issues like infection, tooth decay, cyst development, and gum disease
        </li>
        <li>Wisdom teeth damaging nearby tooth</li>
      </ul>
      <p className="text-gray-700">
        Our dentists will suggest you undergo wisdom teeth removal during your
        routine oral check-ups or if you start to face some serious oral issues.
      </p>

      {/* Section 2 */}
      <h2 className="text-2xl font-semibold text-gray-900">
        Signs and Symptoms That Trigger the Necessity of Visiting Dentists
      </h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-700">
        <li>Difficulty in swallowing or breathing</li>
        <li>Experiencing oral bleeding</li>
        <li>Facing severe pain, fever, swelling, or pus around your wisdom teeth</li>
        <li>Experiencing bad taste in your mouth</li>
      </ul>
      <p className="text-gray-700 font-medium">
        To know more about wisdom teeth removal and to book a consultation, dial{" "}
        <span className="text-blue-600 font-bold">(03) 9449 4100</span>.
      </p>
      </div>
    
  ),
},

{
  id: 7,
  title: "Preventive Care",
  img: image3, // replace with actual preventive care image
  discription:"     Prevention of dental problems begins with regular visits to your Dental Hygienist. Depending on the condition of your teeth and gums, visitswill be scheduled at least every six months.",
  details: (
    <div className="space-y-6">
      {/* Intro Section */}
      <h3 className="text-lg text-gray-600 font-medium">What can we offer you?</h3>
      <h1 className="text-3xl font-bold text-gray-900">Preventive Care</h1>

     

      <p className="text-gray-700 leading-relaxed">
        Dental preventive care or preventive dentistry is a modern method of
        making a significant impact on your general health by maintaining good
        oral health. In general, dental preventive care should be carried out as
        a routine.{" "}
        <span className="font-semibold text-blue-600">
          Parkwood Green Dental
        </span>{" "}
        offers dental preventive care for a fixed period of every 6 months.
      </p>

      <p className="text-gray-700 leading-relaxed">
        Our highly experienced dental hygienist will offer you a high standard
        preventive care depending upon your oral condition.
      </p>

      {/* What We Do Section */}
      <h2 className="text-2xl font-semibold text-gray-900">What We Do?</h2>
      <p className="text-gray-700 leading-relaxed">
        At Parkwood Green Dental, we offer preventive dentistry with the
        combination of regular dental check-ups along with teaching good habits
        to our patients. Here, we are mentioning habits like regular brushing
        and flossing.
      </p>
      <p className="text-gray-700 leading-relaxed">
        In addition, various preventive tips like teeth cleaning and teeth
        fillings will be done by our dental hygienist depending upon the
        individual’s oral health. By developing these good dental habits and
        performing regular dental check-ups right from childhood, one can
        maintain good oral health for life.
      </p>

      {/* Procedures */}
      <h2 className="text-2xl font-semibold text-gray-900">
        Here are the procedures we follow during our dental preventive care:
      </h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-700">
        <li>
          To get you to maintain good oral health, our dentists will first check
          your teeth and gum thoroughly
        </li>
        <li>
          Thereafter, our dentists will carry out a{" "}
          <span className="font-semibold">‘scale and polish’</span> procedure,
          which clears all plaque and tartar from your teeth
        </li>
        <li>
          Next, our dental experts will guide you on how to brush or floss your
          teeth after every meal or drink you take. This procedure will help you
          remove bacterial ‘plaque’ from your mouth permanently
        </li>
        <li>
          If your oral conditions require any fillings, our dental experts will
          perform those too
        </li>
        <li>
          Finally, our dental team will analyse your diet and suggest suitable
          oral care products
        </li>
      </ul>

      {/* Contact Info */}
      <p className="text-gray-700 font-medium">
        To know more about our dental preventive care service and book an
        appointment with our oral hygienists at our dental care centre in
        Hillside, dial{" "}
        <span className="text-blue-600 font-bold">(03) 9449 4100</span> or send
        an email to{" "}
        <a
          href="mailto:info@parkwoodgreendental.com.au"
          className="text-blue-600 underline"
        >
          info@parkwoodgreendental.com.au
        </a>
        .
      </p>
    </div>
  ),
},

];

export default servicesData;
