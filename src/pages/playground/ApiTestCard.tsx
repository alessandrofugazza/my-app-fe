import { Card } from "react-bootstrap";
import { ApiTest } from "../../types/ApiTest";

type ApiTestCardProps = {
  apiTest: ApiTest;
  onRemoveApiTest: (apiTest: ApiTest) => void;
};

export default function ApiTestCard({ apiTest, onRemoveApiTest }: ApiTestCardProps) {
  return (
    <Card className="interactive-card">
      <Card.Body>
        <Card.Title>{apiTest.title}</Card.Title>
        <Card.Subtitle className="text-muted">{apiTest.subtitle}</Card.Subtitle>
      </Card.Body>
    </Card>
  );
}
