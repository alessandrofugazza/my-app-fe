import { Button, Form, ListGroup } from "react-bootstrap";
import { useAppSelector } from "../../../app/hooks";
import { selectProject } from "../projectSlice";
import { useState } from "react";
import axios from "axios";

export default function ProjectDetail() {
  const [newTodo, setNewTodo] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTodo(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      await axios.put(`${import.meta.env.VITE_API_BASE_URL}/projects/v1/${project!.id}/todos`, newTodo);
      console.log("Todos updated:", newTodo);
    } catch (error) {
      console.error("There was an error submitting the new Todo!", error);
    }
  };

  const project = useAppSelector(selectProject);
  return (
    <div className="border p-3 rounded">
      <h3>{project!.title}</h3>
      <p>{project!.description}</p>
      <div>
        <h4>Todos</h4>
        <div className="d-grid gap-2">
          {project!.todos.map((todo, index) => (
            <Button variant="outline-light" className="text-start" key={index}>
              {todo}
            </Button>
          ))}
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Control type="text" placeholder="New Todo" value={newTodo} onChange={handleInputChange} />
            </Form.Group>
          </Form>
        </div>
      </div>
    </div>
  );
}
