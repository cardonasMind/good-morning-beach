import React from "react";

const Footer = () => (
  <footer className="mt-20 mx-8 divide-y divide-gray-400">
    <div className="flex flex-col md:flex-row md:gap-20 mb-8">
      <img
        className="w-1/3 md:w-1/6"
        src="/static/images/good-morning-beach-logo.png"
        alt="good-morning-beach-logo"
      />

      <div className="mt-20">
        <b className="mb-4">News</b>

        <p className="cursor-pointer border-b border-transparent hover:border-black">
          World
        </p>
        <p className="cursor-pointer border-b border-transparent hover:border-black">
          Science
        </p>
        <p className="cursor-pointer border-b border-transparent hover:border-black">
          Technology
        </p>
        <p className="cursor-pointer border-b border-transparent hover:border-black">
          Travel
        </p>
      </div>

      <div className="mt-20">
        <b className="mb-4">Navigation</b>

        <p className="cursor-pointer border-b border-transparent hover:border-black">
          We
        </p>
        <p className="cursor-pointer border-b border-transparent hover:border-black">
          Home/Office delivery
        </p>
        <p className="cursor-pointer border-b border-transparent hover:border-black">
          Services
        </p>
      </div>
    </div>

    <div
      id="footer-end"
      className="flex gap-4 flex-wrap justify-center py-4 px-8 text-xs"
    >
      <p>© 2021 Good Morning Beach</p>
      <p className="cursor-pointer border-b border-transparent hover:border-black">
        Contact Us
      </p>
      <p className="cursor-pointer border-b border-transparent hover:border-black">
        Accessibility
      </p>
      <p className="cursor-pointer border-b border-transparent hover:border-black">
        Work with us
      </p>
      <p className="cursor-pointer border-b border-transparent hover:border-black">
        Privacy Policy
      </p>
      <p className="cursor-pointer border-b border-transparent hover:border-black">
        Terms of Service
      </p>
      <p className="cursor-pointer border-b border-transparent hover:border-black">
        Site Map
      </p>
      <p className="cursor-pointer border-b border-transparent hover:border-black">
        Help
      </p>
      <p className="cursor-pointer border-b border-transparent hover:border-black">
        Subscriptions
      </p>
    </div>
  </footer>
);

export default Footer;
