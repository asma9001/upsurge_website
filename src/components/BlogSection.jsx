import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
import { supabase } from "../config/supabaseClient";
import CardBlog from "./CardBlog";
import { assets } from "../assets/assets";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Arrows
const NextArrow = () => (
    <button className="blog-next w-10 h-10 rounded-full border flex items-center justify-center transition ml-2">
        <img src={assets.prev_icon} alt="Next" />
    </button>
);

const PrevArrow = () => (
    <button className="blog-prev w-10 h-10 rounded-full border flex items-center justify-center transition">
        <img src={assets.next_icon} alt="Prev" />
    </button>
);

const BlogSection = () => {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBlogs = async () => {
            const { data, error } = await supabase
                .from("blogs")
                .select("*")
                .order("created_at", { ascending: false });

            if (error) {
                console.error("Error fetching blogs:", error);
            } else {
                setBlogs(data);
            }

            setLoading(false);
        };

        fetchBlogs();
    }, []);

    if (loading) {
        return (
            <section className="max-w-6xl mx-auto px-4 py-20 flex justify-center items-center">
                <div className="w-10 h-10 border border-[#5856D6] border-t-transparent rounded-full animate-spin"></div>
            </section>
        );
    }

    if (!blogs.length) {
        return (
            <section className="max-w-6xl mx-auto px-4 py-10 text-center">
                No blogs available.
            </section>
        );
    }

    return (
        <section className="max-w-6xl mx-auto px-4">
            {/* Heading */}
            <div className="mb-6">
                <p className="text-sm font-bold font-plus-jakarta text-[#5856D6]">
          // OUR BLOG
                </p>

                <h2 className="text-4xl font-bold font-plus-jakarta text-[#171B2A] mt-2">
                    READ OUR LATEST BLOG
                </h2>

                {/* Arrows */}
                <div className="flex justify-end gap-2 mt-4 mr-4">
                    <PrevArrow />
                    <NextArrow />
                </div>
            </div>

            {/* Swiper */}
            <div className="mt-6 pb-16">
                <Swiper
                    modules={[Navigation, Pagination]}
                    spaceBetween={24}
                    pagination={{ clickable: true }}
                    navigation={{
                        nextEl: ".blog-next",
                        prevEl: ".blog-prev",
                    }}
                    breakpoints={{
                        0: { slidesPerView: 1 },
                        640: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                >
                    {blogs.map((blog) => (
                        <SwiperSlide key={blog.id}>
                            <Link to={`/blog/${blog.id}`} state={{ blog }} className="block">
                                <CardBlog blog={blog} />
                            </Link>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            {/* Pagination Styling */}
            <style jsx>{`
        .swiper-pagination {
          bottom: 0 !important;
        }

        .swiper-pagination-bullet {
          width: 12px;
          height: 12px;
          background-color: #c4c4c4;
          opacity: 1;
          margin: 0 4px !important;
        }

        .swiper-pagination-bullet-active {
          background-color: #5856d6;
          transform: scale(1.2);
        }
      `}</style>
        </section>
    );
};

export default BlogSection;
