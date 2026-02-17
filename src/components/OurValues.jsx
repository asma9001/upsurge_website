import { assets } from "../assets/assets";
import {motion} from "framer-motion";
export default function OurValues() {
    const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-12 items-center"
    >
      {/* Left Content */}
      <motion.div variants={itemVariants}>
        <div className="flex items-center gap-1 mb-4">
          <span className="text-[#666666] text-2xl">✦</span>
          <span className="text-md text-[#333333]">✦</span>
          <span className="text-xs text-[#333333]">✦</span>
        </div>

        <h2 className="text-4xl font-semibold mb-4">Our Values</h2>

        <p className="text-[#999999] font-medium max-w-md">
          Our story is one of continuous growth and evolution. We started as a
          small team with big dreams, determined to create a real estate platform
          that transcended the ordinary.
        </p>
      </motion.div>

      {/* Right Card */}
      <motion.div
        variants={containerVariants}
        className="bg-white rounded-2xl shadow-sm border-[0.75px] p-7 grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        <motion.div variants={itemVariants} className="md:pr-8">
          <ValueItem
            icon={<img src={assets.star_icon} className="w-4 h-4" />}
            title="Trust"
            text="Trust is the cornerstone of every successful real estate transaction."
          />
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="md:border-l md:pl-8 border-[#262626]/15"
        >
          <ValueItem
            icon={<img src={assets.graduation} className="w-4 h-4" />}
            title="Excellence"
            text="We set the bar high for ourselves. From the properties we list to the services we provide."
          />
        </motion.div>

        <hr className="md:col-span-2 border-[#262626]/15 border-[0.75px]" />

        <motion.div variants={itemVariants} className="md:pr-8">
          <ValueItem
            icon={<img src={assets.client_icon} className="w-4 h-4" />}
            title="Client-Centric"
            text="Your dreams and needs are at the center of our universe. We listen, understand."
          />
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="md:border-l md:pl-8 border-[#262626]/15"
        >
          <ValueItem
            icon={<img src={assets.star_icon} className="w-4 h-4" />}
            title="Our Commitment"
            text="We are dedicated to providing you with the highest level of service, professionalism, and support."
          />
        </motion.div>
      </motion.div>
    </motion.section>
  );
}


function ValueItem({ icon, title, text }) {
    return (
        <div>
            <div className="flex gap-4 mb-2 items-center">
                <div className="w-10 h-10 shrink-0 flex items-center justify-center border border-[#5856D6] rounded-full ">
                    {icon}
                </div>
                <h4 className="font-semibold">{title}</h4>
            </div>

            <p className="text-[#999999]/60 font-medium text-sm">{text}</p>
        </div>
    );
}
