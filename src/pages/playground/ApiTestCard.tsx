import { Card } from "react-bootstrap";
import { ApiTest } from "../../types/ApiTest";

type ApiTestCardProps = {
  title: string;
  subtitle: string;
};

export default function ApiTestCard({ title, subtitle }: ApiTestCardProps) {
  return (
    <Card className="interactive-card">
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Subtitle className="text-muted">{subtitle}</Card.Subtitle>
      </Card.Body>
    </Card>
  );
}
