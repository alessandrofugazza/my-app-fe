import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.scss";
import Root from "./Root.tsx";
import ErrorPage from "./pages/ErrorPage.tsx";
import ProjectsPage from "./pages/projects/ProjectsPage.tsx";
import SourcesPage from "./pages/sources/SourcesPage.tsx";
import ProgressPage from "./pages/progress/ProgressPage.tsx";
import HomePage from "./pages/HomePage.tsx";
import LearnPage from "./pages/learn/LearnPage.tsx";
import NotesPage from "./pages/notes/NotesPage.tsx";
import { Provider } from "react-redux";
import ReduxTestPage from "./redux-test/ReduxTestPage.tsx";
import { store } from "./app/store.ts";

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
        path: "projects",
        element: <ProjectsPage />,
      },
      {
        path: "sources",
        element: <SourcesPage />,
      },
      {
        path: "progress",
        element: <ProgressPage />,
      },
      {
        path: "learn",
        element: <LearnPage />,
      },
      {
        path: "notes",
        element: <NotesPage />,
      },
      {
        path: "redux-test",
        element: <ReduxTestPage />,
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
    ,
  </React.StrictMode>
);
