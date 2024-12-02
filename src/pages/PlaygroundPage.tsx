import { Card, Stack } from "react-bootstrap";

export default function PlaygroundPage() {
  return (
    <>
      <div>
        <h2 className="mb-4">Playground list title</h2>
        <Stack gap={3}>
          <Card className="interactive-card">
            <Card.Body>
              <Card.Text>TEST!</Card.Text>
            </Card.Body>
          </Card>
          <Card className="interactive-card">
            <Card.Body>
              <Card.Text>TEST 2!</Card.Text>
            </Card.Body>
          </Card>
          <Card className="interactive-card">
            <Card.Body>
              <Card.Text>TEST 3!</Card.Text>
            </Card.Body>
          </Card>
        </Stack>
      </div>
    </>
  );
}
