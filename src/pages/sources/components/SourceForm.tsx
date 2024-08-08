import { useEffect, useState } from "react";
import { Button, FloatingLabel, Form } from "react-bootstrap";

interface ISourceFormData {
  title: string;
  author: string;
  description: string;
  source: string;
  type: string;
  topic: string;
  notes: string[];
}

interface IPSourceFormProps {
  initialData?: ISourceFormData;
  onSubmit: (formData: ISourceFormData) => Promise<void>;
}

export default function SourceForm({ initialData, onSubmit }: IPSourceFormProps) {
  // CHECK better way?
  const [sourceFormData, setSourceFormData] = useState<ISourceFormData>(
    initialData || {
      title: "",
      author: "",
      description: "",
      source: "",
      type: "",
      topic: "",
      notes: [""],
    }
  );

  useEffect(() => {
    if (initialData) {
      setSourceFormData(initialData);
    }
  }, [initialData]);
  // CHECK why did i have to add  | HTMLTextAreaElement
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setSourceFormData({
      ...sourceFormData,
      [name]: value,
    });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(sourceFormData);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3 d-flex flex-column gap-2" controlId="formSourceTitle">
        <Form.Label>{initialData ? "Edit Source" : "New Source"}</Form.Label>
        <FloatingLabel controlId="floatingTitle" label="Title">
          <Form.Control
            type="text"
            name="title"
            placeholder="Enter title"
            value={sourceFormData.title}
            onChange={handleInputChange}
          />
        </FloatingLabel>
        <FloatingLabel controlId="floatingAuthor" label="Author">
          <Form.Control
            type="text"
            name="author"
            placeholder="Enter author"
            value={sourceFormData.author}
            onChange={handleInputChange}
          />
        </FloatingLabel>
        <FloatingLabel controlId="floatingDescription" label="Description">
          <Form.Control
            type="text"
            name="description"
            placeholder="Enter description"
            value={sourceFormData.description}
            onChange={handleInputChange}
          />
        </FloatingLabel>
        <FloatingLabel controlId="floatingSource" label="Source">
          <Form.Control
            type="text"
            name="source"
            placeholder="Enter source"
            value={sourceFormData.source}
            onChange={handleInputChange}
          />
        </FloatingLabel>
        <FloatingLabel controlId="floatingSelectSourceType" label="Source Type">
          <Form.Select
            aria-label="Select source type"
            value={sourceFormData.type}
            onChange={handleInputChange}
            name="type"
          >
            {/* TODO fetch this stuff */}
            <option>Select a source type</option>
            <option value="Book">Book</option>
            <option value="Article">Article</option>
            <option value="Website">Website</option>
          </Form.Select>
        </FloatingLabel>
        <FloatingLabel controlId="floatingSelectSourceTopic" label="Source Topic">
          <Form.Select
            aria-label="Select source topic"
            value={sourceFormData.topic}
            onChange={handleInputChange}
            name="topic"
          >
            {/* TODO fetch this stuff */}
            <option>Select a source topic</option>
            <option value="Artificial Intelligence">Artificial Intelligence</option>
            <option value="Evolutionary Psychology">Evolutionary Psychology</option>
            <option value="Python">Python</option>
          </Form.Select>
        </FloatingLabel>
      </Form.Group>
      <Button type="submit">{initialData ? "Update" : "Submit"}</Button>
    </Form>
  );
}
