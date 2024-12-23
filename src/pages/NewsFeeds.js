import React, { useEffect, useState, useRef } from "react";
import { getAllNews } from "../services/newsAggregatorService";
import NewsCard from "../components/NewsCard";
import Filter from "../components/Filter";
import useFilters from "../hooks/useFilter";
import "../styles/main.css";
import Shimmer from "../components/Shimmer";

export default function NewsFeeds() {
  const [allNews, setAllNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const containerRef = useRef(null);

  const { filters, setFilters, filterNews } = useFilters();

  useEffect(() => {
    getNewsData();
  }, [page]);

  const getNewsData = async () => {
    if (!hasMore) return;

    setLoading(true);
    try {
      const newsData = await getAllNews("news", page, 10);
      if (newsData.length === 0) {
        setHasMore(false);
      } else {
        setAllNews((prevNews) => [...prevNews, ...newsData]);
      }
    } catch (error) {
      console.error("NEWS_FEEDS_PAGE:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleScroll = () => {
    const container = containerRef.current;
    if (
      container.scrollHeight - container.scrollTop <=
        container.clientHeight + 100 &&
      !loading &&
      hasMore
    ) {
      setPage((prevPage) => prevPage + 1);
    }
  };
  
  const filteredNews = filterNews(allNews);

  return (
    <div>
      <div>
        <Filter filters={filters} setFilters={setFilters} />
        <div
          ref={containerRef}
          onScroll={handleScroll}
          className="overflow-y-auto h-[70vh]"
        >
          {filterNews(allNews).map((news, index) => (
            <div key={index}>
              <NewsCard news={news} />
            </div>
          ))}
          {loading && <Shimmer />}
          {!loading && filteredNews.length === 0 && (
            <div className="flex flex-col items-center justify-center h-[70vh]">
              <p className="text-gray-400 text-lg md:text-xl font-semibold text-center px-4">
                No news available
              </p>
            </div>
          )}
          {!hasMore && (
            <div className="flex flex-col items-center justify-center h-[70vh]">
              <p className="text-gray-400 text-lg md:text-xl font-semibold text-center px-4">
                No news available on this date
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
