import { useState } from "react";

export default function useFilters(initialFilters = {}) {
  const [filters, setFilters] = useState(initialFilters);

  const filterNews = (data) => {
    if (!data || data.length === 0) return [];

    return data.filter((item) => {
      const matchesSource =
        !filters.source ||
        item.source?.toLowerCase().includes(filters.source.toLowerCase());
      const matchesDate =
        !filters.date ||
        (item.publishedDate &&
          !isNaN(new Date(item.publishedDate).getTime()) &&
          new Date(item.publishedDate).toISOString().slice(0, 10) ===
            filters.date);

      return matchesSource && matchesDate;
    });
  };

  return {
    filters,
    setFilters,
    filterNews,
  };
}
