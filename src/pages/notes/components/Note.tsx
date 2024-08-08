import { Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";

interface ICardProps {
  title: string;
  content: string;
  link: string;
}

export default function Note({ title, content, link }: ICardProps) {
  return (
    <Col>
      <Card>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{content}</Card.Text>
          {link && <Card.Link href={link}>{link}</Card.Link>}
        </Card.Body>
      </Card>
    </Col>
  );
}
