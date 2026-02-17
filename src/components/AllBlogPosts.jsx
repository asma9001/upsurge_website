import { GoArrowUpRight } from "react-icons/go";
import { useEffect, useState } from "react";
import { supabase } from "../config/supabaseClient";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function AllBlogPosts() {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const pageSize = 6;
    const [totalPages, setTotalPages] = useState(1);
    const [direction, setDirection] = useState(0);

    useEffect(() => {
        const fetchBlogs = async () => {
            setLoading(true);

            const { data, error } = await supabase
                .from("blogs")
                .select("*")
                .order("created_at", { ascending: false })
                .range(3, 1000); 


            if (error) {
                console.error("Error fetching blogs:", error);
            } else {
                setBlogs(data);
                setTotalPages(Math.ceil(data.length / pageSize));
            }

            setLoading(false);
        };

        fetchBlogs();
    }, []);

    if (loading) return <p className="text-center py-10">Loading blogs...</p>;

    const startIndex = (page - 1) * pageSize;
    const currentBlogs = blogs.slice(startIndex, startIndex + pageSize);

    const variants = {
        enter: (dir) => ({ x: dir > 0 ? 300 : -300, opacity: 0 }),
        center: { x: 0, opacity: 1 },
        exit: (dir) => ({ x: dir > 0 ? -300 : 300, opacity: 0 }),
    };

    return (
        <><section className="max-w-6xl mx-auto my-20 px-6 bg-[#F3F4F6]">
            <h2 className="text-xl font-bold font-arimo text-[#0A0A0A] mb-10">
                All blog posts
            </h2>

            <div
                key={page}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"

            >
                {currentBlogs.map((blog) => (
                    <Link
                        key={blog.id}
                        to={`/blog/${blog.id}`}
                        state={{ blog }}
                        className="block hover:shadow-lg transition-shadow rounded-xl p-2"
                    >
                        <article className="flex flex-col cursor-pointer">
                            <div className="rounded-xl overflow-hidden mb-4">
                                <img
                                    src={blog.cover_image}
                                    alt={blog.title}
                                    className="w-full h-56 object-cover"
                                />
                            </div>

                            <p className="text-sm text-[#5856D6] font-arima mb-2">
                                {blog.author || "Admin"} ·{" "}
                                {new Date(blog.created_at).toLocaleDateString("en-US", {
                                    day: "numeric",
                                    month: "short",
                                    year: "numeric",
                                })}
                            </p>

                            <h3 className="group text-lg font-bold text-[#0A0A0A] leading-[28px] font-arima mb-2 flex items-center gap-2">
                                <span className="flex-1">{blog.title}</span>
                                <span className="shrink-0 mb-6 size-4 text-[#0A0A0A] font-bold">
                                    <GoArrowUpRight />
                                </span>
                            </h3>

                            <p className="text-[#4A5565] font-arima text-sm mb-4 line-clamp-3">
                                {blog.content}
                            </p>

                            <div className="flex flex-wrap gap-2 mt-auto">
                                {blog.tags?.map((tag) => (
                                    <span
                                        key={tag}
                                        className="px-3 py-1 text-xs text-[#364153] font-arimo bg-[#F3F4F6] rounded-full"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </article>
                    </Link>
                ))}
            </div>


            {/* Pagination Arrows & Numbers */}

        </section>
            <div className="flex justify-center items-center gap-2 my-8 flex-wrap">
                <button
                    onClick={() => {
                        setDirection(-1);
                        setPage((p) => Math.max(p - 1, 1));
                    }}
                    disabled={page === 1}
                    className="p-2 bg-gray-300 rounded-full disabled:opacity-50 hover:bg-gray-400"
                >
                    <ChevronLeft className="w-5 h-5" />
                </button>

                {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
                    <button
                        key={num}
                        onClick={() => {
                            setDirection(num > page ? 1 : -1);
                            setPage(num);
                        }}
                        className={`px-3 py-1 rounded ${num === page ? "bg-[#5856D6] text-white" : "bg-white text-gray-800"
                            } hover:bg-[#5856D6] hover:text-white transition`}
                    >
                        {num}
                    </button>
                ))}

                <button
                    onClick={() => {
                        setDirection(1);
                        setPage((p) => Math.min(p + 1, totalPages));
                    }}
                    disabled={page === totalPages}
                    className="p-2 bg-gray-300 rounded-full disabled:opacity-50 hover:bg-gray-400"
                >
                    <ChevronRight className="w-5 h-5" />
                </button>
            </div>
        </>

    );
}
