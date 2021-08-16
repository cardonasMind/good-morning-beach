import React from "react";

const Post = () => (
  <div className="blog-post">
    <p className="text-blue-700">Categoría</p>
    <h2 className="text-xl underline py-2">
      Título del post, este título es un poco largo pero no tanto
    </h2>
    <p>
      Esto sería el extracto del blog, el cuales un input en la parte de
      agregaruhn nuevo post. Idealmente seríaasí de largo y ya vendría.
    </p>
    <button className="mt-4 py-1 px-2 text-sm bg-gray-100 hover:bg-gray-200">
      Read more
    </button>
  </div>
);

export default Post;
