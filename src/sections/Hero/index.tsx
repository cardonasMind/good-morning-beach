import React from "react";

const Hero = () => (
  <div id="hero" className="">
    <img
      className="w-1/6 mx-auto"
      src="/static/images/good-morning-beach-logo.png"
      alt="good-morning-beach-logo"
    />

    <div id="hero-content" className="display flex">
      <div className="block">
        <div className="text-5xl font-extrabold transform rotate-90">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-red-600">
            Hot
          </span>
        </div>
      </div>
      <div className="bg-hero-background bg-center w-full h-96"></div>
    </div>
  </div>
);

export default Hero;
