import { FiMail, FiPhone, FiExternalLink } from "react-icons/fi";
import { assets } from "../assets/assets";

const LocalExpert = () => {
  const phoneNumber = "9803755150"; // Agent phone
  const emailAddress = "helen@upsurgerealty.com"; // Agent email

  return (
    <section className="w-full px-6 py-10 md:px-16 bg-white">
      {/* Section title */}
      <div className="flex items-center gap-2 mb-6">
        <span className="w-1 h-5 bg-indigo-600 rounded-sm"></span>
        <h2 className="text-lg font-bold text-[#0F172A]">
          Your Local Expert
        </h2>
      </div>

      {/* Main container */}
      <div className="border border-[#F0F3F7] rounded-2xl p-6 md:p-8 grid grid-cols-1 lg:grid-cols-3 gap-8">

        {/* LEFT CARD */}
        <div className="bg-[#F8FAFC] rounded-xl p-6 text-center">

          {/* Avatar */}
          <div className="relative w-28 h-28 mx-auto mb-4">
            <img
              src={assets.agent1}
              alt="Helen Edwards-Jackson"
              className="w-full h-full rounded-full object-cover border-4 border-white shadow"
            />
            <span className="absolute bottom-1 right-1 w-7 h-7 bg-[#2563EB] text-white rounded-full flex items-center justify-center text-xs">
              <img src={assets.tick_mark} alt="Verified" className="w-4 h-4" />
            </span>
          </div>

          <h3 className="text-lg font-bold text-[#0F172A]">
            Helen Edwards-Jackson
          </h3>

          <p className="text-sm text-[#2563EB] font-medium mt-1">
            Broker-in-Charge
          </p>

          <p className="text-xs text-[#9CA3AF] mt-1">
            Lic: 292656
          </p>

          {/* Buttons */}
          <div className="mt-5 space-y-3">
            <a
              href={`tel:${phoneNumber}`}
              className="w-full flex items-center justify-center gap-2 bg-[#5856D6] text-white py-2 rounded-lg text-sm font-medium"
            >
              <FiPhone />
              {phoneNumber}
            </a>

            <a
              href={`mailto:${emailAddress}`}
              className="w-full flex items-center justify-center gap-2 border border-[#CBD5E1] text-[#334155] py-2 rounded-lg text-sm font-medium"
            >
              <FiMail />
              Email Agent
            </a>
          </div>

          <hr className="my-9 border-[#D1D5DB]" />
          <div className="flex items-center gap-3 justify-center">
            <img src={assets.upsurge_image} className="w-5 h-5 rounded-lg " alt="Upsurge Realty" />
            <p className="text-sm font-semibold">
              Upsurge Realty
            </p>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="lg:col-span-2 space-y-6">
          {/* Quote */}
          <div className="bg-[#EFEFFF] border-l-4 border-[#5856D6] p-4 font-medium text-sm text-[#334155]">
            “Upsurge Realty is the pillar to the next level. Real estate is an
            ever-changing career that keeps us constantly learning and evolving
            to change.”
          </div>

          {/* Bio */}
          <p className="text-sm text-[#475569] leading-relaxed">
            <span className="font-medium text-black">
              Meet Queen Helen – Broker-In-Charge.
            </span>{" "}
            Helen is a graduate from King’s College where she received an
            Associate of Applied Sciences. Her ability to educate, lead, and
            care for others is what established her career in real estate.
          </p>

          <p className="text-sm text-[#475569] leading-relaxed">
            Known by clients and colleagues for her loyalty, integrity, and
            professionalism, Helen is earning a reputation as one of the most
            trusted and admired agents in the Carolinas and Georgia markets.
          </p>

          <p className="text-sm text-[#475569] leading-relaxed">
            When Helen is not practicing real estate she enjoys self-care, a trip to the movies, traveling and enjoying the biggest bucket of popcorn you can find.
          </p>

          {/* Info cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-[#F8FAFC] rounded-lg p-4">
              <h4 className="text-sm font-semibold text-[#0F172A] mb-1">
                Personal Interests
              </h4>
              <p className="text-xs text-[#475569]">
                Teaching, praying, creating vision boards, throwing parties,
                and serving others.
              </p>
            </div>

            <div className="bg-[#F8FAFC] rounded-lg p-4">
              <h4 className="text-sm font-semibold text-[#0F172A] mb-1">
                Family Life
              </h4>
              <p className="text-xs text-[#475569]">
                Loves spending time with her husband and three children: Justin,
                Mackenzie, and Brayden.
              </p>
            </div>
          </div>

          {/* Footer link */}
          <p className="text-xs text-[#64748B]">
            Also runs a travel agency:{" "}
            <a
              href="https://www.journeyoftheworld.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#5856D6] inline-flex items-center gap-1 hover:underline"
            >
              www.journeyoftheworld.com
              <FiExternalLink />
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default LocalExpert;
