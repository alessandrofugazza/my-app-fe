import { Card, Col, Row } from "react-bootstrap";
import HomeCardGrid from "../components/HomeCardGrid";

export default function HomePage() {
  const currentDate = new Date();
  const formattedCurrentDate = currentDate.toLocaleDateString("en-GB", {
    weekday: "long",
    day: "2-digit",
    month: "2-digit",
    year: "2-digit",
  });

  return (
    <div className="d-flex flex-column gap-5">
      <Card>
        <Card.Body>
          <div className="d-flex">
            <Card.Title className="display-1 fw-semibold">MOTD</Card.Title>
            <span className="ms-auto">{formattedCurrentDate}</span>
          </div>
          <Card.Text className="fs-2">
            <span>Love yourself</span>
          </Card.Text>
        </Card.Body>
      </Card>
      <Row>
        <Col>
          <HomeCardGrid />
        </Col>
      </Row>
    </div>
  );
}
