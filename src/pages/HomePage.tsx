import { Card, Col, Row } from "react-bootstrap";
import HomeCardGrid from "../components/HomeCardGrid";

export default function HomePage() {
  return (
    <div className="d-flex flex-column gap-5">
      <Card>
        <Card.Body>
          <Card.Title className="display-1 fw-semibold">MOTD</Card.Title>
          <Card.Text className="fs-2">
            <span>
              FUCK THIS LIFE MAN
              <br />
              THE DOORS ROCKS
              <br />
              THE END
            </span>
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
