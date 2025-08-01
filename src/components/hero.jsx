
import React from 'react';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20 px-6 md:px-12 text-center rounded-lg mx-4 mt-8 shadow-xl">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
          Your One-Stop Solution for Professional Services
        </h2>
        <p className="text-lg md:text-xl mb-8 opacity-90">
          Whether you need a skilled tradesperson, an experienced tutor, or a helping hand, "Find Your Services" connects you with trusted professionals and opportunities.
        </p>
        <button className="bg-white text-blue-700 hover:bg-gray-100 font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default Hero;

