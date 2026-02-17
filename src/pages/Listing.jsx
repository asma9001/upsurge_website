import React, { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom"; // <--- import this
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Button from "../components/Button";
import { supabase } from "../config/supabaseClient";
import { IoIosArrowRoundBack } from "react-icons/io";
const PropertyCard = ({ property }) => (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition">
        <div
            className="h-[200px] sm:h-[240px] bg-cover bg-center p-4 flex justify-between items-start"
            style={{ backgroundImage: `url(${property.images})` }}
        >
            <div className="flex gap-2">
                {property.featured && (
                    <Button
                        text="Featured"
                        className="bg-white !text-[#030E0F] text-xs !px-4 !py-1 rounded"
                    />
                )}
                {property.category && (
                    <Button
                        text={property.category}
                        className="bg-white !text-[#030E0F] text-xs !px-4 !py-1 rounded"
                    />
                )}
            </div>
        </div>

        <div className="px-5 py-4 flex flex-col gap-2">
            <h3 className="text-sm font-semibold text-[#030E0F]">{property.title}</h3>
            <p className="text-sm text-[#252728]">{property.city}</p>

            <div className="flex  gap-2 mt-2">
                <div className="flex items-center gap-2 border px-3 py-1 rounded-xl text-sm">
                    <img src="/bed1.svg.svg" className="w-4 h-4" />
                    x{property.bedrooms || "-"}
                </div>
                <div className="flex items-center gap-2 border px-3 py-1 rounded-xl text-sm">
                    <img src="/bath1.svg.svg" className="w-4 h-4" />
                    x{property.bathrooms || "-"}
                </div>
                <div className="flex items-center gap-1 border px-4 py-1 rounded-xl text-sm">
                    <img src="/sqare1.svg.svg" className="w-4 h-4" />
                    {property.sqft || "-"}sq
                </div>
            </div>

            <hr className="my-2 border-[#0D0F181A]" />

            <Button
                text={`$${Number(property.price).toLocaleString()}`}
                className="bg-[#030E0F] text-white !px-6 !py-2 rounded-lg w-fit"
            />
        </div>
    </div>
);
const SearchPage = () => {
  const [filters, setFilters] = useState({
    priceMin: "",
    priceMax: "",
    bedrooms: "Any",
    bathrooms: "Any",
    sizeMin: "",
    sizeMax: "",
  });
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(false);

  const [searchParams] = useSearchParams(); // <--- get query params
  const navigate = useNavigate();

  // Fetch properties based on URL query params
  const fetchPropertiesByParams = async () => {
    try {
      setLoading(true);
      let query = supabase.from("properties").select("*");

      const type = searchParams.get("type");       // Villas, House, etc
      const advance = searchParams.get("advance"); // Sorting

      if (type) query = query.eq("category", type);

      // Sorting
      if (advance === "Price: Low to High") query = query.order("price", { ascending: true });
      else if (advance === "Price: High to Low") query = query.order("price", { ascending: false });
      else if (advance === "Newest First") query = query.order("created_at", { ascending: false });

      const { data, error } = await query;
      if (error) throw error;

      setProperties(data || []);
    } catch (error) {
      console.error("Error fetching properties:", error.message);
    } finally {
      setLoading(false);
    }
  };

  // Fetch properties based on sidebar filters
  const fetchProperties = async () => {
    try {
      setLoading(true);
      let query = supabase.from("properties").select("*");

      // Price filter
      if (filters.priceMin) query = query.gte("price", Number(filters.priceMin));
      if (filters.priceMax) query = query.lte("price", Number(filters.priceMax));

      // Bedrooms filter
      if (filters.bedrooms && filters.bedrooms !== "Any") {
        if (filters.bedrooms === "5+") query = query.gte("bedrooms", 5);
        else query = query.eq("bedrooms", Number(filters.bedrooms));
      }

      // Bathrooms filter
      if (filters.bathrooms && filters.bathrooms !== "Any") {
        if (filters.bathrooms === "5+") query = query.gte("bathrooms", 5);
        else query = query.eq("bathrooms", Number(filters.bathrooms));
      }

      // Size filter
      if (filters.sizeMin) query = query.gte("sqft", Number(filters.sizeMin));
      if (filters.sizeMax) query = query.lte("sqft", Number(filters.sizeMax));

      const { data, error } = await query;
      if (error) throw error;

      setProperties(data || []);
    } catch (error) {
      console.error("Error fetching properties:", error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  // ✅ Only fetch URL-based properties on first load
  useEffect(() => {
    fetchPropertiesByParams();
  }, [searchParams]);

  return (
    <>
      <Navbar />
      <div className="border-b border-gray-200 py-4">
        <div
          onClick={() => navigate("/")}
          className="max-w-6xl mx-auto flex items-center gap-2 px-4 sm:px-6 cursor-pointer"
        >
          <IoIosArrowRoundBack className="text-2xl text-gray-700" />
          <span className="text-sm font-medium text-[#4B5563]">Back to Home</span>
        </div>
      </div>
      <div className="container mx-auto px-6 py-10 max-w-6xl">
        <h2 className="font-bold text-xl mb-6">
          {loading ? "Loading..." : `${properties.length} Properties Found`}
        </h2>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Sidebar Filters */}
          <div className="w-full lg:w-1/4 bg-white border rounded-xl p-4 space-y-4 shadow-sm">
            <h3 className="font-semibold text-gray-700 mb-2">Refine Search</h3>
            {/* Price */}
            <div>
              <label className="text-xs text-gray-500">Price Range</label>
              <div className="flex gap-2 mt-1">
                <input
                  type="number"
                  placeholder="Min"
                  name="priceMin"
                  value={filters.priceMin}
                  onChange={handleFilterChange}
                  className="w-1/2 px-2 py-1 border rounded text-sm"
                />
                <input
                  type="number"
                  placeholder="Max"
                  name="priceMax"
                  value={filters.priceMax}
                  onChange={handleFilterChange}
                  className="w-1/2 px-2 py-1 border rounded text-sm"
                />
              </div>
            </div>
            {/* Bedrooms */}
            <div>
              <label className="text-xs text-gray-500">Bedrooms</label>
              <div className="flex gap-2 mt-1">
                {["Any", 1, 2, 3, 4, "5+"].map((b) => (
                  <button
                    key={b}
                    className={`px-2 py-1 rounded text-sm border ${filters.bedrooms === b ? "bg-[#5856D6] text-white" : "text-gray-700"
                      }`}
                    onClick={() => setFilters({ ...filters, bedrooms: b })}
                  >
                    {b}
                  </button>
                ))}
              </div>
            </div>
            {/* Bathrooms */}
            <div>
              <label className="text-xs text-gray-500">Bathrooms</label>
              <div className="flex gap-2 mt-1">
                {["Any", 1, 2, 3, 4, "5+"].map((b) => (
                  <button
                    key={b}
                    className={`px-2 py-1 rounded text-sm border ${filters.bathrooms === b ? "bg-[#5856D6] text-white" : "text-gray-700"
                      }`}
                    onClick={() => setFilters({ ...filters, bathrooms: b })}
                  >
                    {b}
                  </button>
                ))}
              </div>
            </div>
            {/* Size */}
            <div>
              <label className="text-xs text-gray-500">Property Size (sq ft)</label>
              <div className="flex gap-2 mt-1">
                <input
                  type="number"
                  placeholder="Min"
                  name="sizeMin"
                  value={filters.sizeMin}
                  onChange={handleFilterChange}
                  className="w-1/2 px-2 py-1 border rounded text-sm"
                />
                <input
                  type="number"
                  placeholder="Max"
                  name="sizeMax"
                  value={filters.sizeMax}
                  onChange={handleFilterChange}
                  className="w-1/2 px-2 py-1 border rounded text-sm"
                />
              </div>
            </div>
            <button
              className="w-full bg-[#5856D6] text-white py-2 rounded mt-2 text-sm"
              onClick={fetchProperties}
            >
              Apply Filters
            </button>
          </div>

          {/* Property Grid */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {loading
              ? Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="h-60 bg-gray-200 animate-pulse rounded-xl" />
              ))
              : properties.map((p) => <PropertyCard key={p.id} property={p} />)}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SearchPage;
