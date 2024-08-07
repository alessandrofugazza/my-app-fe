import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";

export default function ProjectForm({ initialData = { title: "", description: "" }, onSubmit }) {
  const [projectFormData, setProjectFormData] = useState(initialData);

  // CHECK why
  useEffect(() => {
    setProjectFormData(initialData);
  }, [initialData]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setProjectFormData({
      ...projectFormData,
      [name]: value,
    });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(projectFormData);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formProjectTitle">
        <Form.Label>{initialData.title ? "Edit Project" : "New Project"}</Form.Label>
        <Form.Control
          type="text"
          name="title"
          placeholder="Enter title"
          value={projectFormData.title}
          onChange={handleInputChange}
        />
        <Form.Control
          type="text"
          name="description"
          placeholder="Enter description"
          value={projectFormData.description}
          onChange={handleInputChange}
        />
      </Form.Group>
      <Button type="submit">{initialData.title ? "Update" : "Submit"}</Button>
    </Form>
  );
}
