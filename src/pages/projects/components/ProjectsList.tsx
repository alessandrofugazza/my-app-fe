import axios from "axios";
import { useEffect, useState } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { IAProject } from "../../../interfaces/api/IAProject";

export default function ProjectsList() {
  const [projects, setProjects] = useState<IAProject[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const re = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/projects/v1/`);
        setProjects(re.data);
      } catch (error) {
        console.error("There was an error fetching the projects!", error);
      }
    };

    fetchProjects();
  }, []);

  const handleDelete = async (id: string) => {
    try {
      await axios.delete(`${import.meta.env.VITE_API_BASE_URL}/projects/v1/${id}`);
      setProjects((prevProjects) => prevProjects.filter((project) => project.id !== id));
      console.log("Project deleted successfully");
    } catch (error) {
      console.error("There was an error deleting the project!", error);
    }
  };

  return (
    <ListGroup>
      {projects.map((project) => (
        <ListGroup.Item key={project.id} className="d-flex">
          <span className="flex-grow-1">{project.title}</span>
          <div className="ms-auto">
            <i className="bi bi-x ms-auto interactive-icon" onClick={() => handleDelete(project.id)}></i>
          </div>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}
