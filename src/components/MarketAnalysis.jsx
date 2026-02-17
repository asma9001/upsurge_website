import React from "react";
import { FiTrendingUp, FiUsers, FiMap, FiLayers } from "react-icons/fi";
import { assets } from "../assets/assets";

const MarketAnalysis = () => {
  return (
    <section className="w-full bg-white py-12">
      <div className="max-w-6xl mx-auto px-4">

        {/* Section Header */}
        <div className="flex items-center gap-3 mb-6">
          <span className="w-1 h-6 bg-[#5856D6] rounded-full" />
          <h2 className="text-lg font-bold text-[#0F172A]">
            Market Analysis
          </h2>
        </div>

        {/* Content */}
   <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] ">

          {/* LEFT CARD */}
          <div className="bg-[#E2E8F0]  grid-cols-3  border-l border-[#E5E7EB]  p-6 shadow-sm">
            <h3 className="text-lg font-bold text-[#0F172A] mb-3">
              Buyer's or Seller's Market?
            </h3>

            <p className="text-sm text-[#475569] leading-relaxed mb-6">
              The law of supply and demand dictates the equilibrium price of a
              property. We keep a pulse on buyer interest and how that interest
              compares to the areas around you.
            </p>

            <div className="space-y-4">
              {/* Item 1 */}
              <div className="flex items-start gap-3">
                <span className="w-9 h-9 flex items-center justify-center rounded-lg bg-[#FFF3EB] text-[#5856D6]">
                  <FiTrendingUp />
                </span>
                <div>
                  <p className="text-sm font-medium text-[#0F172A]">
                    Market Trends
                  </p>
                  <p className="text-xs text-[#64748B]">
                    Real-time analysis of local price movements
                  </p>
                </div>
              </div>

              {/* Item 2 */}
              <div className="flex items-start gap-3">
                  <span className="w-9 h-9 flex items-center justify-center rounded-lg bg-[#FFF3EB] text-[#5856D6]">
                  <FiUsers />
                </span>
                <div>
                  <p className="text-sm font-medium text-[#0F172A]">
                    Buyer Interest
                  </p>
                  <p className="text-xs text-[#64748B]">
                    Active search volume in your specific area
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT MAP */}
          <div className=" grid-cols-9 border border-[#E5E7EB]">
       
            <img
              src={assets.google_map}
              alt="Map"
              className=""
            />

            {/* Map Controls */}
            {/* <div className="absolute bottom-4 right-4 flex gap-2 bg-white shadow-md rounded-lg p-1">
              <button className="flex items-center gap-1 px-3 py-1 text-sm rounded-md bg-indigo-600 text-white">
                <FiMap className="text-sm" />
                Map
              </button>
              <button className="flex items-center gap-1 px-3 py-1 text-sm rounded-md text-[#475569] hover:bg-gray-100">
                <FiLayers className="text-sm" />
                Satellite
              </button>
            </div> */}
          </div>

        </div>
      </div>
    </section>
  );
};

export default MarketAnalysis;
