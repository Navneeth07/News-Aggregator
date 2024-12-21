import React from "react";

export default function ShimmerCard({
  width = "w-full",
  height = "h-40",
  layout = "vertical",
}) {
  const isHorizontal = layout === "horizontal";

  return (
    <div
      className={`space-y-4 p-4 border border-gray-200 rounded-lg shadow-md bg-white overflow-hidden relative ${
        isHorizontal ? "flex space-x-4 items-start" : ""
      }`}
    >
      <div
        className={`relative z-10 bg-gray-300 rounded-md ${
          isHorizontal ? "flex-shrink-0" : ""
        } ${width} ${height}`}
      ></div>
      <div className="relative z-10 flex-1 space-y-3">
        <div className="h-4 bg-gray-300 rounded w-3/4"></div>
        <div className="h-3 bg-gray-300 rounded w-full"></div>
        <div className="h-3 bg-gray-300 rounded w-5/6"></div>
        <div className="h-8 bg-gray-300 rounded w-1/4"></div>
      </div>
    </div>
  );
}
