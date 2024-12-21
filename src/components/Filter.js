import React from "react";

export default function Filter({ filters, setFilters }) {
  return (
    <div className="p-4 flex flex-wrap gap-4 items-center bg-gray-50 rounded-lg shadow-md">
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 w-full sm:w-auto">
        <label htmlFor="source" className="text-gray-600 font-medium">
          Source Name
        </label>
        <input
          id="source"
          type="text"
          placeholder="e.g., BBC, Reuters"
          value={filters.source || ""}
          onChange={(e) =>
            setFilters((prev) => ({ ...prev, source: e.target.value }))
          }
          className="w-full sm:w-auto px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-200"
        />
      </div>

      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 w-full sm:w-auto">
        <label htmlFor="date" className="text-gray-600 font-medium">
          Date
        </label>
        <input
          id="date"
          type="date"
          value={filters.date || ""}
          onChange={(e) =>
            setFilters((prev) => ({ ...prev, date: e.target.value }))
          }
          className="w-full sm:w-auto px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-200"
        />
      </div>
    </div>
  );
}
