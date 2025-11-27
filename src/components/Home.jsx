import React from "react";
import profileImg from "../assets/images/profile-img.jpg";
import AboutPreview from "./sections/AboutPreview";
import SkillsSection from "./sections/SkillSection";
import Testimonials from "./sections/Testimonials";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";


const Home = () => {
  return (
    <section className="bg-slate-900 px-1 sm:px-2 py-10 w-full text-gray-50">
  {/* Hero Section */}
  <div className="flex flex-col sm:flex-row items-center justify-center sm:items-start gap-6 shadow-lg px-6 py-8 rounded-2xl bg-slate-800">
    
    {/* Mobile Image */}
    <div className="flex-shrink-0 mb-4 sm:hidden">
      <img
        src={profileImg}
        alt="Profile"
        className="w-32 h-32 rounded-full object-cover shadow-lg ring-4 ring-indigo-500/30"
      />
    </div>

    {/* Text Block */}
    <div className="w-full sm:w-4/5 md:w-3/5 text-center sm:text-left">
      <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 leading-tight">
        I Build High-Converting <br /> E-Commerce & Frontend Experiences
      </h1>

      <p className="text-slate-400 text-base sm:text-lg mb-3">
        <Typewriter
          words={[
            "E-commerce Frontend Developer — React, Next.js, Tailwind",
            "Improving store UX for higher conversions",
            "Building fast, scalable, user-focused interfaces",
          ]}
          loop={true}
          cursor
          cursorStyle="|"
          typeSpeed={60}
          deleteSpeed={40}
          delaySpeed={2000}
        />
      </p>

      <p className="text-cyan-400 text-lg italic mb-6">
        Helping brands turn visitors into loyal customers.
      </p>

      {/* Lead Magnet CTA */}
      <Link
        to="/ecommerce-ux-guide"
        className="text-indigo-400 underline underline-offset-4 hover:text-indigo-300 transition block mb-6"
      >
        Free Guide: 5 UX Mistakes Killing Your Store Sales →
      </Link>

      {/* Buttons */}
      <div className="flex flex-wrap justify-center sm:justify-start gap-3">
        <Link
          to="/projects"
          className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-500 transition"
        >
          View My Work
        </Link>
        <Link
          to="/contact"
          className="bg-cyan-500 text-slate-900 px-6 py-2 rounded-md hover:bg-cyan-400 transition"
        >
          Contact Me
        </Link>
      </div>
    </div>

    {/* Desktop Image */}
    <div className="flex-shrink-0 hidden sm:block">
      <img
        src={profileImg}
        alt="Profile"
        className="w-44 h-44 rounded-full object-cover shadow-lg ring-4 ring-indigo-500/30"
      />
    </div>
  </div>

  {/* Your Existing Sections */}
  <AboutPreview />
  <SkillsSection />
  <Testimonials />
</section>

  );
};

export default Home;
