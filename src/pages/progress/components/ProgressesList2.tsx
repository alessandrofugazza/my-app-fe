import axios from "axios";
import { useEffect, useState } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { IAProgress } from "../../../types/api/IAProgress";
import { Button } from "react-bootstrap";
import ProgressForm from "./ProgressForm2";

export default function ProgressesList() {
  const [progresses, setProgresses] = useState<IAProgress[]>([]);
  const [isAddingProgress, setIsAddingProgress] = useState(false);
  const [editingProgress, setEditingProgress] = useState<IAProgress | null>(null);

  const fetchProgresses = async () => {
    try {
      const re = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/progresses/v1/`);
      setProgresses(re.data);
    } catch (error) {
      console.error("There was an error fetching the progresses!", error);
    }
  };

  useEffect(() => {
    fetchProgresses();
  }, []);

  const handleAddProgressButtonClick = () => {
    setIsAddingProgress(true);
    setEditingProgress(null);
  };

  const handleEdit = (progress: IAProgress) => {
    setEditingProgress(progress);
    setIsAddingProgress(false);
  };

  const handleDelete = async (id: string) => {
    try {
      await axios.delete(`${import.meta.env.VITE_API_BASE_URL}/progresses/v1/${id}`);
      console.log("Progress deleted successfully");
    } catch (error) {
      console.error("There was an error deleting the progress!", error);
    }
  };

  const handleFormSubmit = async (formData: IAProgress) => {
    try {
      if (editingProgress) {
        await axios.put(`${import.meta.env.VITE_API_BASE_URL}/progresses/v1/`, formData);
        console.log("Progress updated:", formData);
      } else {
        await axios.post(`${import.meta.env.VITE_API_BASE_URL}/progresses/v1/`, formData);
        console.log("Progress added:", formData);
      }
      fetchProgresses();
      setIsAddingProgress(false);
      setEditingProgress(null);
    } catch (error) {
      console.error("There was an error submitting the progress!", error);
    }
  };

  return (
    <>
      <div className="d-flex flex-column gap-3">
        <ListGroup>
          {progresses.map((progress) => (
            <ListGroup.Item key={progress.id} className="d-flex">
              <div className="flex-grow-1">
                <div className="fw-bold">{progress.title}</div>
                {progress.description}
              </div>
              <div className="ms-auto d-flex gap-2">
                <i className="bi bi-pencil-square interactive-icon" onClick={() => handleEdit(progress)}></i>
                <i className="bi bi-x-lg interactive-icon" onClick={() => handleDelete(progress.id)}></i>
              </div>
            </ListGroup.Item>
          ))}
        </ListGroup>
        <Button onClick={handleAddProgressButtonClick}>Add progress</Button>
      </div>
      {(isAddingProgress || editingProgress) && (
        <div className="mt-5">
          <ProgressForm initialData={editingProgress || { title: "", description: "" }} onSubmit={handleFormSubmit} />
        </div>
      )}
    </>
  );
}
