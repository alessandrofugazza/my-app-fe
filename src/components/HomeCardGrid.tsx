import Row from "react-bootstrap/Row";
import HomeCard from "./HomeCard";

export default function HomeCardGrid() {
  return (
    <Row xs={1} sm={2} md={4} className="g-4">
      {/* <HomeCard to="sources" section="Sources" icon="bi bi-bookmark" />
      <HomeCard to="progress" section="Progress" icon="bi bi-arrow-bar-right" />
      <HomeCard to="projects" section="Projects" icon="bi bi-easel" />
      <HomeCard to="learn" section="Learn" icon="bi bi-book" />
      <HomeCard to="notes" section="Notes" icon="bi bi-sticky" /> */}
      <HomeCard to="playground" section="Playground" icon="bi bi-brush" />
    </Row>
  );
}
