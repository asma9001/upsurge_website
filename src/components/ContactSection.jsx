"use client";

import { useState } from "react";
import { FaEnvelope } from "react-icons/fa";
import Button from "./Button";
import { assets } from "../assets/assets";
import { supabase } from "../config/supabaseClient";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactSection = () => {
    const [formData, setFormData] = useState({
        first_name: "",
        last_name: "",
        email: "",
        phone: "",
        zip: "",
        message: "",
    });

    const [loading, setLoading] = useState(false);

    // Handle input change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const { error } = await supabase.from("contacts").insert([
            {
                first_name: formData.first_name,
                last_name: formData.last_name,
                email: formData.email,
                phone: formData.phone,
                zip: formData.zip,
                message: formData.message,
            },
        ]);

        if (error) {
            toast.error("❌ Error submitting form. Please try again.");
            console.error(error);
        } else {
            toast.success("✅ Message sent successfully!");

            setFormData({
                first_name: "",
                last_name: "",
                email: "",
                phone: "",
                zip: "",
                message: "",
            });
        }

        setLoading(false);
    };


    return (
        <section className="py-12 sm:py-16 md:py-20 bg-white">

            <div className="container mx-auto max-w-6xl px-4 sm:px-6">

                <div className="bg-[#5856D61A] border border-[#B88D741A] rounded-3xl p-6 sm:p-8 md:p-14 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center">


                    {/* LEFT CONTENT */}
                    <div>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-poppins font-bold text-[#1E1E1E] mb-4">

                            Get In <span className="text-[#5856D6] font-poppins">Touch</span> !
                        </h2>

                        <p className="text-[#1E1E1E] font-poppins text-sm leading-relaxed max-w-full sm:max-w-sm mb-6">

                            Choose The Unique Xlivery Platform And Head Into The World Of
                            E-Commerce With Confidence And Ease. It's Simple.
                        </p>

                        <div className="space-y-2 sm:space-y-3">

                            <div className="flex items-center gap-3 text-[#5856D6] font-poppins font-medium">
                                <img src={assets.call_icon} className="w-4 h-4" />
                                <span>+980-375-5150</span>
                            </div>

                            <div className="flex items-center gap-3 text-[#5856D6] font-poppins font-medium">
                                <FaEnvelope />
                                <span>Contact@Info.Com</span>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT FORM */}
                    <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <input
                                type="text"
                                name="first_name"
                                value={formData.first_name}
                                onChange={handleChange}
                                placeholder="First Name"
                                className="input-field border rounded-[25.5px] px-4 py-3 border-[#EEEEEE] bg-white"
                            />

                            <input
                                type="text"
                                name="last_name"
                                value={formData.last_name}
                                onChange={handleChange}
                                placeholder="Last Name"
                                className="input-field border rounded-[25.5px] px-4 py-3 border-[#EEEEEE] bg-white"
                            />

                        </div>

                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Email Address"
                            className="input-field border w-full rounded-[25.5px] px-4 py-3 border-[#EEEEEE] bg-white"
                        />


                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <input
                                type="text"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder="Contact No"
                                className="input-field border rounded-[25.5px] px-4 py-3 border-[#EEEEEE] bg-white"
                            />

                            <input
                                type="text"
                                name="zip"
                                value={formData.zip}
                                onChange={handleChange}
                                placeholder="Zip/Postal"
                                className="input-field border rounded-[25.5px] px-4 py-3 border-[#EEEEEE] bg-white"
                            />

                        </div>

                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Message"
                            rows="4"
                            className="input-field w-full resize-none border rounded-[25.5px] px-4 py-3 border-[#EEEEEE] bg-white"
                        />


                        <Button
                            type="submit"
                            disabled={loading}
                            className="w-full sm:w-auto !bg-[#5B5FEF] !text-white !px-10 !py-3 !rounded-[25.5px] !font-semibold flex items-center justify-center gap-2"
                        >
                            {loading && (
                                <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                            )}
                            {loading ? "Submitting..." : "Submit"}
                        </Button>


                    </form>



                </div>
            </div>
            <ToastContainer position="top-right" autoClose={2000} />

        </section>
    );
};

export default ContactSection;
