import blog1 from "../../assets/images/blog-3.jpg";
import blog2 from "../../assets/images/blog-1.jpg";
import blog3 from "../../assets/images/blog-2.jpg";
import blog4 from "../../assets/images/Comprehensive.png";
import blog5 from "../../assets/images/about-banner.png";
import blog6 from "../../assets/images/LAUGHING-GAS.png"; 
import blog7 from "../../assets/images/Whitening-Zoom.jpg";
import blog8 from "../../assets/images/hero-banner.png";

import Blog from "./Blog";

function Blogs() {
  const blogs = [
  {
    "id": 1,
    img: blog1,
    "title": "The Importance of Regular Dental Visits",
    "description": "Routine checkups help prevent cavities, gum disease, and oral infections. Early detection saves money and protects your overall health."
  },
  {
    "id": 2,
    img: blog2,
    "title": "Brushing & Flossing: The Right Way",
    "description": "Most people brush daily, but not always correctly. Proper brushing and flossing techniques keep teeth clean and gums healthy."
  },
  {
    "id": 3,
    img: blog3,
    "title": "Teeth Whitening: Myths vs. Facts",
    "description": "Over-the-counter products often promise quick results, but not all are safe. Professional whitening is safer and offers lasting brightness."
  },
  {
    "id": 4,
    img: blog4,
    "title": "How Diet Affects Your Smile",
    "description": "Sugary foods and drinks damage enamel, while crunchy veggies and dairy protect it. A balanced diet is the secret to strong teeth."
  },
  {
    "id": 5,
    img: blog5,
    "title": "Understanding Gum Health",
    "description": "Healthy gums are the foundation of a strong smile. Learn how to spot early signs of gum disease before it becomes serious."
  },
  {
    "id": 6,
    img: blog6,
    "title": "Dental Care for Kids",
    "description": "Starting early helps children avoid cavities and fear of dentists. Simple habits and fun routines make oral care easy for kids."
  },
  {
    "id": 7,
    img: blog7,
    "title": "Dental Emergencies: What You Should Know",
    "description": "A knocked-out or broken tooth needs quick action. Knowing the first steps can make the difference in saving your tooth."
  },
  {
    "id": 8,
    img: blog8,
    "title": "Pediatric Dentistry: Caring for Little Smiles",
    "description": "Early dental visits set the stage for a lifetime of good oral health. Learn how to make dental care fun for kids."
  },
  {
    "id": 9,
    img: blog1,
    "title": "Stress & Your Oral Health",
    "description": "Stress often leads to teeth grinding, jaw pain, and even gum issues. Relaxation techniques can protect both your smile and overall health."
  },
  {
    "id": 9,
    img: blog6,
    "title": "Crowns, Bridges & Implants Explained",
    "description": "Missing or damaged teeth have different treatment options. Crowns restore strength, bridges replace gaps, and implants act like natural teeth."
  },
  {
    "id": 10,
    img: blog3,
    "title": "Latest Innovations in Dentistry",
    "description": "Modern dentistry uses digital tools, painless treatments, and advanced technology. Patients enjoy faster, safer, and more comfortable care."
  },
  ];
  return (
    <section>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-5">
        {blogs.map((blog) => (
          <Blog key={blog._id} blog={blog} />
        ))}
      </div>
    </section>
  );
}

export default Blogs;
