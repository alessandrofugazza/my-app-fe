import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.scss";
import Root from "./Root.tsx";
import ErrorPage from "./pages/ErrorPage.tsx";
import SourcesPage from "./pages/SourcesPage.tsx";
import { Container } from "react-bootstrap";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: "sources",
    element: <SourcesPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* CHECK meh */}
    <Container className="align-content-center py-5" style={{ height: "100vh" }}>
      <RouterProvider router={router} />
    </Container>
  </React.StrictMode>
);
