import React from "react";

const Newspapper = () => (
  <div id="newspapper" className="bg-red-400 p-4 text-white">
    <h1>
      Receive our newspaper every morning at 6:00 amat your home or office´s
      door.
    </h1>
    <span>*it includes news from 9:00 pmto 5:00 am</span>

    <div id="newspapper-form">
      <form className="flex space-x-4 rounded sm:flex-row">
        <input
          className="py-2 px-4 border-black border-2 focus:border-blue"
          type="email"
          name="email"
          placeholder="Enter your e-mail"
        />
        <button className="px-8 bg-blue-600 text-gray-100 hover:bg-blue-700">
          Join me!
        </button>
      </form>

      <p>Santa Claus aproves</p>
    </div>
  </div>
);

export default Newspapper;
