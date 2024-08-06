import { useState } from "react";
import { Button } from "react-bootstrap";
import NewProjectForm from "./components/NewProjectForm";
import ProjectsList from "./components/ProjectsList";

export default function ProjectsPage() {
  return (
    <>
      <ProjectsList />
    </>
  );
}
