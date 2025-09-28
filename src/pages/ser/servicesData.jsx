
import image from '../../assets/images/LAUGHING-GAS.png';
import image1 from'../../assets/images/123.jpeg';
import image2 from '../../assets/images/wisdom.png';
import image3 from '../../assets/images/Preventive-Care.jpg';
import image4 from '../../assets/images/Dentures.jpg';
import image5 from '../../assets/images/BRIDGE.jpg';
import image6 from '../../assets/images/Whitening-Zoom.jpg';
import image7 from '../../assets/images/Orthodontics.jpg';
import image8 from '../../assets/images/dentisrry.webp';
import image9 from '../../assets/images/crown.png';

const servicesData = [
  {
    id: 1,
    title: 'Dental Care',
    discription: 'Comprehensive dental care services for all ages.',
    img: image1,
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
  title: "Invisalign®",
  discription: "Invisalign® is a modern orthodontic treatment that uses clear, removable aligners to straighten teeth discreetly and comfortably.",
  img: image2, 
  
  details: (
    <div className="space-y-6">

      <h2 className="text-xl font-semibold text-blue-600">
        Complete Invisalign® Treatment in Hillside
      </h2>

      <p className="text-gray-700 leading-relaxed">
        Think metal braces look unappealing? Want a reliable solution to straighten
        your crooked teeth without any discomfort? Clear aligners by Invisalign®
        are a great choice for patients whose teeth have misaligned with age or
        anyone who wants an alternative over conventional braces.
      </p>

      <p className="text-gray-700 leading-relaxed">
        At <span className="font-semibold text-blue-600">Parkwood Green Dental</span>,
        we provide hassle-free Invisalign® treatment to patients residing in Hillside,
        helping them bring their smile in good shape. Get in touch to book your
        appointment today.
      </p>

      {/* Reliable Care */}
      <h2 className="text-2xl font-semibold text-gray-900">
        Get Reliable Invisalign® Treatment in Hillside
      </h2>
      <p className="text-gray-700 leading-relaxed">
        As one of Melbourne’s trusted dental practices, Parkwood Green Dental has
        been providing Invisalign® treatment to patients across key suburbs. High
        quality and affordable, our professionals utilise medical-grade tools and
        technology in dentistry to carry out your treatment.
      </p>
      <p className="text-gray-700 leading-relaxed">
        For years, we have conducted several successful Invisalign® treatments and
        can curate a tailored treatment plan to suit your individual needs.
      </p>
      <p className="text-gray-700 leading-relaxed">
        Our practice in Melbourne is centrally located and has a comfortable and
        homely atmosphere. All our dentists, hygienists, and clinical staff are
        highly professional yet friendly and caring. We also provide appointments
        on Saturdays to suit your convenience so you can visit at your leisure for
        your Invisalign® treatment.
      </p>

      {/* Process */}
      <p className="text-gray-700 leading-relaxed">
        Our dentists take alginate impressions and send them to the laboratory.
        This helps us visualise your smile before we begin with the procedure.
      </p>

      {/* What are Invisalign® aligners */}
      <h2 className="text-2xl font-semibold text-gray-900">
        What are Invisalign® aligners?
      </h2>
      <p className="text-gray-700 leading-relaxed">
        Invisalign® is a patented orthodontic treatment that uses transparent trays
        that fit comfortably to align your teeth similar to braces. Often
        recommended by dentists, Invisalign® aligners are a good alternative for
        patients that need to straighten their teeth without opting for conventional
        braces.
      </p>
      <p className="text-gray-700 leading-relaxed">
        Nearly invisible once put on, these aligners work to straighten your
        irregular or crooked teeth — thus the name Invisalign®.
      </p>

      {/* Why Invisalign® */}
      <h2 className="text-2xl font-semibold text-gray-900">
        Why pick Invisalign® over conventional braces?
      </h2>
      <p className="text-gray-700 leading-relaxed">
        Compared to traditional orthodontic options like metal braces, aligners by
        Invisalign® are clear, comfortable, and removable. This makes it a promising
        choice for anyone seeking a hassle-free orthodontic teeth straightening
        solution.
      </p>
      <p className="text-gray-700 leading-relaxed">
        The aligners are essentially made of a unique plastic-like material and can
        be removed on occasions like meals, brushing, and flossing. This gives
        patients a form of convenience that’s not possible with traditional braces.
        Unlike braces, clear aligners can also be customised to suit the needs of
        patients.
      </p>

      {/* Procedure */}
      <h2 className="text-2xl font-semibold text-gray-900">
        What happens during the procedure?
      </h2>
      <p className="text-gray-700 leading-relaxed">
        Initially, our dentists take high-quality photographs and send them ahead to
        the laboratory following which we receive the before & after photos from the
        lab. We then share them with the patient and make a decision whether they
        are an ideal candidate for the treatment.
      </p>
      <p className="text-gray-700 leading-relaxed">
        If yes, then on the basis of your impressions, we chart out a tailored plan.
        Depending on the mould of your teeth, your aligners are accordingly created.
      </p>

      {/* Duration */}
      <h2 className="text-2xl font-semibold text-gray-900">
        How long will the whole treatment take?
      </h2>
      <p className="text-gray-700 leading-relaxed">
        The duration of the treatment depends on several factors and needs of the
        patient. Ideally, the treatment could vary based on your present oral health
        and the dental conditions you have (for instance gapped teeth.) To get a
        better idea, we recommend consulting our dentist.
      </p>

      {/* CTA */}
      <p className="text-gray-700 font-medium">
        At Parkwood Green Dental we always make it a priority to ensure our patients
        receive the dental care they best deserve. Reach out to our friendly team at
        <span className="text-blue-600"> (03) 9449 4100 </span> to know how we can
        help you best.
      </p>
    </div>
  ),
},

  {
  id: 5,
  title: "Laughing Gas (Nitrous Oxide)",
  img: image, 
 discription: "Laughing gas, or nitrous oxide, is a safe and effective sedative used in dentistry to help patients relax during procedures.",
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

{
  id: 8,
  title: "General Dentistry",
  discription:"General dentistry is the branch of dentistry that focuses on the prevention, diagnosis, and treatment of a wide range of dental conditions and diseases affecting the teeth, gums, and overall oral health.",
 img: image8,
  details: (
    <div className="space-y-6">
      {/* Intro */}
   
      <h2 className="text-xl font-semibold text-blue-600">
        Comprehensive General Dentistry Care in Hillside
      </h2>

      <p className="text-gray-700 leading-relaxed">
        Need overall care for all your dental needs? At{" "}
        <span className="font-semibold text-blue-600">Parkwood Green Dental</span>,
        we diagnose, treat, and handle all aspects of your oral health in one place.
        Whether you need routine check-ups or prompt treatment in an emergency, we
        have you covered. Our complete set of general dentistry solutions are
        tailored to your needs to ensure you get the best dental therapy in Hillside.
      </p>
      <p className="text-gray-700 leading-relaxed">
        Get in touch to book an appointment today.
      </p>

      {/* Specialist Info */}
      <h2 className="text-2xl font-semibold text-gray-900">
        We are Your General Dentistry Specialist in Hillside
      </h2>
      <p className="text-gray-700 leading-relaxed">
        Periodic dental care is the key to a healthier well-being of your teeth and
        overall body. At Parkwood Green Dental we understand this and help you plan
        your dental health with periodic screenings and general dentistry services.
        By visiting us, you can effectively detect dental issues early on and treat
        them before it’s too late.
      </p>
      <p className="text-gray-700 leading-relaxed">
        Our practice in Hillside offers a modern, comfortable environment with
        advanced dental instruments, tools, and technology to ensure there are no
        compromises during your treatment.
      </p>
      <p className="text-gray-700 leading-relaxed">
        Most importantly, our team — from dentists to hygienists — is friendly,
        accredited, and highly experienced. We make sure you leave confident and
        healthy after every visit.
      </p>

      {/* Services */}
      <h2 className="text-2xl font-semibold text-gray-900">
        General Dentistry Services We Offer in Hillside
      </h2>
      <ul className="list-disc list-inside space-y-2 text-gray-700">
        <li>
          <strong>Cleanings & Hygiene Treatment:</strong> Professional cleaning
          treatments that prevent tartar, plaque, and decay for healthy teeth and gums.
        </li>
        <li>
          <strong>Wisdom Teeth Extraction:</strong> Safe and comfortable extraction
          to prevent infections or complications.
        </li>
        <li>
          <strong>Sealants:</strong> Invisible protective sealants for children and
          adults to help prevent cavities.
        </li>
        <li>
          <strong>Root Canal Therapy:</strong> Painless procedures to repair and save
          infected teeth while preventing extraction.
        </li>
        <li>
          <strong>Emergency Dentistry Services:</strong> Prompt care for chipped
          teeth, braces repairs, infections, and other urgent issues.
        </li>
      </ul>

      {/* CTA */}
      <p className="text-gray-700 leading-relaxed">
        Have a dental requirement that can’t wait any longer? Get in touch with our
        dentists at Parkwood Green Dental so we can help you better.
      </p>

      {/* Service Areas */}
      <p className="text-gray-700 font-medium">
        Our clinic is headquartered in Hillside and we cater to patients from
        Aintree, Burnside, Cairnlea, Calder Park, Caroline Springs, Delahey, Fraser
        Rise, Keilor, Keilor Downs, Keilor Lodge, Rockbank, St Albans, Sydenham,
        Taylors Hill, Taylors Lakes, Watergardens, and nearby regions.
      </p>
    </div>
  ),
},

{
  id: 9,
  title: "Zoom Teeth Whitening",
  discription:"Zoom Teeth Whitening is a professional teeth whitening treatment that uses a special light-activated gel to effectively and safely whiten teeth, providing a brighter smile in a single session.",
  img: image6, 
  details: (
    <div className="space-y-6">
   
      {/* Intro */}
      <p className="text-gray-700 leading-relaxed">
        The healthier, easier, and less complicated method of teeth whitening is{" "}
        <span className="font-semibold text-blue-600">Zoom Teeth Whitening</span>.
        It combines two major aspects of oral well-being. At Parkwood Green Dental,
        we provide the best teeth whitening service at affordable rates with our
        highly experienced dental staff. With our friendly approach, you’ll feel at
        home while receiving professional care.
      </p>
      <p className="text-gray-700 leading-relaxed">
        Unlike other clinics around Hillside, we focus on Zoom tooth whitening —
        which lightens your discolored tooth enamel in a single day.
      </p>

      {/* What is Zoom Tooth Whitening */}
      <h2 className="text-2xl font-semibold text-gray-900">
        What is Zoom Tooth Whitening?
      </h2>
      <p className="text-gray-700 leading-relaxed">
        Zoom Whitening is a professional bleaching process widely used worldwide to
        lighten tooth enamel. Coffee, tea, cola, smoking, and certain foods can
        cause discoloration that darkens teeth over time. Our expert dentists carry
        out the Zoom in-office whitening procedure that safely bleaches these stains
        without damaging your tooth structure.
      </p>

      {/* Benefits */}
      <h2 className="text-2xl font-semibold text-gray-900">
        Benefits of Parkwood’s Zoom Teeth Whitening
      </h2>
      <ul className="list-disc list-inside space-y-2 text-gray-700">
        <li>Easier and healthier than other whitening procedures, done in one day</li>
        <li>
          Uses light-activated technology that gives you a healthier, vibrant smile
        </li>
        <li>
          Professional dental care from our{" "}
          <span className="font-semibold">expert dentists</span>
        </li>
        <li>Completely safe and highly effective treatment</li>
        <li>
          Available at our Hillside clinic and across surrounding areas
        </li>
      </ul>

      {/* Why Choose */}
      <h2 className="text-2xl font-semibold text-gray-900">
        Why Choose Our Zoom Teeth Whitening?
      </h2>
      <p className="text-gray-700 leading-relaxed">
        At Parkwood Green Dental, we use a specialised whitening formula designed to
        brighten your teeth and enamel without side effects or harm. Our dental
        professionals have years of experience performing safe and successful
        Zoom whitening procedures, helping patients achieve a confident smile.
      </p>

      {/* CTA */}
      <p className="text-gray-700 leading-relaxed font-medium">
        To know more about our same-day Zoom teeth whitening service and to book an
        appointment with our dental professionals, dial{" "}
        <span className="font-bold text-blue-600">(03) 9449 4100</span>.
      </p>
    </div>
  ),
},
{
  id: 10,
  title: "Orthodontics",
  img: image7, 
  discription:"Orthodontics is a specialized branch of dentistry that focuses on diagnosing, preventing, and treating dental and facial irregularities. It primarily deals with the alignment of teeth and jaws to improve both function and aesthetics.",
  details: (
    <div className="space-y-6">
    
     
      <p className="text-gray-700 leading-relaxed">
        Teeth mal-alignment may be genetic, caused by past jaw trauma, tooth
        extraction, or childhood habits such as thumb sucking, dummies, or tongue
        thrusting. Orthodontics (braces) help patients achieve a{" "}
        <span className="font-semibold text-blue-600">beautiful and healthy smile</span>.
      </p>
      <p className="text-gray-700 leading-relaxed">
        Alignment problems usually become noticeable between ages 8–14, when facial
        and jaw growth occurs, making it the ideal time for treatment. Orthodontic
        treatment can also be performed in adults with good dental health, although
        teeth movement may take longer than in children.
      </p>

      {/* Benefits */}
      <h2 className="text-2xl font-semibold text-gray-900">
        Why Orthodontic Treatment Matters
      </h2>
      <ul className="list-disc list-inside space-y-2 text-gray-700">
        <li>
          <strong>Hygiene:</strong> Severely crowded teeth are difficult to clean,
          leading to plaque buildup and gum disease over time.
        </li>
        <li>
          <strong>Decay Prevention:</strong> Proper alignment allows toothbrushes and
          floss to effectively remove bacteria, reducing risk of cavities.
        </li>
        <li>
          <strong>Bite Correction:</strong> Proper alignment ensures biting forces are
          evenly distributed, preventing uneven tooth wear.
        </li>
      </ul>

      {/* Treatment Options */}
      <h2 className="text-2xl font-semibold text-gray-900">
        How Orthodontics Works
      </h2>
      <p className="text-gray-700 leading-relaxed">
        Orthodontic treatment typically involves small metal or tooth-coloured
        ceramic brackets glued to teeth and linked by a thin wire. Braces are
        periodically adjusted to gently move teeth toward the desired position.
        After braces, a clear retainer is worn to stabilise the new teeth position.
      </p>
      <p className="text-gray-700 leading-relaxed">
        Treatment duration usually ranges between{" "}
        <span className="font-semibold">24–30 months</span>, but may vary depending
        on the severity of the case.
      </p>

      {/* Parkwood Approach */}
      <h2 className="text-2xl font-semibold text-gray-900">
        Our Approach at Parkwood Green
      </h2>
      <p className="text-gray-700 leading-relaxed">
        At Parkwood Green Dental, we take pride in thorough patient assessment,
        pre-treatment discussions, and detailed planning. This ensures every patient
        understands their treatment plan and that it suits their specific needs and
        circumstances. For convenience,{" "}
        <span className="font-semibold">payment plans are also available</span>.
      </p>
    </div>
  ),
},
{
  id: 11,
  title: "Dental Crowns",
  img: image9, 
  discription:"A dental crown is a tooth-shaped cap that is placed over a tooth to restore its shape, size, strength, and appearance. Crowns are used to protect weak teeth, restore broken teeth, cover dental implants, and improve the aesthetics of discolored or misshapen teeth.",
  details: (
    <div className="space-y-6">
      {/* Section Header */}
    
      {/* Intro */}
      <p className="text-gray-700 leading-relaxed">
        A crown is a dental restoration that completely encircles a natural tooth,
        restoring it to its natural form. At Parkwood Green Dental, our highly
        reliable dentists offer excellent and affordable dental crown services in
        Hillside.
      </p>

      {/* What is Crown Work */}
      <h2 className="text-2xl font-semibold text-gray-900">What is Dental Crown Work?</h2>
      <p className="text-gray-700 leading-relaxed">
        A dental crown is a permanent restoration that restores the original shape
        and size of a damaged tooth. The cap-like crown covers the tooth and is
        cemented in place, replicating the look and function of your original tooth.
      </p>

      {/* Who Needs Crowns */}
      <h2 className="text-2xl font-semibold text-gray-900">Who Needs a Dental Crown?</h2>
      <ul className="list-disc list-inside space-y-2 text-gray-700">
        <li>People with a weak or cracked tooth</li>
        <li>Patients who need to restore a broken tooth</li>
        <li>Support for a tooth with a large filling</li>
        <li>Covering discolored or misshaped teeth</li>
        <li>Covering a dental implant</li>
        <li>Cosmetic modification</li>
      </ul>

      {/* Types of Crowns */}
      <h2 className="text-2xl font-semibold text-gray-900">Types of Dental Crowns</h2>
      <div className="space-y-4 text-gray-700 leading-relaxed">
        <div>
          <h3 className="text-xl font-semibold text-gray-800">Gold Crowns</h3>
          <p>
            Made of gold alloy, these crowns are durable and usually used for
            posterior teeth. They require minimal preparation and can adapt
            slightly to bite changes over time.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-gray-800">Metal-Porcelain Crowns</h3>
          <p>
            A popular option, combining porcelain with a strong metal substructure.
            They provide both strength and aesthetics, making them widely used.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-gray-800">Full Porcelain Crowns</h3>
          <p>
            The most aesthetic option, closely mimicking the natural shading of
            teeth. They are especially recommended for patients allergic to metal.
          </p>
        </div>
      </div>

      {/* CTA */}
     
    </div>
  ),
},

];

export default servicesData;
