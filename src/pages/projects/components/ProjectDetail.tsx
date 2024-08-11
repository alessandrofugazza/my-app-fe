import { ListGroup } from "react-bootstrap";
import { useAppSelector } from "../../../app/hooks";
import { selectProject } from "../projectSlice";

export default function ProjectDetail() {
  const project = useAppSelector(selectProject);
  return (
    <div className="border p-3 rounded">
      <h3>{project!.title}</h3>
      <p>{project!.description}</p>
      <div>
        <h4>Todos</h4>
        <ListGroup as="ol" numbered>
          {project!.todos.map((todo, index) => (
            <ListGroup.Item as="li" key={index}>
              {todo}
            </ListGroup.Item>
          ))}
        </ListGroup>
      </div>
    </div>
  );
}
