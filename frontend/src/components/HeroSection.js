import React from 'react';
import '../components/herosection.css';

function HeroSection() {
  return (
    <section className="text-center py-16 px-4 bg-gradient-to-br from-purple-100 to-white">
      <h2 className="text-4xl font-extrabold text-purple-600">AI-Driven <span className="text-black">marketing</span></h2>
      <p className="text-gray-600 max-w-xl mx-auto mt-4">
        Discover AI tools to analyze insights and optimize marketing performance like never before.
      </p>
      <div className="mt-6 space-x-4">
        <button className="bg-purple-600 text-white px-6 py-2 rounded-xl">Get Started</button>
        <button className="text-purple-600 border border-purple-600 px-6 py-2 rounded-xl">Learn More</button>
      </div>
      <img src="/images/robot-illustration.png" alt="AI Bot" className="mx-auto mt-8 w-64" />
    </section>
  );
}

export default HeroSection;