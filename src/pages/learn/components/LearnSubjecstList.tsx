import axios from "axios";
import { useEffect, useState } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { IALearnSubject } from "../../../types/api/IALearnSubject";
import { Button } from "react-bootstrap";
import LearnSubjectForm from "./LearnSubjectForm";

export default function LearnSubjectsList() {
  const [learnSubjects, setLearnSubjects] = useState<IALearnSubject[]>([]);
  const [isAddingLearnSubject, setIsAddingLearnSubject] = useState(false);
  const [editingLearnSubject, setEditingLearnSubject] = useState<IALearnSubject | null>(null);

  const fetchLearnSubjects = async () => {
    try {
      const re = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/learn/v1/`);
      setLearnSubjects(re.data);
    } catch (error) {
      console.error("There was an error fetching the learnSubjects!", error);
    }
  };

  useEffect(() => {
    fetchLearnSubjects();
  }, []);

  const handleAddLearnSubjectButtonClick = () => {
    setIsAddingLearnSubject(true);
    setEditingLearnSubject(null);
  };

  const handleEdit = (learnSubject: IALearnSubject) => {
    setEditingLearnSubject(learnSubject);
    setIsAddingLearnSubject(false);
  };

  const handleDelete = async (id: string) => {
    try {
      await axios.delete(`${import.meta.env.VITE_API_BASE_URL}/learn/v1/${id}`);
      console.log("LearnSubject deleted successfully");
    } catch (error) {
      console.error("There was an error deleting the learnSubject!", error);
    }
  };

  const handleFormSubmit = async (formData: IALearnSubject) => {
    try {
      if (editingLearnSubject) {
        await axios.put(`${import.meta.env.VITE_API_BASE_URL}/learn/v1/`, formData);
        console.log("LearnSubject updated:", formData);
      } else {
        await axios.post(`${import.meta.env.VITE_API_BASE_URL}/learn/v1/`, formData);
        console.log("LearnSubject added:", formData);
      }
      fetchLearnSubjects();
      setIsAddingLearnSubject(false);
      setEditingLearnSubject(null);
    } catch (error) {
      console.error("There was an error submitting the learnSubject!", error);
    }
  };

  return (
    <>
      <div className="d-flex flex-column gap-3">
        <ListGroup>
          {learnSubjects.map((learnSubject) => (
            <ListGroup.Item key={learnSubject.id} className="d-flex">
              <div className="flex-grow-1">
                <div className="fw-bold">{learnSubject.title}</div>
                {learnSubject.description}
              </div>
              <div className="ms-auto d-flex gap-2">
                <i className="bi bi-pencil-square interactive-icon" onClick={() => handleEdit(learnSubject)}></i>
                <i className="bi bi-x-lg interactive-icon" onClick={() => handleDelete(learnSubject.id)}></i>
              </div>
            </ListGroup.Item>
          ))}
        </ListGroup>
        <Button onClick={handleAddLearnSubjectButtonClick}>Add learnSubject</Button>
      </div>
      {(isAddingLearnSubject || editingLearnSubject) && (
        <div className="mt-5">
          <LearnSubjectForm
            initialData={editingLearnSubject || { title: "", description: "" }}
            onSubmit={handleFormSubmit}
          />
        </div>
      )}
    </>
  );
}
