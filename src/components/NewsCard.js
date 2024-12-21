import React from "react";
import { Link } from "react-router-dom";

export default function NewsCard({ news, layout = "default" }) {
  if (!news) return null;

  const { title, description, redirectionUrl, imageUrl, source } = news;

  return (
    <div
      className={`${
        layout === "compact"
          ? "flex bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
          : "bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
      }`}
    >
      <div
        className={`${
          layout === "compact" ? "w-24 h-24 flex-shrink-0" : "w-full h-48"
        }`}
      >
        <img
          src={imageUrl || "https://via.placeholder.com/300x200"}
          alt="news"
          className="w-full h-full object-cover"
        />
      </div>

      <div
        className={`${
          layout === "compact"
            ? "p-4 flex flex-col justify-between"
            : "p-4 flex flex-col justify-between h-full"
        }`}
      >
        <div>
          <span className="text-xs uppercase text-gray-600 font-semibold block mb-2">
            {source || "Unknown Source"}
          </span>
          <h2
            className={`${
              layout === "compact" ? "text-sm" : "text-lg"
            } font-bold text-gray-800 mb-2 line-clamp-2 hover:text-gray-600 transition-colors`}
          >
            {title || "No Title Available"}
          </h2>
          {layout !== "compact" && (
            <p className="text-sm text-gray-700 mb-4 line-clamp-3">
              {description || "No description available."}
            </p>
          )}
        </div>
        {redirectionUrl && (
          <Link
            to={redirectionUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gray-800 text-white text-sm font-medium py-2 px-4 rounded-lg hover:bg-gray-600 transition-colors"
          >
            Read More
          </Link>
        )}
      </div>
    </div>
  );
}
