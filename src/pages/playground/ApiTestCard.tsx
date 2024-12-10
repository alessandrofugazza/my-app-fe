import { Card } from "react-bootstrap";
import { ApiTest } from "../../types/ApiTest";

type ApiTestCardProps = {
  apiTest: ApiTest;
};

export default function ApiTestCard({ apiTest }: ApiTestCardProps) {
  return (
    <Card className="interactive-card">
      <Card.Body>
        <Card.Title>{apiTest.title}</Card.Title>
        <Card.Subtitle className="text-muted">{apiTest.subtitle}</Card.Subtitle>
      </Card.Body>
    </Card>
  );
}
