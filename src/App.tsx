import { Col, Container, Row } from "react-bootstrap";
import "./App.scss";
import HomeCardGrid from "./components/HomeCardGrid";

function App() {
  return (
    <div className="d-flex align-items-center py-5" style={{ height: "100vh" }}>
      <Container>
        <Row>
          <Col>
            <HomeCardGrid />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
