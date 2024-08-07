import { Col, Form, Row } from "react-bootstrap";

export default function ProgressPage() {
  return (
    <Form>
      <Row>
        <Col xs={9}>
          <Form.Control placeholder="City" />
        </Col>
        <Col>
          <Form.Control placeholder="Zip" />
        </Col>
      </Row>
    </Form>
  );
}
