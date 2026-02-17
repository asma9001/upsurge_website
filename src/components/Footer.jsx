import React from "react";

const Footer = () => {
    return (
        <footer className="bg-black text-white pt-12">
            <div className="container mx-auto px-6 max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-8">

                {/* Company Info */}
                <div className="space-y-4">
                    <div className="flex items-center gap-2">
                        <img src="/logo.png" alt="Logo" className="w-15 h-15" />
                        <h1 className="text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#76411E] to-[#FAB28D]">
                            UPSURGE REALTY
                        </h1>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed">
                        Upsurge Realty is committed to providing exceptional real estate services.
                        Whether you're buying, selling, or investing, our local experts guide you 
                        every step of the way to ensure the best results.
                    </p>
                </div>

                {/* Company Links */}
                <div>
                    <h3 className="text-white font-bold mb-4">Company</h3>
                    <ul className="space-y-2 text-gray-400 text-sm">
                        <li className="hover:text-white cursor-pointer">
                            <a href="/agents">Our Agents</a>
                        </li>
                        <li className="hover:text-white cursor-pointer">
                            <a href="/sell">Sell Your Home</a>
                        </li>
                        <li className="hover:text-white cursor-pointer">
                            <a href="/blog">Blogs & Insights</a>
                        </li>
                        <li className="hover:text-white cursor-pointer">
                            <a href="/about">About Us</a>
                        </li>
                    </ul>
                </div>

                {/* Newsletter */}
                <div>
                    <h3 className="text-white font-bold mb-4">Subscribe to Our Newsletter</h3>
                    <p className="text-gray-400 text-sm mb-4">
                        Stay updated with the latest real estate news, property listings, 
                        and market trends delivered straight to your inbox.
                    </p>
                    <div className="flex flex-col gap-4">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="flex-1 px-4 py-2 rounded-md bg-[#1E253B] text-gray-300 placeholder-gray-500 focus:outline-none"
                        />
                        <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>

            {/* Bottom Copyright */}
            <div className="mt-10 pb-4 border-t border-gray-700 pt-6 text-center text-white text-sm">
                Copyright 2026 © Upsurge Realty. All Rights Reserved.
            </div>
        </footer>
    );
};

export default Footer;
