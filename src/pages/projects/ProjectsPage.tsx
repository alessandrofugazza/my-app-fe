import { useState } from "react";
import { Button } from "react-bootstrap";
import NewProjectForm from "./components/NewProjectForm";

export default function ProjectsPage() {
  const [isAddingProject, setIsAddingProject] = useState(false);
  const handleAddProjectButtonClick = () => {
    setIsAddingProject(true);
  };

  return (
    <>
      <Button onClick={handleAddProjectButtonClick}>Add project</Button>
      {isAddingProject && <NewProjectForm />}
    </>
  );
}
