import React, { useState } from "react";

import { FiMapPin } from "react-icons/fi";

const cities = [
  "Asheville",
  "Aberdeen",
  "Advance",
  "Ahoskie",
  "Aiken",
  "Albemarle",
  "Alexander",
  "Allendale",
  "Almond",
  "Anderson",
  "Andrews",
  "Angier",
  "Ansonville",
  "Apex",
  "Archdale",
  "Arden",
];

const AreasWeCover = () => {
  const [showAll, setShowAll] = useState(false);

  const visibleCities = showAll ? cities : cities.slice(0, 14);

  return (
    <section className="w-full bg-[#E5E7EB] py-10 mt-10 mb-17 border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-4 text-center">
        {/* Heading */}
        <h2 className="text-lg font-semibold text-[#111827] mb-6">
          Areas We Cover
        </h2>

        {/* Cities */}
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-4 text-sm text-gray-500">
          {visibleCities.map((city, index) => (
            <div
              key={index}
              className="flex items-center gap-1 text-[#6B7280] cursor-pointer"
            >
              <FiMapPin size={14} className="text-[#6B7280]" />
              <span>{city}</span>
            </div>
          ))}

          {/* Show More */}
          {!showAll && (
            <button
              onClick={() => setShowAll(true)}
              className="text-blue-500 hover:underline font-medium"
            >
              Show More...
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default AreasWeCover;
