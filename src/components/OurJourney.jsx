import React from "react";
import { motion } from "framer-motion";

const OurJourney = ({ starColor = "#6D6BDB" }) => {
  // Animation variants
  const fadeInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          className="text-center lg:text-left space-y-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Stars */}
          <motion.div
            className="flex items-center gap-1 mb-4"
            variants={fadeInLeft}
            transition={{ delay: 0.1 }}
          >
            <span className="text-2xl" style={{ color: starColor }}>✦</span>
            <span className="text-md" style={{ color: starColor }}>✦</span>
            <span className="text-xs" style={{ color: starColor }}>✦</span>
          </motion.div>

          {/* Title */}
          <motion.h2
            className="text-2xl sm:text-3xl font-semibold text-black mb-4"
            variants={fadeInLeft}
            transition={{ delay: 0.2 }}
          >
            Our Journey
          </motion.h2>

          {/* Description */}
          <motion.p
            className="text-[#999999] max-w-xl mx-auto lg:mx-0 leading-relaxed mb-8"
            variants={fadeInLeft}
            transition={{ delay: 0.3 }}
          >
            Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary. Over the years, we've expanded our reach, forged valuable partnerships, and gained the trust of countless clients.
          </motion.p>

          {/* STATS */}
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
            <motion.div
              className="border border-[#26262699] rounded-xl px-6 py-4 flex-1 text-center sm:text-left"
              variants={fadeInUp}
              transition={{ delay: 0.4 }}
            >
              <h3 className="text-2xl font-bold mb-1">200+</h3>
              <p className="text-sm text-[#999999] font-medium">Happy Customers</p>
            </motion.div>

            <motion.div
              className="border border-[#26262699] rounded-xl px-6 py-4 flex-1 text-center sm:text-left"
              variants={fadeInUp}
              transition={{ delay: 0.5 }}
            >
              <h3 className="text-2xl font-bold mb-1">10k+</h3>
              <p className="text-sm text-[#999999] font-medium">Properties For Clients</p>
            </motion.div>

            <motion.div
              className="border border-[#26262699] rounded-xl px-6 py-4 flex-1 text-center sm:text-left"
              variants={fadeInUp}
              transition={{ delay: 0.6 }}
            >
              <h3 className="text-2xl font-bold mb-1">16+</h3>
              <p className="text-sm text-[#999999] font-medium">Years of Experience</p>
            </motion.div>
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          className="flex justify-center lg:justify-end mt-8 lg:mt-0"
          variants={fadeInRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.7 }}
        >
          <img
            src="/houseImg.png"
            alt="House on hand"
            className="w-full max-w-sm md:max-w-md object-contain"
          />
        </motion.div>

      </div>
    </section>
  );
};

export default OurJourney;
