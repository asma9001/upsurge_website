import { FiArrowLeft, FiInfo } from "react-icons/fi";
import { assets } from "../assets/assets";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

const HomeEstimate = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full bg-white">
      <div className="px-6 py-6 md:px-16">
        {/* Top Header */}
        <div className="flex items-center gap-3 mb-2">
          <FiArrowLeft className="text-lg text-[#334155] cursor-pointer" />
          <span className="text-sm font-medium text-[#64748B]">Home Estimate For</span>
        </div>

        <div className="ml-7">
          <h1 className="text-xl sm:text-2xl font-bold text-[#0F172A]">
            CHMELKA ROAD
          </h1>

          <p className="text-sm text-gray-500 flex items-center gap-1 mt-1">
            <span>
              <img
                src={assets.location_icon}
                className="w-4 h-4 text-[#475569] filter brightness-0"
                alt="Location"
              />
            </span>{" "}
            Finney County, KS 67851
          </p>
        </div>
      </div>

      <hr className="border-[#D1D5DB] w-full" />

      <div className="px-6 py-6 md:px-16">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6">
          <div className="flex items-center gap-2">
            <span className="w-1 h-5 bg-blue-600 rounded-sm"></span>
            <h2 className="text-xl font-bold text-[#0F172A]">
              Home Price Estimates
            </h2>
          </div>

          <button className="flex font-medium items-center gap-1 text-sm text-[#334155]">
            <img
              src={assets.info_icon}
              className="w-4 h-4 text-[#475569] filter brightness-0"
              alt="Info"
            />
            How is this calculated?
          </button>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* ATTOM Card */}
          <div className="border border-[#E2E8F0] rounded-xl p-6 text-center bg-white shadow-sm">
            <h3 className="text-sm text-[#1E293B] mb-2">
              ATTOM<span className="text-[#EF4444]">*</span>
            </h3>

            <div className="flex justify-center mb-2">
              <div className="w-10 h-10 flex items-center justify-center rounded-full">
                <FiInfo className="text-[#94A3B8] size-7" />
              </div>
            </div>

            <p className="text-[#64748B] font-semibold">Not available</p>
            <p className="text-xs text-[#64748B] mt-1">
              Insufficient data for estimate
            </p>
          </div>

          {/* Zillow Card */}
          <div className="border border-[#E2E8F0] rounded-xl p-6 text-center bg-white shadow-sm">
            <h3 className="text-sm font-bold text-[#2563EB] mb-4">
              Zillow
            </h3>

            <div className="flex justify-center mb-2">
              <div className="w-10 h-10 flex items-center justify-center rounded-full">
                <FiInfo className="text-[#94A3B8] size-7" />
              </div>
            </div>

            <p className="text-[#64748B] font-semibold">Not available</p>
            <p className="text-xs text-[#64748B] mt-1">
              Insufficient data for estimate
            </p>
          </div>
        </div>

        {/* Info Box */}
        <div className="border mt-10 bg-[#FDFDFF] border-[#5856D6] rounded-xl gap-4 flex flex-col sm:flex-row p-6 shadow-sm">
          {/* Icon container */}
          <div className="flex items-center justify-center w-9 h-9 sm:w-10 sm:h-8 rounded-full bg-[#5856D6]/10 border border-[#5856D6]">
            <FiInfo className="text-[#5856D6] text-md" />
          </div>

          <div className="flex gap-2 text-[#5856D6] flex-col">
            <p className="text-lg font-bold">
              Why are these estimates unavailable?
            </p>

            <p className="text-sm text-[#64748B]">
              Independent price estimates are based on statistical models that aggregate
              available data to form an estimate of market value — not local experts.
              They don’t walk through your home or verify condition.
            </p>

            <p className="text-sm">
              I do. Ask me how I’d price your home in today’s market.
            </p>

            <Button
              text="Request Professional Valuation"
              className="!bg-[#5856D6] !text-white cursor-pointer !px-7 !py-2 rounded-lg font-medium w-full sm:w-max text-sm mt-2"
              onClick={() => navigate("/agents")} // ✅ Navigate to /agents
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeEstimate;
