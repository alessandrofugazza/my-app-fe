import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";

export default function SourceForm({ initialData = { title: "", description: "", author: "" }, onSubmit }) {
  const [sourceFormData, setSourceFormData] = useState(initialData);

  useEffect(() => {
    setSourceFormData(initialData);
  }, [initialData]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setSourceFormData({
      ...sourceFormData,
      [name]: value,
    });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(sourceFormData);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formSourceTitle">
        <Form.Label>{initialData.title ? "Edit Source" : "New Source"}</Form.Label>
        <Form.Control
          type="text"
          name="title"
          placeholder="Enter title"
          value={sourceFormData.title}
          onChange={handleInputChange}
        />
        <Form.Control
          type="text"
          name="author"
          placeholder="Enter Author"
          value={sourceFormData.author}
          onChange={handleInputChange}
        />
        <Form.Control
          type="text"
          name="description"
          placeholder="Enter description"
          value={sourceFormData.description}
          onChange={handleInputChange}
        />
      </Form.Group>
      <Button type="submit">{initialData.title ? "Update" : "Submit"}</Button>
    </Form>
  );
}
