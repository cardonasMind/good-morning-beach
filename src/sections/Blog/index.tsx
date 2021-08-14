import React from "react";

import Post from "./Post";

const Blog = () => (
  <div id="blog" className="">
    <h1>Online news</h1>
    <p>See what´s happened last night. We write until 9:00 am.</p>

    <div id="latest-posts" className="m-8 flex space-x-4">
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  </div>
);

export default Blog;
