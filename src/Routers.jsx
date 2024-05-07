import React from "react";
import DefaultLayout from "./components/Layout/DefautLayout";
import { createBrowserRouter, Navigate } from "react-router-dom";
import BlogList from "./Layout/Blog/BlogList";
import BlogItem from "./Layout/Blog/BlogItem";

const publicRoutes = createBrowserRouter([
  {
    path: "",
    element: <DefaultLayout />,
    children: [
      {
        path: "",
        element: <Navigate to="blog" />,
      },
      {
        path: "blog",
        element: <BlogList />,
      },
      {
        path: "blog-single/:slug",
        element: <BlogItem />,
      },
    ],
  },
]);

const privateRoutes = [];

export { publicRoutes, privateRoutes };
