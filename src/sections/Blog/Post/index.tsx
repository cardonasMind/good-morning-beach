import React from "react";

const Post = ({ category, title, excerpt }) => (
  <div className="blog-post">
    <p className="text-blue-700">{category}</p>
    <h2 className="text-xl underline py-2">{title}</h2>
    <p>{excerpt}</p>
    <button className="mt-4 py-1 px-2 text-sm bg-gray-100 hover:bg-gray-200">
      Read more
    </button>
  </div>
);

export default Post;
