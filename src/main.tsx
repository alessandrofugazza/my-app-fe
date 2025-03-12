import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.scss";
import Root from "./Root.tsx";
import ErrorPage from "./pages/ErrorPage.tsx";
import HomePage from "./pages/HomePage.tsx";
import { Provider } from "react-redux";
import { store } from "./app/store.ts";
import PlaygroundHomePage from "./pages/playground/PlaygroundHomePage.tsx";
import CSSPlaygroundPage from "./pages/playground/css/CSSPlaygroundPage.tsx";
import ApiTestsPlaygroundPage from "./pages/playground/api-tests/ApiTestsPlaygroundPage.tsx";
import GeneralNotesPage from "./pages/general/GeneralNotesPage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "general",
        element: <GeneralNotesPage />,
      },
      // {
      //   path: "projects",
      //   element: <ProjectsPage />,
      // },
      // {
      //   path: "sources",
      //   element: <SourcesPage />,
      // },
      // {
      //   path: "progress",
      //   element: <ProgressPage />,
      // },
      // {
      //   path: "learn",
      //   element: <LearnPage />,
      // },
      // {
      //   path: "notes",
      //   element: <NotesPage />,
      // },
      // CHECK why doesnt this work ffs
      // {
      //   path: "playground",
      //   element: <PlaygroundHomePage />,
      //   children: [
      //     {
      //       path: "general",
      //       element: <GeneralPlaygroundPage />,
      //     },
      //     {
      //       path: "css",
      //       element: <CSSPlaygroundPage />,
      //     },
      //   ],
      // },
      {
        path: "playground",
        element: <PlaygroundHomePage />,
      },
      {
        path: "playground/api-tests",
        element: <ApiTestsPlaygroundPage />,
      },
      {
        path: "playground/css",
        element: <CSSPlaygroundPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      {/* CHECK meh */}

      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
