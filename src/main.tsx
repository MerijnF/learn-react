import React from "react";
import ReactDOM from "react-dom/client";
import RootLayout from "./routes/RootLayout.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import TikTakToePage from "./routes/TikTakToePage.tsx";
import ErrorPage from "./routes/ErrorPage.tsx";
import IndexPage from "./routes/IndexPage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <IndexPage />,
      },
      {
        path: "tik-tak-toe",
        element: <TikTakToePage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
