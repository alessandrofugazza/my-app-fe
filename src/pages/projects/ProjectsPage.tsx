import { useState } from "react";
import { Button } from "react-bootstrap";
import NewProjectForm from "./components/NewProjectForm";
import ProjectsList from "./components/ProjectsList";

export default function ProjectsPage() {
  const [isAddingProject, setIsAddingProject] = useState(false);
  const handleAddProjectButtonClick = () => {
    setIsAddingProject(true);
  };

  return (
    <>
      <ProjectsList />
      <Button onClick={handleAddProjectButtonClick}>Add project</Button>
      {isAddingProject && <NewProjectForm />}
    </>
  );
}
