import React from "react";

const Blog = () => (
  <div id="blog" className="m-8">
    <div className="flex">
      <h1 className="text-xl">Online news</h1>
      <p className="ml-10">
        Read what's currently happening. <br />
        We write until 9:00 am.
      </p>
    </div>

    <div id="latest-posts" className="my-4 flex divide-x divide-gray-500">
      <div>
        <p className="text-blue-700">Categoría</p>
        <h2 className="text-lg py-2">
          Título del post, este título es un poco largo pero no tanto
        </h2>
        <p>
          Esto sería el extracto del blog, el cuales un input en la parte de
          agregaruhn nuevo post. Idealmente seríaasí de largo y ya vendría.
        </p>
        <button className="py-2 border-b-4 border-gray-400">Read more</button>
      </div>

      <div>
        <p className="text-blue-700">Categoría</p>
        <h2 className="text-lg py-2">
          Título del post, este título es un poco largo pero no tanto
        </h2>
        <p>
          Esto sería el extracto del blog, el cuales un input en la parte de
          agregaruhn nuevo post. Idealmente seríaasí de largo y ya vendría.
        </p>
        <button className="py-2 border-b-4 border-gray-400">Read more</button>
      </div>

      <div>
        <p className="text-blue-700">Categoría</p>
        <h2 className="text-lg py-2">
          Título del post, este título es un poco largo pero no tanto
        </h2>
        <p>
          Esto sería el extracto del blog, el cuales un input en la parte de
          agregaruhn nuevo post. Idealmente seríaasí de largo y ya vendría.
        </p>
        <button className="py-2 border-b-4 border-gray-400">Read more</button>
      </div>
    </div>
  </div>
);

export default Blog;
