import { FiChevronUp, FiChevronDown } from "react-icons/fi";
import { RiArrowRightUpFill } from "react-icons/ri";

const FeaturedSection = () => {
  return (
    <section
      className="relative w-full min-h-[520px] bg-cover bg-center flex items-center"
      style={{ backgroundImage: "url('/Featured.png')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#A2845E]/60" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 sm:px-10 lg:px-32 py-16">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">

          {/* LEFT CONTENT */}
          <div className="max-w-xl text-white text-center lg:text-left">
            <span className="inline-block text-sm sm:text-md px-3 py-1 mb-4 rounded-sm bg-white/20 backdrop-blur">
              Our Best Featured Item
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight mb-4">
              Our Featured <br className="hidden sm:block" /> Items
            </h2>

            <p className="text-sm sm:text-md max-w-md mx-auto lg:mx-0 text-white/80 mb-6">
              At HouseBox, we’re redefining the way people find, sell,
              and invest in properties, our mission.
            </p>

            <button className="inline-flex items-center gap-2 bg-[#5856D6] text-white px-5 py-3 rounded-lg font-medium">
              See All Properties
              <RiArrowRightUpFill className="text-xl" />
            </button>
          </div>

          {/* RIGHT CARD */}
          <div className="relative flex items-center gap-4">

            {/* Property Card */}
            <div className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-[320px]">
              <span className="text-sm font-medium text-[#A2845EA3] block mb-2">
                <img
                  src="/Location.png"
                  alt="location"
                  className="w-4 h-4 inline mr-2"
                />
                60002 Just Mead East Alfonso
              </span>

              <h3 className="text-2xl sm:text-3xl font-bold mb-4">
                Moon Light Villa
              </h3>

              <div className="flex items-center gap-3 mb-5">
                <span className="line-through text-[#030E0F] font-medium text-sm">
                  $1,900,000
                </span>
                <span className="text-lg font-bold text-[#A2845EA3]">
                  $1,800,000
                </span>
              </div>

              <button className="flex items-center gap-2 bg-[#5856D6] text-white px-5 py-3 rounded-lg font-medium w-full justify-center">
                Schedule Visit
                <RiArrowRightUpFill className="text-xl" />
              </button>
            </div>

            {/* Arrow Controls (hidden on mobile) */}
            <div className="hidden lg:flex flex-col gap-3">
              <button className="bg-white w-10 h-10 rounded-full shadow flex items-center justify-center hover:bg-gray-100">
                <FiChevronUp />
              </button>
              <button className="bg-white w-10 h-10 rounded-full shadow flex items-center justify-center hover:bg-gray-100">
                <FiChevronDown />
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
