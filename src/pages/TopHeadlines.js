import React, { useEffect, useState } from "react";
import { getHeadlines } from "../services/newsAggregatorService";
import NewsCard from "../components/NewsCard";
import ShimmerCard from "../components/Shimmer";

export default function TopHeadlines() {
  const [headlines, setHeadlines] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getHeadlinesData();
  }, []);

  const getHeadlinesData = async () => {
    setLoading(true);
    try {
      const headlinesData = await getHeadlines("news");
      setHeadlines(headlinesData);
      setLoading(false);
    } catch (err) {
      console.log("TOP_HEADLINES_PAGE_ERROR", err);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div>
      {loading && (
        <ShimmerCard width="w-full" height="h-40" layout="vertical" />
      )}
      {headlines &&
        headlines?.slice(3, 7)?.map((headline) => (
          <div>
            <NewsCard news={headline} />
          </div>
        ))}
    </div>
  );
}
