import { Container } from "react-bootstrap";
import "./App.scss";
import AppNavbar from "./components/AppNavbar";
import { Outlet } from "react-router-dom";

export default function Root() {
  return (
    <div className="d-flex flex-column h-100">
      <AppNavbar />
      <Container className="py-5 my-auto">
        <Outlet />
      </Container>
    </div>
  );
}
