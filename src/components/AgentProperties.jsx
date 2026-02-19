import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Button from "../components/Button";
import { supabase } from "../config/supabaseClient";
import { IoIosArrowRoundBack } from "react-icons/io";
import { assets } from "../assets/assets";
import { Calendar, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import FilterBar from "./FilterBar";

const AgentProperties = () => {
    const navigate = useNavigate();
    const { id } = useParams(); // ✅ get agent id from URL

    const [properties, setProperties] = useState([]);
    const [agent, setAgent] = useState(null);
    const [loading, setLoading] = useState(true);
const [page, setPage] = useState(1);
const [pageSize] = useState(6);
const [totalCount, setTotalCount] = useState(0);
const totalPages = Math.ceil(totalCount / pageSize);

    // Animation
    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 },
    };

useEffect(() => {
  const fetchData = async () => {
    setLoading(true);

    const agentId = Number(id); // remove Number() if UUID

    // Fetch agent
    const { data: agentData } = await supabase
      .from("agents")
      .select("*")
      .eq("id", agentId)
      .single();

    setAgent(agentData);

    // Pagination calculation
    const from = (page - 1) * pageSize;
    const to = from + pageSize - 1;

    // Fetch paginated properties + total count
    const { data, count } = await supabase
      .from("properties")
      .select("*", { count: "exact" })
      .eq("agent_id", agentId)
      .order("created_at", { ascending: false })
      .range(from, to);

    setProperties(data || []);
    setTotalCount(count || 0);

    setLoading(false);
  };

  fetchData();
}, [id, page]);


  const handleContactClick = () => {
    navigate(`/agents/${agent.id}`, {
      state: { agent, scrollToContact: true },
    });
  };
    if (loading) {
        return (
            <div className="flex justify-center items-center py-32">
                <div className="w-10 h-10 border-4 border-[#5856D6] border-t-transparent rounded-full animate-spin"></div>
            </div>
        );
    }

    return (
        <>
            <Navbar />

            {/* Back Button */}
            <div className=" py-4">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-6 px-4 ">
                    <div
                        onClick={() => navigate("/")}
                        className="flex  gap-2 items-center cursor-pointer"
                    >
                        <IoIosArrowRoundBack className="text-2xl text-gray-700" />
                        <span className="text-sm  font-bold text-[#4B5563]">Back to Home</span>
                    </div>

                    <div className="w-full md:w-auto flex md:flex-1 justify-start md:justify-end mt-4 md:mt-0">
                        <FilterBar />
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-6 py-10 max-w-7xl">
                <h2 className="font-bold text-xl mb-6">
                    {properties.length} Properties Found
                </h2>

                <div className="flex flex-col lg:flex-row gap-6">

                    {/* ================= LEFT AGENT CARD ================= */}
                    {agent && (
                        <div className="bg-white p-6 border border-[#F3F4F6] rounded-xl shadow-md space-y-4 h-fit w-full max-w-sm">
                            <div className="flex items-center gap-4">
                                <img
                                    src={agent.photo_url}
                                    className="w-14 h-14 rounded-full object-cover"
                                    alt="agent"
                                />
                                <div>
                                    <p className="font-semibold">{agent.full_name}</p>
                                    <p className="text-xs text-gray-500">{agent.role}</p>
                                </div>
                            </div>

                            <div>
                                <p className="flex items-center gap-3 text-sm">
                                    <img
                                        src={assets.phone_icon}
                                        className="w-4 h-4 brightness-0"
                                    />
                                    {agent.phone}
                                </p>

                                <p className="flex items-center gap-3 text-sm mt-2">
                                    <img
                                        src={assets.email_icon}
                                        className="w-4 h-4 brightness-0"
                                    />
                                    {agent.email}
                                </p>
                            </div>

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

                            
                        </div>
                    )}

                    {/* ================= PROPERTY GRID ================= */}
                    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 flex-1">
                        {properties.map((item, index) => (
                            <motion.div
                                key={item.id}
                                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition"
                                variants={cardVariants}
                                initial="hidden"
                                animate="visible"
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                            >
                                <div
                                    className="h-[220px] bg-cover bg-center"
                                    style={{ backgroundImage: `url(${item.images?.[0]})` }}

                                />

                                <div className="px-5 py-4">
                                    <h3 className="text-lg font-semibold">{item.title}</h3>
                                    <p className="text-sm text-gray-500">{item.city}</p>

                                    <div className="flex gap-3 mt-3 text-sm">
                                        <span>{item.bedrooms} Beds</span>
                                        <span>{item.bathrooms} Baths</span>
                                        <span>{item.sqft} Sqft</span>
                                    </div>

                                    <div className="flex items-center justify-between mt-4">
                                        <Button
                                            text={`$${Number(item.price).toLocaleString()}`}
                                            className="bg-[#030E0F] text-white !px-6 !py-2 rounded-lg"
                                        />

                                        <p
                                            onClick={() =>
                                                navigate(`/property/${item.id}`, {
                                                    state: { property: item },
                                                })
                                            }
                                            className="text-[#5856D6] text-sm font-medium cursor-pointer hover:underline"
                                        >
                                            View detail
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                    {properties.length === 0 && (
  <div className="col-span-full text-center py-20 text-gray-500">
    No properties found for this agent.
  </div>
)}

                </div>

            </div>
            {totalPages > 1 && (
  <div className="flex justify-center items-center gap-2 mt-10">

    {/* Prev Button */}
    <button
      disabled={page === 1}
      onClick={() => setPage(page - 1)}
      className={`px-4 py-2 rounded-lg border text-sm ${
        page === 1
          ? "opacity-50 cursor-not-allowed"
          : "hover:bg-[#5856D6] hover:text-white"
      }`}
    >
      Prev
    </button>

    {/* Page Numbers */}
    {[...Array(totalPages)].map((_, index) => (
      <button
        key={index}
        onClick={() => setPage(index + 1)}
        className={`px-4 py-2 rounded-lg text-sm ${
          page === index + 1
            ? "bg-[#5856D6] text-white"
            : "border hover:bg-gray-100"
        }`}
      >
        {index + 1}
      </button>
    ))}

    {/* Next Button */}
    <button
      disabled={page === totalPages}
      onClick={() => setPage(page + 1)}
      className={`px-4 py-2 rounded-lg border text-sm ${
        page === totalPages
          ? "opacity-50 cursor-not-allowed"
          : "hover:bg-[#5856D6] hover:text-white"
      }`}
    >
      Next
    </button>

  </div>
)}


            <Footer />
        </>
    );
};

export default AgentProperties;
