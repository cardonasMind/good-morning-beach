import React from "react";

const Footer = () => (
  <footer className="bg-gray-600 p-8">
    <h1>good morning beach</h1>
    <div className="pt-8 w-1/2 sm:w-4/12 md:w-3/12">
      <div className="text-xs uppercase text-gray-400 font-medium mb-6">
        Navigation
      </div>

      <a href="">What we do</a>
      <a href="">Get Newspapper</a>
      <a href="">Latest News</a>
      <a href="">Services</a>
    </div>

    <div className="mt-2 pt-4 text-center border-t border-yellow-500">
      <p>Made by Diego Cardona, this should be take as humor.</p>
      <p>© 2003-2021, good morning beach</p>
    </div>
  </footer>
);

export default Footer;
