import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";

export default function LearnSubjectForm({ initialData = { title: "", description: "" }, onSubmit }) {
  const [learnSubjectFormData, setLearnSubjectFormData] = useState(initialData);

  useEffect(() => {
    setLearnSubjectFormData(initialData);
  }, [initialData]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setLearnSubjectFormData({
      ...learnSubjectFormData,
      [name]: value,
    });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(learnSubjectFormData);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formLearnSubjectTitle">
        <Form.Label>{initialData.title ? "Edit LearnSubject" : "New LearnSubject"}</Form.Label>
        <Form.Control
          type="text"
          name="title"
          placeholder="Enter title"
          value={learnSubjectFormData.title}
          onChange={handleInputChange}
        />
        <Form.Control
          type="text"
          name="description"
          placeholder="Enter description"
          value={learnSubjectFormData.description}
          onChange={handleInputChange}
        />
      </Form.Group>
      <Button type="submit">{initialData.title ? "Update" : "Submit"}</Button>
    </Form>
  );
}
