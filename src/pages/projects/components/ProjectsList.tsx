import axios from "axios";
import { useEffect, useState } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { IAProject } from "../../../interfaces/api/IAProject";
import { Button } from "react-bootstrap";
import ProjectForm from "./ProjectForm";

export default function ProjectsList() {
  const [projects, setProjects] = useState<IAProject[]>([]);
  const [isAddingProject, setIsAddingProject] = useState(false);
  const [editingProject, setEditingProject] = useState<IAProject | null>(null);

  const fetchProjects = async () => {
    try {
      const re = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/projects/v1/`);
      setProjects(re.data);
    } catch (error) {
      console.error("There was an error fetching the projects!", error);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const handleAddProjectButtonClick = () => {
    setIsAddingProject(true);
    setEditingProject(null);
  };

  const handleEdit = (project: IAProject) => {
    setEditingProject(project);
    setIsAddingProject(false);
  };

  const handleDelete = async (id: string) => {
    try {
      await axios.delete(`${import.meta.env.VITE_API_BASE_URL}/projects/v1/${id}`);
      console.log("Project deleted successfully");
    } catch (error) {
      console.error("There was an error deleting the project!", error);
    }
  };

  const handleFormSubmit = async (formData: IAProject) => {
    try {
      if (editingProject) {
        await axios.put(`${import.meta.env.VITE_API_BASE_URL}/projects/v1/`, formData);
        console.log("Project updated:", formData);
      } else {
        await axios.post(`${import.meta.env.VITE_API_BASE_URL}/projects/v1/`, formData);
        console.log("Project added:", formData);
      }
      fetchProjects();
      setIsAddingProject(false);
      setEditingProject(null);
    } catch (error) {
      console.error("There was an error submitting the project!", error);
    }
  };

  return (
    <>
      <div className="d-flex flex-column gap-3">
        <ListGroup>
          {projects.map((project) => (
            <ListGroup.Item key={project.id} className="d-flex">
              <div className="flex-grow-1">
                <div className="fw-bold">{project.title}</div>
                {project.description}
              </div>
              <div className="ms-auto d-flex gap-2">
                <i className="bi bi-pencil-square interactive-icon" onClick={() => handleEdit(project)}></i>
                <i className="bi bi-x-lg interactive-icon" onClick={() => handleDelete(project.id)}></i>
              </div>
            </ListGroup.Item>
          ))}
        </ListGroup>
        <Button onClick={handleAddProjectButtonClick}>Add project</Button>
      </div>
      {(isAddingProject || editingProject) && (
        <div className="mt-5">
          <ProjectForm initialData={editingProject || { title: "", description: "" }} onSubmit={handleFormSubmit} />
        </div>
      )}
    </>
  );
}
