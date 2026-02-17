import React from "react";
import { useNavigate } from "react-router-dom";
import FilterBar from "./FilterBar";
import { motion } from "framer-motion";
import { RiArrowRightUpFill } from "react-icons/ri";

const Header = () => {
  const navigate = useNavigate();

  return (
    <div
      className="min-h-screen relative bg-cover bg-center flex items-center w-full mb-4"
      style={{ backgroundImage: "url('/hero-image.png')" }}
    >
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="container mt-12 mx-auto text-center px-6 py-4 md:px-20 lg:px-32"
      >
        {/* Badge */}
        <h3 className="inline-block text-sm sm:text-base md:text-xl opacity-90 px-4 sm:px-6 py-2 sm:py-3 mb-4 rounded-xl border border-white/30 bg-white/10 backdrop-blur-md text-white">
          Discover Your Ideal Property Today!
        </h3>

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white leading-tight">
          Find Your Dream Home
        </h2>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
          <button
            onClick={() => navigate("/")}
            className="flex cursor-pointer items-center text-sm md:text-md justify-center gap-2 bg-[#5856D6] text-white px-6 py-3 rounded font-medium hover:scale-105 transition-transform"
          >
            Find Your Dream Home Now
             <RiArrowRightUpFill className="text-2xl" />
          </button>

        
        </div>

        {/* FilterBar */}
        <div className="mt-10">
          <FilterBar />
        </div>
      </motion.div>
    </div>
  );
};

export default Header;
