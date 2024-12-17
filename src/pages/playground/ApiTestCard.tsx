import { Card } from "react-bootstrap";
import { ApiTest } from "../../types/ApiTest";

type ApiTestCardProps = {
  apiTest: ApiTest;
  onRemoveApiTest: (apiTestId: string) => void;
};

export default function ApiTestCard({ apiTest, onRemoveApiTest }: ApiTestCardProps) {
  return (
    <Card className="interactive-card">
      <Card.Body>
        <Card.Title>{apiTest.title}</Card.Title>
        <Card.Subtitle className="text-muted">{apiTest.subtitle}</Card.Subtitle>
        <span>
          <button type="button" onClick={() => onRemoveApiTest(apiTest.id)}>
            Dismiss
          </button>
        </span>
      </Card.Body>
    </Card>
  );
}
