import React from 'react';
import Navbar from '../components/Navbar';
import Button from '../components/Button';
import RecentBlogPosts from '../components/RecentBlogPosts';
import AllBlogPosts from '../components/AllBlogPosts';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

const Blogs = () => {
    return (
        <div>
            <Navbar />

            {/* Hero Section */}
            <motion.div
                initial={{ opacity: 0, y: 100 }}
                transition={{ duration: 1.5 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="py-24 sm:py-32 flex items-center justify-center bg-white px-4"
            >
                <div className="text-center max-w-xl w-full">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold font-arimo text-gray-900 mb-4">
                        Inside Design: Stories and Interviews
                    </h1>

                    <p className="text-gray-600 sm:text-base text-sm mb-6 sm:mb-8">
                        Subscribe to learn about new product features, the latest in technology, and updates.
                    </p>

                    {/* Input & Button */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full sm:w-64 px-4 py-2 placeholder:text-gray-400 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <Button
                            text="Subscribe"
                            className="!px-5 !py-2 !text-white !text-sm !font-arimo !rounded-md w-full sm:w-auto"
                        />
                    </div>
                </div>
            </motion.div>

            {/* Recent Posts */}
            <div className="px-4 sm:px-6 lg:px-32">
                <RecentBlogPosts />
            </div>

            {/* All Posts */}
            <div className="px-4 sm:px-6 lg:px-32 mt-12">
                <AllBlogPosts />
            </div>

            <Footer />
        </div>
    );
};

export default Blogs;
