import { useLocation, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import { agents, assets } from "../assets/assets";
import {
    FaStar,
    FaEnvelope,
    FaPhoneAlt,
    FaGlobe,
    FaFacebookF,
    FaLinkedinIn,
    FaInstagram,
} from "react-icons/fa";
import Testimonials from "../components/Testimonials";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";

const AgentDetail = () => {
    const { id } = useParams();
    const { state } = useLocation();

    const [agent, setAgent] = useState(state?.agent || null);
    const [loading, setLoading] = useState(!state?.agent);

    // ✅ If page refresh → fetch agent
    useEffect(() => {
        if (!agent) {
            const fetchAgent = async () => {
                const { data, error } = await supabase
                    .from("agents")
                    .select("*")
                    .eq("id", id)
                    .single();

                if (!error) {
                    setAgent(data);
                }

                setLoading(false);
            };

            fetchAgent();
        }
    }, [id, agent]);

    if (loading) {
        return (
            <div className="flex justify-center items-center py-32">
                <div className="w-10 h-10 border-4 border-[#5856D6] border-t-transparent rounded-full animate-spin"></div>
            </div>
        );
    }

    if (!agent) {
        return <p className="text-center mt-20">Agent not found</p>;
    }

    return (
        <>
            <Navbar />

            <div className="pt-24 md:pt-32 pb-8">
                <div className="max-w-6xl mx-auto p-4 sm:p-6 md:p-8">
                    <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-10">

                        {/* LEFT IMAGE */}
                        <div className="relative">
                            <img
                                src={agent.photo_url}
                                alt={agent.full_name}
                                className="rounded-xl w-full h-[240px] sm:h-[280px] lg:h-[310px] object-cover"
                            />
                             {/* Rating overlay */}
                           <div className="absolute bottom-4 left-4 text-white px-3 py-2 rounded-lg flex flex-col bg-black/40 backdrop-blur-sm">

                                {/* Stars row */}
                                <div className="flex gap-2">
                                    {[...Array(5)].map((_, i) => (
                                        <FaStar key={i} className="text-yellow-400 text-md mb-1" />
                                    ))}
                                </div>

                                {/* Rating text */}
                                <div className="flex gap-2 items-center">
                                    <span className="text-xs mt-1">4.9/5.0</span>
                                    <span className="text-xs mt-1">Rating</span>
                                </div>

                            </div>
                        </div>

                        {/* RIGHT CONTENT */}
                        <div>
                            <h1 className="text-xl sm:text-2xl font-bold text-[#0F172A]">
                                {agent.full_name}
                            </h1>

                            <p className="text-[#2563EB] font-medium mt-1">
                                {agent.role}
                            </p>

                            <p className="text-sm text-[#9CA3AF] mt-1">
                                Lic: {agent.license || "NC-123456"}
                            </p>

                            <p className="text-sm text-[#374151] mt-4 leading-relaxed">
                                {agent.description || "With over 15 years of experience in the Charlotte real estate market,Helen brings unparalleled expertise and dedication to every transaction.As our Broker-in -Charge, she leads our team with integrity and a commitment to excellence.Her deep understanding of luxury properties and investment opportunities has helped countless clients achieve their real estate goals."}
                            </p>

                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 font-bold text-[#0F172A] mt-6">


                                <Stat value={agent.homesSold || "250+"} label="Homes Sold" />
                                <Stat value={agent.experience || "15 Years"} label="Experience" />
                                <Stat value={agent.rating || "4.9/5.0"} label="Client Rating" />
                                <Stat value={agent.sales || "$45M+"} label="Sales Volume" />
                            </div>

                            {/* BUTTONS */}
                            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 mt-6">

                                <a
                                    href={`mailto:${agent.email}`}
                                    className="flex items-center gap-2 px-5 py-2 rounded-lg bg-[#0F172A] text-white text-sm font-medium"
                                >
                                    <img
                                        src={assets.email_icon}
                                        alt="Email"
                                        className="w-4 h-4 filter brightness-0 invert"
                                    />
                                    Email Me
                                </a>

                                <a
                                    href={`tel:${agent.phone}`}
                                    className="flex items-center gap-2 px-5 py-2 rounded-lg bg-blue-600 text-white text-sm font-medium"
                                >
                                    <img
                                        src={assets.phone_icon}
                                        alt="Phone"
                                        className="w-4 h-4 filter brightness-0 invert"
                                    />
                                    Call Now
                                </a>


                                <a
                                    href={agent.website}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex items-center gap-2 px-5 py-2 rounded-lg text-[#334155] border border-[#CBD5E1] text-sm font-medium"
                                >
                                    <FaGlobe /> Visit Website
                                </a>

                            </div>

                            {/* SOCIALS */}
                            <div className="flex items-center gap-4 mt-7">
                                <span className="text-sm text-[#4B5563] font-medium">Connect:</span>


                                <a href={agent.facebook} className="bg-[#F3F4F6] rounded-full shadow-lg">
                                    <img src={assets.facebook_icon} alt="Facebook" className="w-4 h-4 " />
                                </a>


                                <a href={agent.linkedin} className=" bg-[#F3F4F6] rounded-full shadow-lg">
                                    <img src={assets.linkedin_icon} alt="LinkedIn" className="w-4 h-4 " />
                                </a>

                                <a href={agent.instagram} className=" bg-[#F3F4F6] rounded-full shadow-lg">
                                    <img src={assets.instagram_icon} alt="Instagram" className="w-4 h-4 " />
                                </a>



                            </div>
                        </div>

                    </div>
                </div>
            </div>
  <div className="bg-[#F9FAFB]"> <div className="max-w-6xl grid grid-cols-2 md:grid-cols-4 gap-4 container mx-auto px-4 sm:px-5 py-11">

                <h2 className="col-span-2 md:col-span-4 text-xl font-bold text-[#0F172A] mb-2">Areas of Expertise</h2>
                <div className="bg-white border border-[#E5E7EB] shadow-md rounded-lg py-4  flex flex-col px-5 gap-1">
                    <img src={assets.lamp_icon} alt="Luxury Homes" className="w-6 h-6  mb-2" />
                    <p className="text-sm text-[#0F172A] font-semibold">Luxury Homes</p>
                </div>

                <div className="bg-white border border-[#E5E7EB] shadow-md rounded-lg py-4  flex flex-col px-5 gap-1">
                    <img src={assets.lamp_icon} alt="First-Time Buyers" className="w-6 h-6  mb-2" />
                    <p className="text-sm text-[#0F172A] font-semibold">First-Time Buyers</p>
                </div>

                <div className="bg-white border border-[#E5E7EB] shadow-md rounded-lg py-4  flex flex-col px-5 gap-1">
                    <img src={assets.lamp_icon} alt="Investment Properties" className="w-6 h-6  mb-2" />
                    <p className="text-sm text-[#0F172A] font-semibold">Investment Properties</p>
                </div>

                <div className="bg-white border border-[#E5E7EB] shadow-md rounded-lg py-4  flex flex-col px-5 gap-1">
                    <img src={assets.lamp_icon} alt="Investment Properties" className="w-6 h-6  mb-2" />
                    <p className="text-sm text-[#0F172A] font-semibold">Relocation Services</p>
                </div>
            </div>
            </div>
            <Testimonials />
            <ContactSection />
            <Footer />
        </>
    );
};


/* Reusable Stat Card */
const Stat = ({ value, label }) => (
    <div className="bg-[#F3F4F6] border border-[#F3F4F6] rounded-lg py-4 text-center">
        <p className="font-bold text-[#0F172A]">{value}</p>
        <p className="text-xs text-[#6B7280] mt-1">{label}</p>
    </div>
);

export default AgentDetail;
