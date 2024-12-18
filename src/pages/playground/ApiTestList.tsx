import { Alert, Stack } from "react-bootstrap";
import { ApiTest } from "../../types/ApiTest";
import ApiTestCard from "./ApiTestCard";

type ApiTestListProps = {
  apiTests: ApiTest[];
  onRemoveApiTest: (apiTestId: string) => void;
};

export default function ApiTestList({ apiTests, onRemoveApiTest }: ApiTestListProps) {
  return (
    <ul>
      {apiTests.length === 0 ? (
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
