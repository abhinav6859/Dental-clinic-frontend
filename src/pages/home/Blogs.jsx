import blog1 from "../../assets/images/blog-3.jpg";
import blog2 from "../../assets/images/blog-1.jpg";
import blog3 from "../../assets/images/blog-2.jpg";
import Blog from "./Blog";
import { Link } from "react-router-dom";

function Blogs() {
  const blogs = [
    {
      _id: 1,
      title: "Why Regular Dental Checkups Matter.",
      description:
        "Regular dental checkups are essential for maintaining optimal oral health. They allow for the early detection of potential issues, ensuring timely intervention and treatment.",
      img: blog1,
    },
    {
      _id: 2,
      title: "5 Simple Tips for Healthy Teeth at Home.",
      description:
        "1. Brush twice a day with fluoride toothpaste.\n2. Floss daily to remove plaque between teeth.\n3. Limit sugary snacks and drinks.\n4. Visit your dentist regularly for checkups.\n5. Consider dental sealants for added protection.",
      img: blog2,
    },
    {
      _id: 3,
      title: "Safe Ways to Whiten Your Smile.",
      description:
        "There are several safe methods to whiten your teeth, including:\n1. Professional dental cleanings.\n2. At-home whitening kits from your dentist.\n3. Whitening toothpaste with mild abrasives.\n4. Avoiding stain-causing foods and drinks.",
      img: blog3,
    },
  ];
  return (
    <section className="container mx-auto px-5 pt-16 pb-16">
      <div className="text-center mb-3 md:mb-8 lg:mb-16">
        <p className="text-base md:text-xl lg:text-2xl font-bold uppercase text-primary mb-1 md:mb-3 lg:mb-4">
          OUR BLOG
        </p>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
          Latest Blog & News
        </h1>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog) => (
          <Blog key={blog._id} blog={blog} />
        ))}
        <button className="btn btn-md btn-secondary mt-8 mx-auto block">
          <Link to="/blogs"> More Blogs</Link>
        </button>
      </div>
    </section>
  );
}

export default Blogs;
