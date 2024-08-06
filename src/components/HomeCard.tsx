import Card from "react-bootstrap/Card";

export default function HomeCard() {
  return (
    <Card style={{ height: "13rem" }}>
      <Card.Body className="d-flex justify-content-center align-items-center">
        <i className="bi bi-book display-1"></i>
      </Card.Body>
      <Card.Footer className="text-center">Sources</Card.Footer>
    </Card>
  );
}
