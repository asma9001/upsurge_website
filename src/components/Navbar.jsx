import React, { useState } from "react";
import Button from "./Button";
import { assets } from "../assets/assets";
import { FiMenu, FiX } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const location = useLocation(); // get current route
    const navigate = useNavigate();
    const navItems = [
        { name: "Search", path: "/" },
        { name: "Sell", path: "/sell" },
        { name: "Agents", path: "/agents" },
        { name: "Blogs", path: "/blog" },
        { name: "About Us", path: "/about" },
    ];

    return (
        <header className="relative w-full z-50">



            {/* MAIN NAVBAR */}
            <div className="bg-white shadow-sm">
                <div className="container mx-auto flex items-center px-6 py-3 md:px-20 lg:px-40">

                 <Link to="/" className="flex items-center gap-2 cursor-pointer">
  <img src="/logo.png" alt="Logo" className="w-15 h-15" />
  <h1 className="text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#76411E] to-[#FAB28D]">
    UPSURGE REALTY
  </h1>
</Link>


                    {/* Desktop Menu */}
                    <ul className="ml-auto hidden md:flex items-center gap-8 text-sm font-medium">
                        {navItems.map((item) => (
                            <li key={item.name}>
                                <Link
                                    to={item.path}
                                    className={`hover:text-purple-600 ${location.pathname === item.path ? "text-purple-600" : "text-[#030E0F]"
                                        }`}
                                >
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    <div className="ml-6 hidden md:block">
                        <Button
                            text="Login"
                            className="px-5 py-2 cursor-pointer"
                            onClick={() => navigate("/login")}
                        />
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="ml-auto md:hidden text-2xl"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <FiX /> : <FiMenu />}
                    </button>
                </div>

                {/* Mobile Menu */}
                <div
                    className={`md:hidden fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50
              transform transition-transform duration-300 ease-in-out
              ${open ? "translate-x-0" : "translate-x-full"}`}
                >
                    <div className="flex justify-end px-6 py-4">
                        <button onClick={() => setOpen(false)} className="text-2xl">
                            <FiX />
                        </button>
                    </div>

                    <ul className="flex flex-col gap-6 px-6 mt-4 text-sm font-medium">
                        {navItems.map((item) => (
                            <li key={item.name}>
                                <Link
                                    to={item.path}
                                    className={`block w-full ${location.pathname === item.path ? "text-purple-600" : "text-[#030E0F]"
                                        }`}
                                    onClick={() => setOpen(false)} // close on click
                                >
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                        <Button
                            text="Login"
                            className="px-5 py-2 cursor-pointer"
                            onClick={() => navigate("/login")}
                        />

                    </ul>
                </div>



            </div>
        </header>
    );
};

export default Navbar;
