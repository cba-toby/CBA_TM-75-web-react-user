import React from "react";
import DefaultLayout from "./components/Layout/DefautLayout";
import { createBrowserRouter, Navigate } from "react-router-dom";
import BlogList from "./Layout/Blog/BlogList";

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
    ],
  },
]);

const privateRoutes = [];

export { publicRoutes, privateRoutes };
