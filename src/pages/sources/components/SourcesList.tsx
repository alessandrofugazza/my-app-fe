import axios from "axios";
import { useEffect, useState } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { IASource } from "../../../interfaces/api/IASource";
import { Button } from "react-bootstrap";
import SourceForm from "./SourceForm";

// IMRPOVE GOD AWEFUL COPY PASTE
export default function SourcesList() {
  const [sources, setSources] = useState<IASource[]>([]);
  const [isAddingSource, setIsAddingSource] = useState(false);
  const [editingSource, setEditingSource] = useState<IASource | null>(null);

  const fetchSources = async () => {
    try {
      const re = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/sources/v1/`);
      setSources(re.data);
    } catch (error) {
      console.error("There was an error fetching the sources!", error);
    }
  };

  useEffect(() => {
    fetchSources();
  }, []);

  const handleAddSourceButtonClick = () => {
    setIsAddingSource(true);
    setEditingSource(null);
  };

  const handleEdit = (source: IASource) => {
    setEditingSource(source);
    setIsAddingSource(false);
  };

  const handleDelete = async (id: string) => {
    try {
      await axios.delete(`${import.meta.env.VITE_API_BASE_URL}/sources/v1/${id}`);
      console.log("Source deleted successfully");
    } catch (error) {
      console.error("There was an error deleting the source!", error);
    }
  };

  const handleFormSubmit = async (formData: IASource) => {
    try {
      if (editingSource) {
        await axios.put(`${import.meta.env.VITE_API_BASE_URL}/sources/v1/`, formData);
        console.log("Source updated:", formData);
      } else {
        await axios.post(`${import.meta.env.VITE_API_BASE_URL}/sources/v1/`, formData);
        console.log("Source added:", formData);
      }
      fetchSources();
      setIsAddingSource(false);
      setEditingSource(null);
    } catch (error) {
      console.error("There was an error submitting the source!", error);
    }
  };

  return (
    <>
      <div className="d-flex flex-column gap-3">
        <ListGroup>
          {sources.map((source) => (
            <ListGroup.Item key={source.id} className="d-flex">
              <div className="flex-grow-1">
                <div className="fw-bold">{source.title}</div>
                {source.description}
              </div>
              <div className="ms-auto d-flex gap-2">
                <i className="bi bi-pencil-square interactive-icon" onClick={() => handleEdit(source)}></i>
                <i className="bi bi-x-lg interactive-icon" onClick={() => handleDelete(source.id)}></i>
              </div>
            </ListGroup.Item>
          ))}
        </ListGroup>
        <Button onClick={handleAddSourceButtonClick}>Add source</Button>
      </div>
      {(isAddingSource || editingSource) && (
        <div className="mt-5">
          <SourceForm initialData={editingSource || { title: "", description: "" }} onSubmit={handleFormSubmit} />
        </div>
      )}
    </>
  );
}
