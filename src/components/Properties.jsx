"use client";

import React, { useEffect, useState } from "react";
import Button from "./Button";
import { motion } from "framer-motion";

import SaleIcon from "/Sale.svg";
import VillasIcon from "/villas.svg";
import ApartmentsIcon from "/appartments.svg";
import HousesIcon from "/houses.svg";
import CondosIcon from "/condos.svg";
import RetailIcon from "/retail.svg";

import { supabase } from "../config/supabaseClient";

const tabs = [
  { id: "sale", label: "For Sale", icon: SaleIcon },
  { id: "villas", label: "Villas", icon: VillasIcon },
  { id: "apartments", label: "Apartments", icon: ApartmentsIcon },
  { id: "houses", label: "Houses", icon: HousesIcon },
  { id: "condos", label: "Condos", icon: CondosIcon },
  { id: "retail", label: "Retail", icon: RetailIcon },
];

const Properties = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [active, setActive] = useState("sale");

  // Fetch properties from Supabase
  useEffect(() => {
    const fetchProperties = async () => {
      const { data, error } = await supabase
        .from("properties")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        console.error("Error fetching properties:", error);
      } else {
        setProperties(data);
      }
      setLoading(false);
    };

    fetchProperties();
  }, []);

 // Filter properties based on active tab
const filteredProperties = properties.filter((item) => {
  if (!item.category) return false; // skip if no category

  // Normalize categories: lowercase, split, trim
  const categories = item.category
    .toLowerCase()
    .split(",")
    .map((c) => c.trim());

  // Normalize active tab
  const activeTab = active.toLowerCase();

  // Check if any category matches active tab (allow partial match for "sale" tab)
  if (activeTab === "sale") {
    return categories.some((c) => c.includes("sale")); // matches "For Sale" or "sale"
  }

  // For other tabs, match exact tab name
  return categories.includes(activeTab);
});


  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

 

  return (
    <section className="bg-[#F9FAFB] w-full py-16 sm:py-20">
      <div className="container mx-auto px-6 sm:px-10 lg:px-32">
        {/* Header */}
        <div className="w-full flex flex-col items-center mb-10">
          <span className="text-sm text-[#6D6BDB] bg-[#6D6BDB]/10 px-4 py-1 rounded-full mb-4 font-medium">
            Featured Properties
          </span>

          <h2 className="text-3xl font-semibold text-black mb-8">
            Our Featured Properties
          </h2>

          {/* Tabs */}
          <div className="w-full overflow-x-auto">
            <div className="flex justify-center gap-3 min-w-max px-4">
              {tabs.map((tab) => {
                const isActive = active === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActive(tab.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-md transition
                      ${isActive ? "bg-[#5856D6] text-white" : "bg-[#F3F4F6] text-gray-500"}`}
                  >
                    <img
                      src={tab.icon}
                      className={`w-4 h-4 ${isActive ? "brightness-0 invert" : ""}`}
                    />
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Properties Grid */}
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProperties.map((item, index) => (
            <motion.div
              key={item.id}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition"
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Image */}
              <div
                className="h-[220px] sm:h-[250px] bg-cover bg-center p-4 flex justify-between items-start"
                style={{ backgroundImage: `url(${item.images})` }}
              >
                <div className="flex gap-2">
                  <Button
                    text="Featured"
                    className="bg-white !text-[#030E0F] text-xs !px-4 !py-1 rounded"
                  />
                  <Button
                    text={item.category}
                    className="bg-white !text-[#030E0F] text-xs !px-4 !py-1 rounded"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="px-5 py-4 flex flex-col gap-2">
                <h3 className="text-lg font-semibold text-[#030E0F]">{item.title}</h3>
                <p className="text-sm text-[#252728]">{item.city}</p>

                {/* Meta */}
                <div className="flex flex-wrap gap-3 mt-3">
                  <div className="flex items-center gap-2 border px-3 py-1 rounded-xl text-sm">
                    <img src="/bed1.svg.svg" className="w-4 h-4" />
                    {item.bedrooms || "-"}
                  </div>
                  <div className="flex items-center gap-2 border px-3 py-1 rounded-xl text-sm">
                    <img src="/bath1.svg.svg" className="w-4 h-4" />
                    {item.bathrooms || "-"}
                  </div>
                  <div className="flex items-center gap-2 border px-3 py-1 rounded-xl text-sm">
                    <img src="/sqare1.svg.svg" className="w-4 h-4" />
                    {item.sqft || "-"}
                  </div>
                </div>

                <hr className="my-4 border-[#0D0F181A]" />

                <Button
                  text={`$${Number(item.price).toLocaleString()}`}
                  className="bg-[#030E0F] text-white !px-6 !py-2 rounded-lg w-fit"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Properties;
