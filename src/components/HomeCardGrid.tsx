import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

export default function HomeCardGrid() {
  return (
    <Row>
      <Col>
        <Card>
          <Card.Body>
            <i className="bi-alarm"></i>
          </Card.Body>
          <Card.Footer>Sources</Card.Footer>
        </Card>
      </Col>
    </Row>
  );
}
