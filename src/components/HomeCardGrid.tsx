import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import HomeCard from "./HomeCard";

export default function HomeCardGrid() {
  return (
    <Row xs={1} md={4} className="g-4">
      <Col>
        <HomeCard />
      </Col>
    </Row>
  );
}
