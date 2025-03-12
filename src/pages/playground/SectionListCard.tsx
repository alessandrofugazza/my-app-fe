import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

type SectionListCardProps = {
  title: string;
  to: string;
};

export default function SectionListCard({ title, to }: SectionListCardProps) {
  return (
    <Card as={Link} to={`/${to}`} style={{ textDecoration: "none", color: "inherit" }} className="interactive-card">
      <Card.Body>
        <Card.Title className="m-0">{title}</Card.Title>
      </Card.Body>
    </Card>
  );
}
