const CardBlog = ({ blog }) => {
    return (
        <div className="px-2 sm:px-3 md:px-4">
            <div className="rounded-xl overflow-hidden">
                <img
                    src={blog.cover_image}
                    alt={blog.title}
                    className="
                        w-full
                        h-[160px]
                        sm:h-[180px]
                        md:h-[220px]
                        lg:h-[240px]
                        object-cover
                        transition-transform
                        duration-300
                        lg:hover:scale-105
                    "
                />
            </div>

            <div className="mt-3 sm:mt-4">
                <p className="text-[11px] sm:text-xs text-gray-500">
                    By {blog.author || "Unknown Author"} • {blog.readTime}
                </p>

                <h3 className="mt-2 font-semibold uppercase sm:text-lg leading-snug">
                    {blog.title}
                </h3>

                <button className="
                    mt-2 sm:mt-3 mb-7
                    text-xs sm:text-sm
                    text-blue-600
                    flex
                    items-center
                    gap-1
                ">
                    Read More →
                </button>
            </div>
        </div>
    );
};

export default CardBlog;
