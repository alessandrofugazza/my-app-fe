import Row from "react-bootstrap/Row";
import HomeCard from "./HomeCard";

export default function HomeCardGrid() {
  return (
    <Row xs={1} sm={2} md={4} className="g-4">
      <HomeCard to="playground" section="Playground" icon="bi bi-brush" />
    </Row>
  );
}
