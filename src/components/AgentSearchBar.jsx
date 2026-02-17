import { CiSearch } from "react-icons/ci";

const AgentSearchBar = ({ search, setSearch, filters, setFilters }) => {
  return (
    <div
      className="
        bg-white rounded-xl shadow-sm p-4
       
        grid grid-cols-1 gap-3
        md:grid-cols-2
        lg:flex lg:items-center lg:gap-3
      "
    >
      {/* Search */}
      <div className="flex items-center gap-2 bg-gray-100 rounded-lg px-3 flex-1 min-w-[260px]">
        <CiSearch className="text-gray-500 text-lg" />
        <input
          type="text"
          placeholder="Searching Name, City, etc..."
          className="bg-transparent w-full py-2 text-sm outline-none"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Position */}
      <select
        value={filters.position}
        onChange={(e) =>
          setFilters({ ...filters, position: e.target.value })
        }
        className="bg-gray-100 rounded-lg px-3 py-2 text-sm flex-1 min-w-[160px]"
      >
        <option value="">Any Position</option>
        <option value="Broker">Broker</option>
        <option value="Agent">Agent</option>
      </select>

      {/* Designation */}
      <select
        value={filters.designation}
        onChange={(e) =>
          setFilters({ ...filters, designation: e.target.value })
        }
        className="bg-gray-100 rounded-lg px-3 py-2 text-sm flex-1 min-w-[160px]"
      >
        <option value="">Any Designation</option>
        <option value="Luxury">Luxury</option>
        <option value="Residential">Residential</option>
      </select>

      {/* Language */}
      <select
        value={filters.language}
        onChange={(e) =>
          setFilters({ ...filters, language: e.target.value })
        }
        className="bg-gray-100 rounded-lg px-3 py-2 text-sm flex-1 min-w-[160px]"
      >
        <option value="">Any Language</option>
        <option value="English">English</option>
        <option value="Spanish">Spanish</option>
      </select>

      {/* Button */}
      <button
        className="
          bg-indigo-600 hover:bg-indigo-700
          text-white rounded-lg text-sm font-medium
          px-6 py-2 whitespace-nowrap
        "
      >
        Filter Results
      </button>
    </div>
  );
};

export default AgentSearchBar;
