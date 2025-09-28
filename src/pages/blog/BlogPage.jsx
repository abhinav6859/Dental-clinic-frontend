import React from "react";
import BlogBanner from "./BlogBanner";
import Blogs from "../home/Blogs";
import Blog2 from "./Blogs";
import LatestPosts from "./LatestPosts";
import Tags from "./Tags";

const BlogPage = () => {
  return (
    <section>
      <BlogBanner />
      <div className="container mx-auto px-5 pt-16 pb-8">
        <div className="md:flex gap-5">
          <div className="w-full md:w-[70%]">
            <Blogs />
            <Blog2 />
            <div className="flex justify-center items-center mt-10">
              {/* <div className="btn-group gap-x-2">
                <button className="btn btn-md btn-secondary">«</button>
                <button className="btn btn-md btn-accent">2</button>
                <button className="btn btn-md btn-secondary">3</button>
                <button className="btn btn-md btn-secondary">»</button>
              </div> */}
            </div>
          </div>
          <div className="w-full md:w-[30%]">
          
            <LatestPosts />
            <Tags />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogPage;
