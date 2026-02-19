import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { IoIosArrowRoundBack } from "react-icons/io";
import FilterBar from "./FilterBar";
import Button from "./Button";
import { supabase } from "../config/supabaseClient";
import { motion } from "framer-motion";
const PAGE_SIZE = 6;
const LocationProperties = () => {
    const navigate = useNavigate();
    const [properties, setProperties] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1); // current page
    const [total, setTotal] = useState(0); // total properties
    const { name } = useParams();

    const fetchProperties = async (currentPage = 1) => {
        setLoading(true);

        try {
            // 1️⃣ Get total count for selected location
            const { count, error: countError } = await supabase
                .from("properties")
                .select("*", { count: "exact", head: true })
                .ilike("city", name); // filter by location

            if (countError) throw countError;

            setTotal(count || 0);

            // 2️⃣ Pagination range
            const from = (currentPage - 1) * PAGE_SIZE;
            const to = from + PAGE_SIZE - 1;

            // 3️⃣ Fetch filtered properties
            const { data, error } = await supabase
                .from("properties")
                .select("*")
                .ilike("city", name) // filter here too
                .range(from, to);

            if (error) throw error;

            setProperties(data || []);
        } catch (err) {
            console.error(err.message);
        } finally {
            setLoading(false);
        }
    };


    useEffect(() => {
        setPage(1); // reset page when location changes
        fetchProperties(1);
    }, [name]);
    useEffect(() => {
        fetchProperties(page);
    }, [page]);

    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    const totalPages = Math.ceil(total / PAGE_SIZE);



    return (
        <>
            <Navbar />
            <div className="py-4">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row  justify-between gap-6 px-4 sm:px-6">
                    <div
                        onClick={() => navigate("/")}
                        className="flex items-center gap-2 cursor-pointer"
                    >
                        <IoIosArrowRoundBack className="text-2xl text-gray-700" />
                        <span className="text-sm font-bold text-[#4B5563]">Back to Home</span>
                    </div>

                    <div className="w-full md:w-auto flex justify-start md:justify-end mt-4 md:mt-0">
                        <FilterBar />
                    </div>
                </div>

               <div className="max-w-7xl mx-auto mt-6 px-4 sm:px-6">
  {/* Dynamic text showing number of properties */}
  <p className="text-[#111827] text-xl font-bold mb-4">
    {properties.length} {properties.length === 1 ? "property" : "Properties"} Found
  </p>

  {loading ? (
    <div className="flex justify-center items-center py-20">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
    </div>
  ) : (
    <div className="grid gap-6 mt-7 grid-cols-1 sm:grid-cols-3 lg:grid-cols-4">
      {properties.map((item, index) => (
        <motion.div
          key={item.id}
          className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition"
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <div
            className="h-[220px] sm:h-[250px] bg-cover bg-center p-4 flex justify-between items-start"
            style={{ backgroundImage: `url(${item.images[0]})` }}
          >
            <div className="flex gap-2">
              {item.featured && (
                <Button
                  text="Featured"
                  className="bg-white !text-[#030E0F] text-xs !px-4 !py-1 rounded"
                />
              )}
              <Button
                text={item.category}
                className="bg-white !text-[#030E0F] text-xs !px-4 !py-1 rounded"
              />
            </div>
          </div>

          <div className="px-5 py-4 flex flex-col gap-2">
            <h3 className="text-lg font-semibold text-[#030E0F]">{item.title}</h3>
            <p className="text-sm text-[#252728]">{item.city}</p>

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

            <hr className="my-2 border-[#0D0F181A]" />
            <div className="flex items-center justify-between mt-2">
              <Button
                text={`$${Number(item.price).toLocaleString()}`}
                className="bg-[#030E0F] text-white !px-6 !py-2 rounded-lg w-fit"
              />
              <p
                onClick={() =>
                  navigate(`/property/${item.id}`, { state: { property: item } })
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
  )}

  {/* Pagination */}
  <div className="flex justify-center items-center gap-2 mt-6">
    <button
      onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
      className="px-3 py-1 border rounded disabled:opacity-50"
      disabled={page === 1}
    >
      Previous
    </button>

    {Array.from({ length: totalPages }, (_, i) => (
      <button
        key={i + 1}
        onClick={() => setPage(i + 1)}
        className={`px-3 py-1 rounded border ${page === i + 1 ? "bg-indigo-600 text-white" : ""}`}
      >
        {i + 1}
      </button>
    ))}

    <button
      onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
      className="px-3 py-1 border rounded disabled:opacity-50"
      disabled={page === totalPages}
    >
      Next
    </button>
  </div>
</div>


            </div >
            <Footer />
        </>
    );

};

export default LocationProperties;
