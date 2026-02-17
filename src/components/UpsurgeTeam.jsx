import React from "react";
import { FaTwitter } from "react-icons/fa";

// Sample team data
const teamMembers = [
    { name: "Helen Edwards-Jackson", role: "Broker-In-Charge", image: "/agent1.png", twitter: "#" },
    { name: "James Edwards III", role: "Realtor", image: "/agent2.jpg", twitter: "#" },
    { name: "Nathalie Fongang", role: "Realtor", image: "/agent3.jpg", twitter: "#" },
    { name: "Trever Swint", role: "Realtor", image: "/agent4.jpg", twitter: "#" },
];

const TeamSection = () => {
    return (
        <section className="max-w-6xl mx-auto px-4 pb-12">
            {/* Heading */}
            <div className="mb-14 text-center md:text-left">
                <div className="flex justify-center md:justify-start items-center gap-1 mb-4">
                    <span className="text-[#666666] text-2xl">✦</span>
                    <span className="text-md text-[#333333]">✦</span>
                    <span className="text-xs text-[#333333]">✦</span>
                </div>

                <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-gray-900">
                    Meet the <span className="text-indigo-600">Upsurge</span> Team
                </h2>

                <p className="text-[#999999]/60 font-medium max-w-4xl mx-auto md:mx-0">
                    At Estatein, our success is driven by the dedication and expertise of our team. Get to know the people behind our mission to make your real estate dreams a reality.
                </p>
            </div>

            {/* Team Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                {teamMembers.map((member, idx) => (
                    <div
                        key={idx}
                        className="relative border-[0.75px] border-[#262626] rounded-xl p-4 flex flex-col items-center bg-white shadow-sm"
                    >
                        {/* Image */}
                        <div className="w-full rounded-lg overflow-hidden">
                            <img
                                src={member.image}
                                alt={member.name}
                                className="w-full h-48 object-cover"
                            />
                        </div>

                        {/* Name & Role */}
                        <div className="mt-6 text-center">
                            <h3 className="font-semibold">{member.name}</h3>
                            <p className="text-[#999999]/60 font-medium text-sm">{member.role}</p>
                        </div>

                       <a
                            href={member.twitter}
                            className="absolute bottom-17 bg-indigo-600 text-white py-2 px-4 rounded-full shadow-md"
                        >
                            <FaTwitter size={16} />
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default TeamSection;
