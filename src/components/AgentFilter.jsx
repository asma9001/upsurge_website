import { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination as SwiperPagination } from "swiper/modules";
import "swiper/css";

import AgentSearchBar from "./AgentSearchBar";
import AgentCard from "./AgentCard";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { supabase } from "../config/supabaseClient";

const AgentFilter = () => {
  const [agents, setAgents] = useState([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");
  const [filters, setFilters] = useState({
    position: "",
    designation: "",
    language: "",
  });

  const [currentPage, setCurrentPage] = useState(1);
  const swiperRef = useRef(null);

  // ✅ Fetch agents from Supabase
  useEffect(() => {
    const fetchAgents = async () => {
      const { data, error } = await supabase
        .from("agents")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        console.error("Error fetching agents:", error);
      } else {
        setAgents(data);
      }

      setLoading(false);
    };

    fetchAgents();
  }, []);

  // ✅ Filter agents
  const filteredAgents = agents.filter((agent) => {
    const matchesSearch = agent.full_name
      ?.toLowerCase()
      .includes(search.toLowerCase());

    const matchesPosition =
      !filters.position || agent.position === filters.position;

    const matchesDesignation =
      !filters.designation || agent.designation === filters.designation;

    const matchesLanguage =
      !filters.language || agent.language === filters.language;

    return (
      matchesSearch &&
      matchesPosition &&
      matchesDesignation &&
      matchesLanguage
    );
  });

  const slidesPerView = 4;
  const totalPages = Math.ceil(filteredAgents.length / slidesPerView);

  const goToPage = (page) => {
    if (!swiperRef.current) return;
    if (page < 1 || page > totalPages) return;

    swiperRef.current.slideTo((page - 1) * slidesPerView);
    setCurrentPage(page);
  };

  if (loading) {
    return (
      <section className="max-w-6xl mx-auto px-4 py-20 flex justify-center">
        <div className="w-10 h-10 border-4 border-[#5856D6] border-t-transparent rounded-full animate-spin"></div>
      </section>
    );
  }

  return (
    <section className="max-w-6xl mx-auto px-4 py-10">
      <AgentSearchBar
        search={search}
        setSearch={setSearch}
        filters={filters}
        setFilters={setFilters}
      />

      <div className="text-center mb-8 mt-11">
        <h2 className="text-3xl font-semibold">Meet Our Agents</h2>
        <p className="text-gray-500 text-sm max-w-xl mx-auto mt-2">
          Our team of experienced professionals is dedicated to helping you
          navigate the real estate market with confidence and ease.
        </p>
      </div>

      {filteredAgents.length > 0 ? (
        <>
          <Swiper
            modules={[SwiperPagination]}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            spaceBetween={20}
            slidesPerView={slidesPerView}
            onSlideChange={() => {
              const newPage =
                Math.floor(swiperRef.current.activeIndex / slidesPerView) + 1;
              setCurrentPage(newPage);
            }}
            breakpoints={{
              0: { slidesPerView: 1 },
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
            }}
          >
            {filteredAgents.map((agent) => (
              <SwiperSlide key={agent.id}>
                <AgentCard agent={agent} />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Pagination */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
            <button
              onClick={() => goToPage(currentPage - 1)}
              className="w-10 h-10 flex items-center justify-center rounded-full border disabled:opacity-50"
              disabled={currentPage === 1}
            >
              <FiChevronLeft size={20} />
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map(
              (page) => (
                <button
                  key={page}
                  onClick={() => goToPage(page)}
                  className={`w-10 h-10 rounded-full border ${
                    currentPage === page
                      ? "bg-[#5856D6] text-white border-[#5856D6]"
                      : ""
                  }`}
                >
                  {page}
                </button>
              )
            )}

            <button
              onClick={() => goToPage(currentPage + 1)}
              className="w-10 h-10 flex items-center justify-center rounded-full border disabled:opacity-50"
              disabled={currentPage === totalPages}
            >
              <FiChevronRight size={20} />
            </button>
          </div>
        </>
      ) : (
        <p className="text-center text-gray-500 mt-10">
          No agents found.
        </p>
      )}
    </section>
  );
};

export default AgentFilter;
