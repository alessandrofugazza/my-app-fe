import { Card } from "react-bootstrap";
import { ApiTest } from "../../types/ApiTest";

type ApiTestCardProps = {
  apiTest: ApiTest;
};

export default function ApiTestCard(props: ApiTestCardProps) {
  return (
    <Card className="interactive-card">
      <Card.Body>
        <Card.Title>{props.apiTest.title}</Card.Title>
        <Card.Subtitle className="text-muted">{props.apiTest.subtitle}</Card.Subtitle>
      </Card.Body>
    </Card>
  );
}
