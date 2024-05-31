import React from "react";
import ReactDOM from "react-dom/client";
import RootLayout from "./routes/RootLayout.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import TikTakToePage from "./routes/TikTakToePage.tsx";
import ErrorPage from "./routes/ErrorPage.tsx";
import IndexPage from "./routes/IndexPage.tsx";
import { Provider } from "react-redux";
import store from "./app/store.ts";
import CounterPage from "./routes/CounterPage.tsx";
import PostListPage from "./routes/PostListPage/PostsListPage.tsx";
import { PostPage } from "./routes/PostPage/PostPage.tsx";

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
      {
        path: "counter",
        element: <CounterPage />,
      },
      {
        path: "posts",
        element: <PostListPage />,
      },
      {
        path: "post/:postId",
        element: <PostPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
