import React from 'react';
import { motion } from 'framer-motion';

const Achievements = () => {

    // Animation variants
    const cardVariants = {
        offscreen: {
            y: 50,
            opacity: 0
        },
        onscreen: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                bounce: 0.3,
                duration: 0.8
            }
        }
    };

    return (
        <section className="max-w-6xl mx-auto px-6 py-16">

            {/* Left Content */}
            <div className="mb-12">
                <div className="flex items-center gap-1 mb-4">
                    <span className="text-[#666666] text-2xl">✦</span>
                    <span className="text-md text-[#333333]">✦</span>
                    <span className="text-xs text-[#333333]">✦</span>
                </div>

                <h2 className="text-4xl font-semibold mb-4">Our Achievements</h2>

                <p className="text-[#999999]/60 font-medium max-w-4xl">
                    Our story is one of continuous growth and evolution. We started as a
                    small team with big dreams, determined to create a real estate platform
                    that transcended the ordinary.
                </p>
            </div>

            {/* Achievement Cards */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">

                {[
                    {
                        title: "3+ Years of Excellence",
                        desc: "With over 3 years in the industry, we've amassed a wealth of knowledge and experience, becoming a go-to resource for all things real estate."
                    },
                    {
                        title: "Happy Clients",
                        desc: "Our greatest achievement is the satisfaction of our clients. Their success stories fuel our passion for what we do."
                    },
                    {
                        title: "Industry Recognition",
                        desc: "We've earned the respect of our peers and industry leaders, with accolades and awards that reflect our commitment to excellence."
                    }
                ].map((item, idx) => (
                    <motion.div
                        key={idx}
                        className="border border-[#262626]/15 rounded-xl px-6 py-8 bg-white shadow-sm"
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{ once: true, amount: 0.5 }}
                        variants={cardVariants}
                    >
                        <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                        <p className="text-sm text-[#999999]/60 font-medium">{item.desc}</p>
                    </motion.div>
                ))}

            </div>
        </section>
    );
};

export default Achievements;
