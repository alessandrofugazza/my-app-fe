import { Button, Card, Stack } from "react-bootstrap";
import { ApiTest } from "../../../types/ApiTest";

type ApiTestCardProps = {
  apiTest: ApiTest;
  onRemoveApiTest: (apiTestId: string) => void;
};

export default function ApiTestCard({ apiTest, onRemoveApiTest }: ApiTestCardProps) {
  return (
    <Card className="interactive-card">
      <Card.Body>
        <Stack direction="horizontal">
          <div>
            <Card.Title>{apiTest.title}</Card.Title>
            <Card.Subtitle className="text-muted">{apiTest.subtitle}</Card.Subtitle>
          </div>
          <Button variant="light" onClick={() => onRemoveApiTest(apiTest.id)} className="ms-auto">
            Dismiss
          </Button>
        </Stack>
      </Card.Body>
    </Card>
  );
}
