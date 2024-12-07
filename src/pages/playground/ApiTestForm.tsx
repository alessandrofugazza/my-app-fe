import { useState } from "react";
import { Button, Form } from "react-bootstrap";

type ApiTestFormData = {
  title: string;
  subtitle: string;
};

export default function ApiTestForm() {
  const [formData, setFormData] = useState<ApiTestFormData>({
    title: "",
    subtitle: "",
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <Form>
      <Form.Group className="mb-3" controlId="apiTestTitle">
        <Form.Label>Title</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter title"
          name="title"
          value={formData.title}
          onChange={handleInputChange}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="apiTestSubtitle">
        <Form.Label>Subtitle</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter subtitle"
          name="subtitle"
          value={formData.subtitle}
          onChange={handleInputChange}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}
