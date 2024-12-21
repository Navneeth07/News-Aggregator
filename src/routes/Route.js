import { RouterProvider, createBrowserRouter } from "react-router-dom";
import NewsFeeds from "../pages/NewsFeeds";
import Layout from "../Layout/Layout";
import CategoryPage from "../pages/CategoryPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "newsfeeds",
        element: <NewsFeeds />,
      },
      {
        path: "/category/:category",
        element: <CategoryPage />,
      },
    ],
  },
]);

export default function Routes() {
  return <RouterProvider router={router} />;
}
