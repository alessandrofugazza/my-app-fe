import { Col, Container, Row } from "react-bootstrap";
import "./App.scss";
import HomeCardGrid from "./components/HomeCardGrid";

export default function Root() {
  return (
    <Row>
      <Col>
        <HomeCardGrid />
      </Col>
    </Row>
  );
}
