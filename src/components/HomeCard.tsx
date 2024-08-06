import { Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

interface IHomeCardProps {
  to: string;
  section: string;
  icon: string;
}

export default function HomeCard({ to, section, icon }: IHomeCardProps) {
  return (
    <Col>
      <Card style={{ height: "13rem", textDecoration: "none" }} as={Link} to={`/${to}`}>
        <Card.Body className="d-flex justify-content-center align-items-center">
          <i className={`${icon} display-1`}></i>
        </Card.Body>
        <Card.Footer className="text-center">{section}</Card.Footer>
      </Card>
    </Col>
  );
}
