import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import { IAProgress } from "../../../types/api/IAProgress";
import { useEffect, useState } from "react";
import axios from "axios";

export default function ProgressesList() {
  const [progresses, setProgresses] = useState<IAProgress[]>([]);

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

  return (
    <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
      <Row>
        <Col sm={4}>
          <ListGroup>
            {progresses.map((progress) => (
              <ListGroup.Item action key={progress.id} href={`#${progress.id}`}>
                {progress.source}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
        <Col sm={8}>
          <Tab.Content>
            {progresses.map((progress) => (
              <Tab.Pane key={progress.id} eventKey={`#${progress.id}`}>
                <span className="fs-3">{progress.progress}</span>
              </Tab.Pane>
            ))}
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
}
