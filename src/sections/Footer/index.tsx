import React from "react";

const Footer = () => (
  <footer className="mx-8 divide-y divide-gray-400">
    <img
      className="w-1/6"
      src="/static/images/good-morning-beach-logo.png"
      alt="good-morning-beach-logo"
    />

    <div className="footer-end flex gap-4 flex-wrap justify-center py-4 px-8 text-xs">
      <p>© 2021 Good Morning Beach</p>
      <p>Contact Us</p>
      <p>Accessibility</p>
      <p>Work with us</p>
      <p>Privacy Policy</p>
      <p>Terms of Service</p>
      <p>Site Map</p>
      <p>Help</p>
      <p>Subscriptions</p>
    </div>
  </footer>
);

/*const Footer = () => (
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
);*/

export default Footer;
