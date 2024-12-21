import React from "react";
import { useNavigate } from "react-router-dom";

const categories = [
  "business",
  "sports",
  "entertainment",
  "technology",
  "health",
];

const CategoryList = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    navigate(`/category/${category}`);
  };

  return (
    <div className="container mx-auto px-4 py-2">
      <div className="flex flex-wrap justify-center gap-6">
        {categories.map((category, index) => (
          <button
            key={index}
            onClick={() => handleCategoryClick(category)}
            className="bg-[#1b2631] text-white py-2 px-6 rounded-lg text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
