import React from "react";

const Services = () => (
  <section id="services" className="mx-8">
    <h1 className="text-4xl text-center">Services</h1>

    <div className="my-8 grid md:grid-cols-2 gap-8">
      <div className="bg-gradient-to-b from-yellow-200 to-yellow-600 p-4 rounded-lg">
        <h2 className="text-xl font-bold">Be discovered</h2>
        <p className="mt-4">
          At Good Morning Beach we will write special articles about what you
          promote/your business/your interests. We dont care about our readers
          so we write to profit, not to serve.
        </p>
      </div>
      <div className="bg-gradient-to-b from-blue-200 to-blue-600 p-4 rounded-lg">
        <h2 className="text-xl font-bold">Fake News on demand</h2>
        <p className="mt-4">
          We convince others to belive in your ideas, who cares about theirs.
          With a Good reputation we can mold our readers perception, ¿who knows
          what is truth when much articles and people say the same in a
          different way?
        </p>
      </div>
    </div>
  </section>
);

export default Services;
