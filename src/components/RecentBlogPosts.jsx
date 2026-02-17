import { GoArrowUpRight } from "react-icons/go";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "../config/supabaseClient";

export default function RecentBlogPosts() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      const { data, error } = await supabase
        .from("blogs")
        .select("*")
        .order("created_at", { ascending: false })
        .limit(3); // get latest 4 blogs

      if (error) {
        console.error("Error fetching blogs:", error);
      } else {
        setBlogs(data);
      }
      setLoading(false);
    };

    fetchBlogs();
  }, []);

  if (loading) return <p className="text-center py-6">Loading blogs...</p>;
  if (!blogs.length) return <p className="text-center py-6">No recent blogs yet!</p>;

  const featuredBlog = blogs[0];
  const sideBlogs = blogs.slice(1, 4);

  return (
    <section className="max-w-6xl mx-auto px-6">
      <h2 className="text-xl font-bold text-[#0A0A0A] mb-8">
        Recent blog posts
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Left – Featured Post */}
        {featuredBlog && (
          <Link
            to={`/blog/${featuredBlog.id}`}
            state={{ blog: featuredBlog }} // <-- pass state here
            className="md:col-span-2 group"
          >

            <div>
              {featuredBlog.cover_image && (
                <div className="rounded-xl overflow-hidden mb-4">
                  <img
                    src={featuredBlog.cover_image}
                    alt={featuredBlog.title}
                    className="w-full h-80 object-cover group-hover:scale-105 transition"
                  />
                </div>
              )}

              <p className="text-sm text-[#5856D6] font-arimo mb-2">
                {featuredBlog.author || "Admin"} · {new Date(featuredBlog.created_at).toLocaleDateString("en-US", {
                  day: "numeric",
                  month: "short",  // Jan, Feb, Mar...
                  year: "numeric"
                })
                }
              </p>

              <h3 className="font-bold text-[#0A0A0A] font-arimo mb-2 flex items-center gap-2">
                {featuredBlog.title}
                <GoArrowUpRight className="size-4" />
              </h3>

              <p className="text-[#4A5565] font-arimo mb-4 line-clamp-3">
                {featuredBlog.content}
              </p>
            </div>
          </Link>
        )}

        {/* Right – Stacked Posts */}
        <div className="md:col-span-2 flex flex-col gap-8">
          {sideBlogs.map((blog) => (
            <Link
              key={blog.id}
              to={`/blog/${blog.id}`}
              state={{ blog }} // pass each blog
              className="group"
            >

              <div>
                {blog.cover_image && (
                  <div className="rounded-xl overflow-hidden mb-4">
                    <img
                      src={blog.cover_image}
                      alt={blog.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition"
                    />
                  </div>
                )}

                <p className="text-sm text-[#5856D6] font-arimo mb-2">
                  {blog.author || "Admin"} · {new Date(blog.created_at).toLocaleDateString("en-US", {
                    day: "numeric",
                    month: "short",  // Jan, Feb, Mar...
                    year: "numeric"
                  })
                  }
                </p>

                <h3 className="font-bold text-[#0A0A0A] font-arimo mb-2 flex items-center gap-2">
                  {blog.title}
                  <GoArrowUpRight className="size-4" />
                </h3>

                <p className="text-[#4A5565] font-arimo mb-4 line-clamp-2">
                  {blog.content}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
