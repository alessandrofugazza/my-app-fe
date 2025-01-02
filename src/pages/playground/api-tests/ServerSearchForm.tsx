import { Button, Form } from "react-bootstrap";

interface ServerSearchFormProps {
  serverSearchTerm: string;
  onSearchInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSearchSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

export default function ServerSearchForm({ serverSearchTerm, onSearchInput, onSearchSubmit }: ServerSearchFormProps) {
  // any way to remove the return?
  return (
    <Form onSubmit={onSearchSubmit}>
      <Form.Group controlId="server-search">
        <Form.Label>Server search</Form.Label>
        <Form.Control
          type="text"
          placeholder="Search an entry"
          value={serverSearchTerm}
          onChange={onSearchInput}
          autoFocus
        />
      </Form.Group>
      <Button disabled={!serverSearchTerm} variant="light" type="submit">
        Submit
      </Button>
    </Form>
  );
}
