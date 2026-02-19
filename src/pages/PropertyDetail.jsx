"use client";

import React, { useEffect, useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { supabase } from "../config/supabaseClient";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { IoIosArrowRoundBack } from "react-icons/io";
import { assets } from "../assets/assets";
import { Calendar, Home, MessageCircle } from "lucide-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { FiX } from "react-icons/fi";


const PropertyDetail = () => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const [agent, setAgent] = useState(null);
  const [loadingAgent, setLoadingAgent] = useState(true);

  const [showModal, setShowModal] = useState(false);

  const property = location.state?.property;
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = property?.images || [];
  useEffect(() => {
    const fetchAgent = async () => {
      if (!property?.agent_id) return;

      setLoadingAgent(true);

      const { data, error } = await supabase
        .from("agents")
        .select("*")
        .eq("id", property.agent_id)
        .single();

      if (error) {
        console.error("Agent fetch error:", error.message);
      } else {
        setAgent(data);
      }

      setLoadingAgent(false);
    };

    fetchAgent();
  }, [property]);
  const nextImage = () => {
    setCurrentIndex((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };
  const handleContactClick = () => {
    navigate(`/agents/${agent.id}`, {
      state: { agent, scrollToContact: true },
    });
  };
  return (
    <> <Navbar />
      <div className=" min-h-screen py-10 px-6 lg:px-20">

        <div className="border-b border-gray-200 py-7">
          <div
            onClick={() => navigate(-1)}
            className=" mx-auto flex items-center gap-2  cursor-pointer"
          >
            <IoIosArrowRoundBack className="text-2xl text-[#4B5563]" />
            <span className="text-sm font-medium text-[#4B5563]">Back to Listings</span>
          </div>
        </div>


        {/* Image Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          <div className="relative lg:col-span-2">
            <img
              src={images[currentIndex]}
              alt={property.title}
              className="w-full h-[250px] sm:h-[350px] lg:h-[400px] object-cover rounded-2xl"
            />

            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md"
            >
              <ChevronLeft size={20} />
            </button>

            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md"
            >
              <ChevronRight size={20} />
            </button>
          </div>


          {/* Gallery */}
          <div className="grid grid-cols-2 gap-3">
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                onClick={() => setCurrentIndex(index)}
                className={`w-full h-[177px] object-cover rounded-xl cursor-pointer border-2 ${currentIndex === index
                  ? "border-[#5856D6]"
                  : "border-transparent"
                  }`}
                alt="gallery"
              />
            ))}
          </div>

        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1  lg:grid-cols-3 gap-8 my-5">

          {/* Left Content */}
          <div className="lg:col-span-2 space-y-6">
            <div className="p-7 border border-[#F3F4F6] rounded-xl shadow-md">  {/* Title + Price */}
              <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold text-[#111827]">
                  {property.title}
                </h1>
                <span className="text-xl font-bold text-[#5856D6]">
                  ${Number(property.price).toLocaleString()}
                </span>

              </div>
              <div className="flex items-center justify-between "><p className="text-sm text-gray-500 flex items-center gap-1 mt-1">
                <span>
                  <img
                    src={assets.location_icon}
                    className="w-4 h-4 text-[#475569] filter brightness-0"
                    alt="Location"
                  />
                </span>{" "}
                {property.city}
              </p>
                <p className="text-[#6B7280] text-sm">${property.sqft}/sq ft
                </p></div>

              {/* Meta */}
              {/* Meta */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mt-6">

                {/* Bedrooms */}
                <div className="flex items-center gap-4 bg-gray-50 p-4 rounded-xl">
                  <div className="bg-indigo-100 text-indigo-600 p-3 rounded-lg">
                    <img src="/bed1.svg.svg" className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-base font-bold text-[#111827]">
                      {property.bedrooms}
                    </p>
                    <p className="text-xs text-gray-500">Bedrooms</p>
                  </div>
                </div>

                {/* Bathrooms */}
                <div className="flex items-center gap-4 bg-gray-50 p-4 rounded-xl">
                  <div className="bg-indigo-100 text-indigo-600 p-3 rounded-lg">
                    <img src="/bath1.svg.svg" className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-base font-bold text-[#111827]">
                      {property.bathrooms}
                    </p>
                    <p className="text-xs text-gray-500">Bathrooms</p>
                  </div>
                </div>

                {/* Living Area */}
                <div className="flex items-center gap-4 bg-gray-50 p-4 rounded-xl">
                  <div className="bg-indigo-100 text-indigo-600 p-3 rounded-lg">
                    <img src="/sqare1.svg.svg" className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-base font-bold text-[#111827]">
                      {property.sqft} sq ft
                    </p>
                    <p className="text-xs text-gray-500">Living Area</p>
                  </div>
                </div>

                {/* Property Type */}
                <div className="flex items-center gap-4 bg-gray-50 p-4 rounded-xl">
                  <div className="bg-indigo-100 text-indigo-600 p-3 rounded-lg">
                    <Home size={18} />
                  </div>
                  <div>
                    <p className="text-base font-bold text-[#111827]">
                      {property.category}
                    </p>
                    <p className="text-xs text-gray-500">Property Type</p>
                  </div>
                </div>

              </div>
            </div>

            <div className="bg-white p-6 border border-[#F3F4F6] rounded-xl shadow-md">
              <h2 className="font-bold text-[#111827] mb-3 text-xl">
                About This Property
              </h2>
              <p className="text-[#4B5563] text-md leading-relaxed">
                {property.description || "No description available."}
              </p>
            </div>
            <div className="bg-white p-6 border border-[#F3F4F6] rounded-xl shadow-md">
              <h2 className="font-bold text-[#111827] mb-3 text-xl">
                Location
              </h2>
              <p className="text-[#4B5563] text-md leading-relaxed">
                <img

                  src={assets.google_map}
                  className="w-full object-cover rounded-xl"
                  alt="gallery"
                />
              </p>
            </div>

          </div>


          {/* Agent Card */}
          <div className="bg-white p-6 border border-[#F3F4F6] rounded-xl shadow-md space-y-4 h-fit">

            <div className="flex items-center gap-4">
              <img
                src={agent?.photo_url || "https://i.pravatar.cc/100"}
                className="w-14 h-14 rounded-full"
                alt="agent"
              />
              <div>
                <p className="font-semibold">
                  {loadingAgent ? "Loading..." : agent?.full_name || "No Agent Assigned"}
                </p>
                <p className="text-xs text-gray-500">
                  {agent?.role || "REALTOR®"}
                </p>
              </div>
            </div>

            {/* Phone */}
            <div>
              <a
                href={agent?.phone ? `tel:${agent.phone}` : "#"}
                className="flex items-center gap-3 hover:text-[#5856D6]"
              >
                <span className="w-8 h-8 flex items-center justify-center">
                  <img
                    src={assets.phone_icon}
                    alt="Phone"
                    className="w-4 h-4 brightness-0"
                  />
                </span>
                {agent?.phone || "N/A"}
              </a>

              {/* Email */}
              <a
                href={agent?.email ? `mailto:${agent.email}` : "#"}
                className="flex items-center gap-3 hover:text-[#5856D6]"
              >
                <span className="w-8 h-8 flex items-center justify-center">
                  <img
                    src={assets.email_icon}
                    alt="Email"
                    className="w-4 h-4 brightness-0"
                  />
                </span>
                {agent?.email || "N/A"}
              </a>
            </div>

            {/* Call Button */}
            <a
              href={agent?.phone ? `tel:${agent.phone}` : "#"}
              className="w-full bg-[#5856D6] text-white py-3 rounded-lg text-sm font-semibold flex items-center justify-center gap-2"
            >
              <img
                src={assets.phone_icon}
                alt="Phone"
                className="w-4 h-4 brightness-0 invert"
              />
              Call Agent
            </a>

            {/* Send Email Button */}
            <button
              onClick={handleContactClick}
              className="w-full border border-[#5856D6] text-[#5856D6] py-3 rounded-lg text-sm font-semibold flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4 text-[#4338CA]" />
              Send Message
            </button>


            {/* Schedule Tour (Optional WhatsApp Example) */}
            <button onClick={() => setShowModal(true)} className="w-full bg-[#E0E7FF] text-[#5856D6] py-3 rounded-lg text-sm font-semibold flex items-center justify-center gap-2">
              <Calendar className="w-4 h-4 text-[#4338CA]" />
              Schedule Tour
            </button>

          </div>



        </div>
        {showModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm px-4">

            <div className="bg-white w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-2xl shadow-xl p-6 sm:p-8 relative">

              {/* Close Button */}
              <button
                onClick={() => setShowModal(false)}
                className="absolute right-4 top-4 text-gray-500 hover:text-black"
              >
                <FiX size={20} />
              </button>

              <h2 className="text-lg sm:text-xl font-bold text-[#111827] mb-6">
                Schedule a Visit
              </h2>

              <form className="space-y-5">

                {/* Date + Time */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-semibold text-gray-600">
                      Date
                    </label>
                    <input
                      type="date"
                      className="mt-1 w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-[#5856D6] outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-semibold text-gray-600">
                      Time
                    </label>
                    <select className="mt-1 w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-[#5856D6] outline-none">
                      <option>Morning</option>
                      <option>Afternoon</option>
                      <option>Evening</option>
                    </select>
                  </div>
                </div>

                {/* Full Name */}
                <div>
                  <label className="text-sm font-semibold text-gray-600">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="mt-1 w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-[#5856D6] outline-none"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="text-sm font-semibold text-gray-600">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    required
                    className="mt-1 w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-[#5856D6] outline-none"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="text-sm font-semibold text-gray-600">
                    Phone
                  </label>
                  <input
                    type="tel"
                    placeholder="(555) 123-4567"
                    className="mt-1 w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-[#5856D6] outline-none"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="text-sm font-semibold text-gray-600">
                    Message (Optional)
                  </label>
                  <textarea
                    rows="3"
                    placeholder="I'm interested in this property..."
                    className="mt-1 w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-[#5856D6] outline-none"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full bg-[#5856D6] hover:bg-[#4745c4] transition text-white py-3 rounded-lg font-medium"
                >
                  Request Tour
                </button>

              </form>
            </div>
          </div>
        )}

      </div>
      <Footer />
    </>

  );
};

export default PropertyDetail;
