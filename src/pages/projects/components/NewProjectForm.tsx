import axios from "axios";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";

export default function NewProjectForm() {
  const [title, setTitle] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const newProject = {
      title: title,
    };

    try {
      const re = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/projects/v1/`, newProject);
      console.log("Project added:", re.data);
      setTitle("");
    } catch (error) {
      console.error("There was an error adding the project!", error);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formProjectTitle">
        <Form.Label>Project title</Form.Label>
        <Form.Control type="text" placeholder="Enter title" value={title} onChange={handleInputChange} />
      </Form.Group>
      <Button type="submit">Submit</Button>
    </Form>
  );
}
