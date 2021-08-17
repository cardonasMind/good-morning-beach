import React from "react";

const Navigation = () => (
  <nav id="navigation" className="py-8 flex gap-4 md:gap-8 justify-center">
    <a
      href="#introductory"
      className="cursor-pointer border-b border-transparent hover:border-black"
    >
      We
    </a>
    <a
      href="#blog"
      className="cursor-pointer border-b border-transparent hover:border-black"
    >
      Online news
    </a>
    <a
      href="#newspapper"
      className="cursor-pointer border-b border-transparent hover:border-black"
    >
      Newspapper
    </a>
    <a
      href="#services"
      className="cursor-pointer border-b border-transparent hover:border-black"
    >
      Services
    </a>
  </nav>
);

export default Navigation;
