import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

// Dropdown component
const Dropdown = ({ label, options, value, onChange }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative w-full">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-4 py-3 bg-gray-100 rounded-lg text-sm text-gray-700"
      >
        {value || label}
        <FiChevronDown className={`transition-transform ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        <div className="absolute top-full mt-2 left-0 w-full bg-white rounded-lg shadow-lg border z-30">
          {options.map((item, i) => (
            <div
              key={i}
              onClick={() => {
                onChange(item);
                setOpen(false);
              }}
              className="px-4 py-2 text-sm text-gray-600 hover:bg-gray-100 cursor-pointer"
            >
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

// FilterBar component
const FilterBar = () => {
  const navigate = useNavigate();

  // Selected values state
  const [status, setStatus] = useState("");
  const [label, setLabel] = useState("");
  const [type, setType] = useState("");
  const [advance, setAdvance] = useState("");

const handleSearch = () => {
  // Check if any dropdown is empty
  if (!status || !label || !type || !advance) {
    alert("Please select all fields before searching.");
    return; // Prevent navigation
  }

  // Pass selected values as query params
  const params = new URLSearchParams();
  params.append("status", status);
  params.append("label", label);
  params.append("type", type);
  params.append("advance", advance);

  navigate(`/listing?${params.toString()}`);
};



  return (
  <div className="w-full  rounded-2xl shadow-xl flex flex-col justify-center bg-white ">

      <button
        className=" text-left gap-2 bg-white border-b border-[#F4F4F4] text-[#030E0F] px-6 py-3  font-medium "
        
      >
        View Listings
      </button>
      <div className="bg-white  p-4 sm:p-6 w-full max-w-7xl grid grid-cols-1 gap-4 sm:grid-cols-2 lg:flex lg:items-end">

        {/* Status */}
        <div className="flex flex-col lg:flex-1 px-2">
          <span className="text-sm text-left font-medium mb-1">Status</span>
          <Dropdown label="All Status" options={["For Sale", "For Rent"]} value={status} onChange={setStatus} />
        </div>

        <span className="hidden lg:block h-12 w-px bg-[#F4F4F4]" />

        {/* Labels */}
        <div className="flex flex-col lg:flex-1 px-2">
          <span className="text-sm text-left font-medium mb-1">Labels</span>
          <Dropdown label="All Labels" options={["Hot Offer", "New"]} value={label} onChange={setLabel} />
        </div>

        <span className="hidden lg:block h-12 w-px bg-[#F4F4F4]" />

        {/* Types */}
        <div className="flex flex-col lg:flex-1 px-2">
          <span className="text-sm text-left font-medium mb-1">Types</span>
          <Dropdown label="All Types" options={["House", "Apartments", "Villas"]} value={type} onChange={setType} />
        </div>

        <span className="hidden lg:block h-12 w-px bg-[#F4F4F4]" />

        {/* Advance */}
        <div className="flex flex-col lg:flex-1 px-2">
          <span className="text-sm text-left font-medium mb-1">Advance</span>
          <Dropdown label="Advance" options={["Newest First", "Price: Low to High", "Price: High to Low"]} value={advance} onChange={setAdvance} />
        </div>

        {/* Search Button */}
        <div className="flex lg:flex-none px-2">
          <button
            onClick={handleSearch}
            className="w-full lg:w-auto bg-[#5856D6] hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-medium flex items-center justify-center gap-2"
          >
            Search
            <CiSearch className="text-xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
