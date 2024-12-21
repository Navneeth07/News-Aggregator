import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import { Outlet, useLocation } from "react-router-dom";
import NewsFeeds from "../pages/NewsFeeds";
import TopHeadlines from "../pages/TopHeadlines";
import CategoryList from "../components/CategoryList";
import { useSelector, useDispatch } from "react-redux";
import { deactivateSearch, resetMainSections } from "../slice/uiSlice";

export default function Layout() {
  const dispatch = useDispatch();
  const location = useLocation();

  const { showMainSections, searchActive } = useSelector((state) => state.ui);

  useEffect(() => {
    dispatch(deactivateSearch());
    if (location.pathname === "/") {
      dispatch(resetMainSections());
    }
  }, [dispatch, location]);

  return (
    <div>
      <Navbar />
      <Outlet />

      {!searchActive && showMainSections && (
        <div className="container mx-auto px-4 py-6">
          <CategoryList />
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-6">
            <div className="md:col-span-3">
              <h1 className="text-2xl font-bold mb-4">Picks For You</h1>
              <NewsFeeds />
            </div>

            <div className="md:col-span-1 space-y-6">
              <h2 className="text-xl font-semibold mb-4">Top Headlines</h2>
              <div className="overflow-y-auto m-h[80vh]">
                <TopHeadlines />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
