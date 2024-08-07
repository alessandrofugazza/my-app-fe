import axios from "axios";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";

export default function NewProjectForm() {
  const [newProjectFormData, setNewProjectFormData] = useState({
    title: "",
    description: "",
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setNewProjectFormData({
      ...newProjectFormData,
      [name]: value,
    });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const re = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/projects/v1/`, newProjectFormData);
      console.log("Project added:", re.data);
      setNewProjectFormData({
        title: "",
        description: "",
      });
    } catch (error) {
      console.error("There was an error adding the project!", error);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formProjectTitle">
        <Form.Label>New Project</Form.Label>
        <Form.Control
          type="text"
          name="title"
          placeholder="Enter title"
          value={newProjectFormData.title}
          onChange={handleInputChange}
        />
        <Form.Control
          type="text"
          name="description"
          placeholder="Enter description"
          value={newProjectFormData.description}
          onChange={handleInputChange}
        />
      </Form.Group>
      <Button type="submit">Submit</Button>
    </Form>
  );
}
