import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import HomeCard from "./HomeCard";

export default function HomeCardGrid() {
  return (
    <Row xs={1} sm={2} md={4} className="g-4">
      <HomeCard to="sources" section="Sources" icon="bi bi-book" />
      <HomeCard to="progress" section="Progress" icon="bi bi-arrow-bar-right" />
    </Row>
  );
}
