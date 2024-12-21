import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getHeadlines } from "../services/newsAggregatorService";
import NewsCard from "../components/NewsCard";
import Shimmer from "../components/Shimmer";
import { useDispatch } from "react-redux";
import { hideMainSections } from "../slice/uiSlice";

export default function CategoryPage() {
  const { category } = useParams();
  const dispatch = useDispatch();
  const [categoryNews, setCategoryNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    dispatch(hideMainSections());
    fetchCategoryNews();
  }, [dispatch, category]);

  const fetchCategoryNews = async () => {
    setLoading(true);
    try {
      const newsData = await getHeadlines("news", category);
      setCategoryNews(newsData);
    } catch (error) {
      console.error("Error fetching category news:", error);
    } finally {
      setLoading(false);
    }
  };


  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold mb-4">
        {category.charAt(0).toUpperCase() + category.slice(1)} News
      </h1>
      {loading && <Shimmer />}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" >
        {categoryNews &&
          categoryNews.map((news, index) => (
            <NewsCard key={index} news={news} layout="compact" />
          ))}
      </div>
      <div>{!categoryNews && <p>No more news available</p>}</div>
    </div>
  );
}
