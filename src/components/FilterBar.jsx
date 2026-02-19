import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";
import { useNavigate, useLocation } from "react-router-dom";

/* ---------------- Dropdown ---------------- */
const Dropdown = ({ label, options, value, onChange }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative w-full">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-4 py-3 bg-gray-100 rounded-lg text-sm text-gray-700"
      >
        {value || label}
        <FiChevronDown
          className={`transition-transform ${open ? "rotate-180" : ""}`}
        />
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

/* ---------------- FilterBar ---------------- */
const FilterBar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [status, setStatus] = useState("");
  const [label, setLabel] = useState("");
  const [type, setType] = useState("");
  const [showAdvanced, setShowAdvanced] = useState(false);

  // Advanced filters state
  const [filters, setFilters] = useState({
    location: "",
    minPrice: "",
    maxPrice: "",
    minSize: "",
    maxSize: "",
    bedrooms: "Any",
    bathrooms: "Any",
    amenities: [],
  });

  const hideViewListing =
    location.pathname === "/properties" ||
    location.pathname.startsWith("/agents/") ||
    location.pathname.startsWith("/location/") || location.pathname.startsWith("/listing");

const handleSearch = (isAdvanced = false) => {
  const advance = JSON.stringify(filters);

  // Only validate basic fields if NOT advanced search
  if (!isAdvanced && (!status || !label || !type)) {
    alert("Please select all fields before searching.");
    return;
  }

  const params = new URLSearchParams();

  if (status) params.append("status", status);
  if (label) params.append("label", label);
  if (type) params.append("type", type);

  params.append("advance", advance);

  navigate(`/listing?${params.toString()}`);
};





  const resetFilters = () => {
    setFilters({
      location: "",
      minPrice: "",
      maxPrice: "",
      minSize: "",
      maxSize: "",
      bedrooms: "Any",
      bathrooms: "Any",
      amenities: [],
    });
  };

  return (
    <div className="w-full rounded-2xl shadow-sm flex flex-col justify-center bg-white">
      {!hideViewListing && (
        <button className="text-left bg-white border-b border-[#F4F4F4] text-[#030E0F] px-6 py-3 font-medium">
          View Listings
        </button>
      )}

      <div className="bg-white p-2 sm:p-6 w-full max-w-7xl grid grid-cols-1 gap-4 sm:grid-cols-2 lg:flex lg:items-end">
        <div className="flex flex-col lg:flex-1">
          <span className="text-sm text-left font-medium mb-1">Status</span>
          <Dropdown
            label="All Status"
            options={["For Sale", "For Rent"]}
            value={status}
            onChange={setStatus}
          />
        </div>

        <div className="flex flex-col lg:flex-1 px-2">
          <span className="text-sm text-left font-medium mb-1">Labels</span>
          <Dropdown
            label="All Labels"
            options={["Hot Offer", "New"]}
            value={label}
            onChange={setLabel}
          />
        </div>

        <div className="flex flex-col lg:flex-1 px-2">
          <span className="text-sm text-left font-medium mb-1">Types</span>
          <Dropdown
            label="All Types"
            options={["Houses", "Apartments", "Villas"]}
            value={type}
            onChange={setType}
          />
        </div>

        {/* Advance Button */}
        <div className="flex flex-col lg:flex-1 px-2">
          <span className="text-sm text-left font-medium mb-1">Advance</span>
          <button
            onClick={() => setShowAdvanced(true)}
            className="w-full flex items-center justify-between px-4 py-3 bg-gray-100 rounded-lg text-sm text-gray-700"
          >
            Advance
            <img src="/toggle.svg" />
          </button>
        </div>

        <div className="flex lg:flex-none px-2">
          <button
            onClick={handleSearch}
            className="w-full lg:w-auto bg-[#5856D6] text-white px-6 py-3 rounded-lg font-medium flex items-center justify-center gap-2"
          >
            Search <CiSearch />
          </button>
        </div>
      </div>

      {/* ---------------- ADVANCED MODAL ---------------- */}
      {showAdvanced && (
        <div
          className="fixed inset-0 bg-black/40 flex items-center justify-center z-50"
          onClick={() => setShowAdvanced(false)}
        >
          <div
            className="bg-white w-full max-w-xl rounded-2xl p-8 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Location */}
            <div className="mb-4">
              <h3 className="text-sm font-semibold mb-2 text-left">
                Location
              </h3>
              <input
                type="text"
                value={filters.location}
                onChange={(e) =>
                  setFilters({ ...filters, location: e.target.value })
                }
                placeholder="City, Zip, or Address"
                className="w-full border border-[#E5E7EB] rounded-lg px-4 py-3 bg-gray-50"
              />
            </div>

            {/* Price & Size */}
            <div className="grid grid-cols-2 gap-6 mb-6">
              <div>
                <h3 className="text-sm font-semibold mb-2 text-left">
                  Price Range
                </h3>
                <div className="flex gap-3">
                  <input
                    type="number"
                    placeholder="Min"
                    className="w-full border border-[#E5E7EB] rounded-lg px-4 py-3 bg-gray-50"
                  />
                  <input
                    type="number"
                    placeholder="Max"
                    className="w-full border border-[#E5E7EB] rounded-lg px-4 py-3 bg-gray-50"
                  />
                </div>
              </div>

              <div>
                <h3 className="text-sm font-semibold mb-2 text-left">
                  Size (Sq Ft)
                </h3>
                <div className="flex gap-3">
                  <input
                    type="number"
                    placeholder="Min"
                    className="w-full border rounded-lg px-4 py-3 bg-gray-50"
                  />
                  <input
                    type="number"
                    placeholder="Max"
                    className="w-full border rounded-lg px-4 py-3 bg-gray-50"
                  />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6 mb-6">  {/* Bedrooms */}
              <div className="mb-4">
                <h3 className="text-sm font-semibold mb-2 text-left">
                  Bedrooms
                </h3>
                <div className="flex gap-2">
                  {["Any", 1, 2, 3, "4+"].map((b) => (
                    <button
                      key={b}
                      onClick={() =>
                        setFilters({ ...filters, bedrooms: b })
                      }
                      className={`px-3 py-2 rounded-lg border text-sm ${filters.bedrooms === b
                        ? "bg-[#5856D6] text-white"
                        : "bg-gray-100"
                        }`}
                    >
                      {b}
                    </button>
                  ))}
                </div>
              </div>

              {/* Bathrooms */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold mb-2 text-left">
                  Bathrooms
                </h3>
                <div className="flex gap-2">
                  {["Any", 1, 2, 3, "4+"].map((b) => (
                    <button
                      key={b}
                      onClick={() =>
                        setFilters({ ...filters, bathrooms: b })
                      }
                      className={`px-3 py-2 rounded-lg border text-sm ${filters.bathrooms === b
                        ? "bg-[#5856D6] text-white"
                        : "bg-gray-100"
                        }`}
                    >
                      {b}
                    </button>
                  ))}
                </div>
              </div>
            </div>





            {/* Buttons */}
            <div className="flex justify-end gap-4">
              <button
                onClick={resetFilters}
                className="text-gray-500 font-medium"
              >
                Reset Filters
              </button>
             <button
  onClick={() => {
    setShowAdvanced(false);
    handleSearch(true); // 🔥 pass true
  }}
  className="bg-[#5856D6] text-white px-6 py-3 rounded-lg font-medium"
>
  Apply Filters
</button>


            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FilterBar;
