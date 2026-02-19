import { FiChevronUp, FiChevronDown, FiX } from "react-icons/fi";
import { RiArrowRightUpFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const FeaturedSection = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  const goToProperties = () => {
    navigate("/properties");
  };

  return (
    <>
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
                and invest in properties.
              </p>

              <button
                onClick={goToProperties}
                className="inline-flex items-center gap-2 bg-[#5856D6] text-white px-5 py-3 rounded-lg font-medium"
              >
                See All Properties
                <RiArrowRightUpFill className="text-xl" />
              </button>
            </div>

            {/* RIGHT CARD */}
            <div className="relative flex items-center gap-4">
              <div className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-[320px]">
                <span className="text-sm font-medium text-[#A2845EA3] block mb-2">
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

                <button
                  onClick={() => setShowModal(true)}
                  className="flex items-center gap-2 bg-[#5856D6] text-white px-5 py-3 rounded-lg font-medium w-full justify-center"
                >
                  Schedule Visit
                  <RiArrowRightUpFill className="text-xl" />
                </button>
              </div>

              {/* Arrows */}
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

      {/* ================= MODAL ================= */}
      {showModal && (
               <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm px-4">
     
                 <div className="bg-white w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-2xl shadow-xl p-6 sm:p-8 relative">
     
                   {/* Close Button */}
                   <button
                     onClick={() => setShowModal(false)}
                     className="absolute right-4 top-4 text-gray-500 hover:text-black"
                   >
                     <FiX size={20} />
                   </button>
     
                   <h2 className="text-lg sm:text-xl font-bold text-[#111827] mb-6">
                     Schedule a Visit
                   </h2>
     
                   <form className="space-y-5">
     
                     {/* Date + Time */}
                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                       <div>
                         <label className="text-sm font-semibold text-gray-600">
                           Date
                         </label>
                         <input
                           type="date"
                           className="mt-1 w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-[#5856D6] outline-none"
                         />
                       </div>
     
                       <div>
                         <label className="text-sm font-semibold text-gray-600">
                           Time
                         </label>
                         <select className="mt-1 w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-[#5856D6] outline-none">
                           <option>Morning</option>
                           <option>Afternoon</option>
                           <option>Evening</option>
                         </select>
                       </div>
                     </div>
     
                     {/* Full Name */}
                     <div>
                       <label className="text-sm font-semibold text-gray-600">
                         Full Name
                       </label>
                       <input
                         type="text"
                         placeholder="John Doe"
                         className="mt-1 w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-[#5856D6] outline-none"
                       />
                     </div>
     
                     {/* Email */}
                     <div>
                       <label className="text-sm font-semibold text-gray-600">
                         Email Address
                       </label>
                       <input
                         type="email"
                         placeholder="john@example.com"
                         required
                         className="mt-1 w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-[#5856D6] outline-none"
                       />
                     </div>
     
                     {/* Phone */}
                     <div>
                       <label className="text-sm font-semibold text-gray-600">
                         Phone
                       </label>
                       <input
                         type="tel"
                         placeholder="(555) 123-4567"
                         className="mt-1 w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-[#5856D6] outline-none"
                       />
                     </div>
     
                     {/* Message */}
                     <div>
                       <label className="text-sm font-semibold text-gray-600">
                         Message (Optional)
                       </label>
                       <textarea
                         rows="3"
                         placeholder="I'm interested in this property..."
                         className="mt-1 w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-[#5856D6] outline-none"
                       />
                     </div>
     
                     {/* Submit */}
                     <button
                       type="submit"
                       className="w-full bg-[#5856D6] hover:bg-[#4745c4] transition text-white py-3 rounded-lg font-medium"
                     >
                       Request Tour
                     </button>
     
                   </form>
                 </div>
               </div>
             )}
    </>
  );
};

export default FeaturedSection;
