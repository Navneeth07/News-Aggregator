import React from "react";
import SearchIcon from "../assets/Search.svg";

export default function SearchBar({ searchQuery, onSearchChange }) {
  return (
    <div className="relative w-full max-w-lg">
      <input
        type="text"
        placeholder="Search news..."
        className="w-full pl-12 pr-4 py-2 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 border text-black border-gray-300"
        value={searchQuery}
        onChange={onSearchChange}
      />
      <span className="block absolute left-4 top-1/2 transform -translate-y-1/2 text-black">
        <img src={SearchIcon} alt="Search" className="w-5 h-5" />{" "}
      </span>
    </div>
  );
}
