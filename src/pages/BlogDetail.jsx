import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { agents, assets, blogs } from "../assets/assets";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { IoIosArrowRoundBack } from "react-icons/io";
import { supabase } from "../config/supabaseClient";

export default function BlogDetail() {

    const navigate = useNavigate();
    const location = useLocation();
    const { id } = useParams();
    const blogFromState = location.state?.blog; // get passed blog
    const [loading, setLoading] = useState(true);

    const blog = blogFromState || blogs.find((b) => b.id === Number(id));
    console.log("Blog from state:", blogFromState);
    if (!blog) return <p className="text-center mt-20 text-gray-500">Blog post not found.</p>;
    // Use first agent as before
    const agent = agents[0];
    const [relatedBlogs, setRelatedBlogs] = useState([]);
    useEffect(() => {
        const fetchBlog = async () => {
            setLoading(true);


            // Fetch related blogs (excluding the current one)
            const { data: relatedData, error: relatedError } = await supabase
                .from("blogs")
                .select("*")
                .neq("id", id)
                .order("created_at", { ascending: false })
                .limit(3);

            if (relatedError) console.error("Error fetching related blogs:", relatedError);
            else setRelatedBlogs(relatedData);

            setLoading(false);
        };
        fetchBlog();
    }, [id]);

    const formatContent = (content) => {
        const sections = content.split(/\n(?=\d+\.)/); // split when line starts with number.

        return sections.map((section, index) => {
            const lines = section.split("\n");
            const title = lines[0];
            const body = lines.slice(1).join(" ");

            return (
                <div key={index}>
                    <h3 className="font-semibold">{title}</h3>
                    <p className="mt-1">{body}</p>
                </div>
            );
        });
    };

    return (
        <div>
            <Navbar />

            {/* Back Button */}
            <div className="border-b border-gray-200 py-4">
                <div
                    onClick={() => navigate("/blog")}
                    className="max-w-6xl mx-auto flex items-center gap-2 px-4 sm:px-6 cursor-pointer"
                >
                    <IoIosArrowRoundBack className="text-2xl text-gray-700" />
                    <span className="text-sm font-medium text-[#4B5563]">Back to Blog</span>
                </div>
            </div>

            <section className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
                {/* Category */}
                <span className="inline-block mb-4 px-3 py-1 text-xs sm:text-sm font-semibold text-[#2563EB] bg-[#EFF6FF] rounded-full">
                    {blog.category || "Selling Tips"}
                </span>

                {/* Title */}
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0F172A] leading-tight mb-6 sm:mb-8">
                    {blog.title}
                </h1>

                {/* Meta */}
                <div className="flex flex-wrap gap-4 sm:gap-6 text-xs sm:text-sm text-[#4B5563] font-medium mb-8">
                    <span className="flex items-center gap-1 sm:gap-2">
                        <img src={assets.account} alt="author" className="w-4 h-4" />
                        {blog.author}
                    </span>
                    <span className="flex items-center gap-1 sm:gap-2">
                        <img src={assets.calendar} alt="date" className="w-4 h-4" />
                        {new Date(blog.created_at).toLocaleDateString("en-US", {
                            day: "numeric",
                            month: "short",  // Jan, Feb, Mar...
                            year: "numeric"
                        })}
                    </span>
                    <span className="flex items-center gap-1 sm:gap-2">
                        <img src={assets.clock} alt="read time" className="w-4 h-4" />
                        {blog.readTime || "5 min read"}
                    </span>
                </div>

                {/* Share Icons */}
                <div className="flex items-center gap-2 sm:gap-3 mb-10">
                    <img src={assets.share} className="w-4 h-4" alt="share" />
                    <span className="text-xs text-[#4B5563] font-medium">Share:</span>
                    <a className="p-2 rounded-full bg-gray-100">
                        <img src={assets.facebook_icon} alt="Facebook" className="w-4 h-4" />
                    </a>
                    <a className="p-2 rounded-full bg-gray-100">
                        <img src={assets.linkedin_icon} alt="LinkedIn" className="w-4 h-4" />
                    </a>
                    <a className="p-2 rounded-full bg-gray-100">
                        <img src={assets.instagram_icon} alt="Instagram" className="w-4 h-4" />
                    </a>
                </div>

                {/* Featured Image */}
                <div className="rounded-2xl overflow-hidden mb-10 sm:mb-12">
                    <img
                        src={blog.cover_image}
                        alt={blog.title}
                        className="w-full h-60 sm:h-80 md:h-96 lg:h-[460px] object-cover rounded-lg"
                    />
                </div>

                {/* Blog Content */}
                <div className="space-y-6 sm:space-y-8 text-sm sm:text-base leading-relaxed">
                    {blog?.content && formatContent(blog.content)}
                </div>



                {/* Author Box */}
                <div className="mt-12 bg-gray-50 rounded-xl p-6 flex flex-col sm:flex-row gap-4 sm:items-center">
                    <img src={agent.image} alt={agent.name} className="w-16 h-16 rounded-full object-cover" />
                    <div>
                        <h4 className="font-bold text-gray-900">{agent.name}</h4>
                        <p className="text-gray-600 mt-1 text-sm sm:text-base">{agent.bio || "Helen Edwards-Jackson is a seasoned real estate professional with over 15 years of experience helping clients navigate the Charlotte market. Specializing in residential properties and investment opportunities."}</p>
                        <Link to={`/agents/${agent.id}`} className="mt-2 text-[#2563EB] font-medium hover:underline inline-block text-sm sm:text-base">
                            View Profile →
                        </Link>
                    </div>
                </div>

                {/* Related Blog */}
                <section className="mt-16">
                    <h2 className="text-2xl sm:text-3xl  lg:text-4xl font-bold mb-6 text-[#171B2A] font-plus-jakarta uppercase">
                        Related Blogs
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                        {relatedBlogs.map((blog) => (
                            <Link
                                to={`/blog/${blog.id}`}
                                key={blog.id}
                                className="block rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
                            >
                                <img
                                    src={blog.cover_image}
                                    alt={blog.title}
                                    className="w-full h-48 sm:h-56 md:h-64 lg:h-72 object-cover transition-transform duration-300 hover:scale-105"
                                />
                                <div className="p-3 sm:p-4">
                                    <p className="text-xs sm:text-sm text-[#171B2A] font-plus-jakarta">By admin • {blog.readTime}</p>
                                    <h3 className="mt-1 sm:mt-2 text-base text-[#171B2A] font-plus-jakarta sm:text-lg font-bold uppercase leading-snug">{blog.title}</h3>
                                    <button className="mt-2 text-[#5856D6] font-plus-jakarta font-semibold  text-xs sm:text-sm flex items-center gap-1">Read More →</button>
                                </div>
                            </Link>
                        ))}
                    </div>
                </section>
            </section>

            <Footer />
        </div>
    );
}
