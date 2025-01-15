import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";

const apiTests = [
  {
    id: "1",
    name: "Test 1",
    description: "This is a test",
    content: "This is the content of the test",
  },
  {
    id: "2",
    name: "Test 2",
    description: "This is another test",
    content: "This is the content of the other test",
  },
  {
    id: "3",
    name: "Test 3",
    description: "This is yet another test",
    content: "This is the content of the yet another test",
  },
  {
    id: "4",
    name: "Test 4",
    description: "This is the last test",
    content: "This is the content of the last test",
  },
];

export default function GeneralNotesPage() {
  return (
    <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
      <Row>
        <Col sm={4}>
          <ListGroup>
            {apiTests.map((test) => (
              <ListGroup.Item action href={`#${test.id}`} key={test.id}>
                {test.name}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
        <Col sm={8}>
          <Tab.Content>
            {apiTests.map((test) => (
              <Tab.Pane eventKey={`#${test.id}`} key={test.id}>
                <h4>{test.name}</h4>
                <p>{test.description}</p>
                <div>{test.content}</div>
              </Tab.Pane>
            ))}
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
}
