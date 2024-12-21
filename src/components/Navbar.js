import React, { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import { getAllNews } from "../services/newsAggregatorService";
import NewsCard from "./NewsCard";
import { useDispatch } from "react-redux";
import { activateSearch, deactivateSearch } from "../slice/uiSlice";

export default function Navbar({ setSearchActive }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchedArticles, setSearchedArticles] = useState([]);
  const dispatch = useDispatch();

  const onSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  useEffect(() => {
    if (searchQuery) {
      dispatch(activateSearch());
    } else {
      dispatch(deactivateSearch());
    }
    const timer = setTimeout(() => {
      getSeacrhedNews();
    }, 300);

    return () => clearTimeout(timer);
  }, [searchQuery, dispatch]);

  const getSeacrhedNews = async () => {
    if (!searchQuery) return;
    const searchResults = await getAllNews(searchQuery);
    setSearchedArticles(searchResults);
  };

  return (
    <div className="w-full">
      <div className="bg-[#1b2631] text-white p-5 sticky top-0 z-10 shadow-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <h1 className="text-2xl font-bold">News-Aggregator</h1>
          <SearchBar
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            onSearchChange={onSearchChange}
          />
        </div>
      </div>
      {searchQuery && searchedArticles && (
        <div className="max-w-7xl mx-auto p-5">
          <h2 className="text-xl font-semibold mb-4">
            You searched for - {searchQuery}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {searchedArticles.map((news, index) => (
              <NewsCard key={index} news={news} layout="compact" />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
