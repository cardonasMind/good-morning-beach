import React from "react";

import Post from "./Post";

const Blog = ({ latestsPosts }) => {
  console.log(latestsPosts);

  return (
    <section id="blog" className="my-40 mx-8">
      <div className="flex">
        <h1 className="text-4xl bg-yellow-100">Online news</h1>
        <p className="ml-10">
          Read what's currently happening. <br />
          We write until 9:00 am.
        </p>
      </div>

      <div
        id="latest-posts"
        className="mt-14 grid sm:grid-cols-2 md:grid-cols-3 gap-14"
      >
        {/*latestsPosts.map((post) => (
          <Post category={post.id} title={post.title} excerpt={post.body} />
        ))*/}
      </div>
    </section>
  );
};

export default Blog;
