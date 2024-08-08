import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";

export default function ProgressForm({ initialData = { source: "", progress: "" }, onSubmit }) {
  const [progressFormData, setProgressFormData] = useState(initialData);

  useEffect(() => {
    setProgressFormData(initialData);
  }, [initialData]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setProgressFormData({
      ...progressFormData,
      [name]: value,
    });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(progressFormData);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSubmit(event as unknown as React.FormEvent<HTMLFormElement>);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formProgressTitle">
        <Form.Control
          type="text"
          name="source"
          placeholder="Enter source"
          value={progressFormData.source}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
        />
        <Form.Control
          type="text"
          name="progress"
          placeholder="Enter progress"
          value={progressFormData.progress}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
        />
      </Form.Group>
      <Button type="submit">{initialData.title ? "Update" : "Submit"}</Button>
    </Form>
    // <Form>
    //   <Row>
    //     <Col xs={9}>
    //       <Form.Control placeholder="City" />
    //     </Col>
    //     <Col>
    //       <Form.Control placeholder="Zip" />
    //     </Col>
    //   </Row>
    // </Form>
  );
}
