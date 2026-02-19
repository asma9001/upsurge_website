import { FiMail, FiPhone, FiGlobe } from "react-icons/fi";
import { assets } from "../assets/assets";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

const AgentCard = ({ agent }) => {
  const navigate = useNavigate();

  const goToProfile = () => {
    navigate(`/agents/${agent.id}`, {
      state: { agent },
    });
  };
  const handleContactClick = () => {
    navigate(`/agents/${agent.id}`, {
      state: { agent, scrollToContact: true },
    });
  };
  const handleListingsClick = () => {
    navigate(`/agents/${agent.id}/properties`, {
      state: { agent },
    });
  };


  return (
    <div className="bg-white rounded-2xl shadow-sm border border-[#E5E7EB] overflow-hidden flex flex-col">

      {/* Image */}
      <div className="relative h-50 overflow-hidden">
        <img
          src={agent.photo_url}
          alt={agent.name}
          className="w-full h-full object-cover"
        />
        <button
          onClick={goToProfile} // navigate to detail page
          className="absolute cursor-pointer text-[#0F172A] bottom-4 left-1/2 -translate-x-1/2 bg-white px-4 py-1 text-sm rounded-full shadow"
        >
          View Profile
        </button>
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col gap-3 flex-1">
        <h3 className="font-semibold text-lg  text-[#0F172A]">
          {agent.full_name}
        </h3>

        <span className="text-[#2563EB] text-sm font-medium mt-0">
          {agent.role}
        </span>

        <span className="text-xs text-[#9CA3AF]">{agent.license || "Lic: NC-123456"}</span>

        <div className="space-y-3 text-sm text-[#4B5563]">
          <p className="flex items-center gap-3">
            <span className="w-8 h-8 flex items-center justify-center rounded-full bg-[#F9FAFB] border border-[#E5E7EB]">
              <img
                src={assets.email_icon}
                alt="Email"
                className="w-4 h-4 filter font-bold text-[#4B5563] brightness-0 "
              />
            </span>
            {agent.email}
          </p>

          <p className="flex items-center gap-3">
            <span className="w-8 h-8 flex items-center justify-center rounded-full bg-[#F9FAFB] border border-[#E5E7EB]">
              <img
                src={assets.location_icon}
                alt="Office"
                className="w-4 h-4 filter font-bold text-[#4B5563] brightness-0 "
              />
            </span>
            Office: {agent.location}
          </p>

          <p className="flex items-center gap-3">
            <span className="w-8 h-8 flex items-center justify-center rounded-full bg-[#F9FAFB] border border-[#E5E7EB]">
              <img
                src={assets.phone_icon}
                alt="Phone"
                className="w-4 h-4 filter font-bold text-[#4B5563] brightness-0 "
              />
            </span>
            Cell: {agent.phone}
          </p>

          <p className="flex items-center gap-3">
            <span className="w-8 h-8 flex items-center justify-center rounded-full bg-[#F9FAFB] border border-[#E5E7EB]">
              <FiGlobe className="text-[#4B5563]" />
            </span>
            Visit Website
          </p>
        </div>

        {/* Buttons */}
        <div className="mt-auto flex gap-3 pt-4">
          <Button onClick={handleContactClick}
            text="Contact" className="flex-1 text-white !font-medium !py-2 !px-5 text-sm transition" />
          <Button
            onClick={handleListingsClick}
            text="Listings"
            className="flex-1 !border !py-2 !border-[#E5E7EB] !text-[#334155] !bg-white !px-5 text-sm"
          />

        </div>
      </div>
    </div>
  );
};

export default AgentCard;

