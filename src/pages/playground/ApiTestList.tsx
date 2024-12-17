import { Alert, Placeholder, Stack } from "react-bootstrap";
import { ApiTest } from "../../types/ApiTest";
import ApiTestCard from "./ApiTestCard";

type ApiTestListProps = {
  isLoading: boolean;
  apiTests: ApiTest[];
  onRemoveApiTest: (apiTestId: string) => void;
};

export default function ApiTestList({ isLoading, apiTests, onRemoveApiTest }: ApiTestListProps) {
  return (
    <ul>
      {isLoading ? (
        Array.from({ length: 4 }).map((_, index) => (
          <li key={index}>
            <Placeholder as="span" animation="glow">
              <Placeholder xs={3} />
            </Placeholder>
          </li>
        ))
      ) : apiTests.length === 0 ? (
        <Alert variant="light">No results.</Alert>
      ) : (
        <Stack gap={3}>
          {apiTests.map((apiTest) => (
            <ApiTestCard key={apiTest.id} apiTest={apiTest} onRemoveApiTest={onRemoveApiTest} />
          ))}
        </Stack>
      )}
    </ul>
  );
}
