import { ApiTest } from "../../types/ApiTest";
import ApiTestForm from "./ApiTestForm";
import ApiTestList from "./ApiTestList";
import axios from "axios";
import { useEffect, useReducer, useState } from "react";
import InputWithLabel from "./InputWithLabel";
import { Spinner } from "react-bootstrap";

const welcome = {
  greeting: "Welcome to the playground",
  subtitle: "Who told you what was down here?",
};

const useStorageState = (key: string, initialState: string) => {
  const [value, setValue] = useState(localStorage.getItem(key) || initialState);

  useEffect(() => {
    localStorage.setItem(key, value);
  }, [value, key]);

  return [value, setValue] as const;
};

type ApiTestsState = ApiTest[];

type ApiTestsSetAction = {
  type: "SET_APITESTS";
  payload: ApiTest[];
};

type ApiTestsRemoveAction = {
  type: "REMOVE_APITEST";
  payload: string;
};

type ApiTestsAction = ApiTestsSetAction | ApiTestsRemoveAction;

const apiTestsReducer = (state: ApiTestsState, action: ApiTestsAction) => {
  switch (action.type) {
    case "SET_APITESTS":
      return action.payload;
    case "REMOVE_APITEST":
      return state.filter((apiTest) => apiTest.id !== action.payload);
    default:
      throw new Error("Unknown action type");
  }
};

export default function PlaygroundPage() {
  // const [apiTests, setApiTests] = useState<ApiTest[]>([]);
  const [apiTests, dispatchApiTests] = useReducer(apiTestsReducer, []);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const [searchTerm, setSearchTerm] = useStorageState("search", "");

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleRemoveApiTest = async (apiTestId: string) => {
    try {
      await axios.delete(`${import.meta.env.VITE_API_BASE_URL}/api-tests/v1/${apiTestId}`);
      // setApiTests(apiTests.filter((test) => test.id !== apiTestId));
      dispatchApiTests({ type: "REMOVE_APITEST", payload: apiTestId });
    } catch (error) {
      setIsError(true);
      console.error("Failed to delete the API test:", error);
    }
  };

  const searchedApiTests = apiTests.filter((apiTest) => apiTest.title.toLowerCase().includes(searchTerm.toLowerCase()));

  const fetchApiTests = async () => {
    try {
      const re = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/api-tests/v1/`);
      dispatchApiTests({ type: "SET_APITESTS", payload: re.data });
      // setApiTests(re.data);
      setIsLoading(false);
    } catch (error) {
      console.error("There was an error fetching the Api Tests!", error);
    }
  };

  useEffect(() => {
    setIsLoading(true);
    fetchApiTests();
  }, []);

  return (
    <div>
      <h1>{welcome.greeting}</h1>
      <h2> {welcome.subtitle}</h2>
      <hr />
      <InputWithLabel id="search" value={searchTerm} onInputChange={handleSearch} isFocused>
        <strong>Search:</strong>
      </InputWithLabel>
      <hr />
      {isError && <p>There was an error!</p>}
      {isLoading ? (
        <div className="d-flex py-5">
          <Spinner animation="border" role="status" variant="light" className="m-auto">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      ) : (
        <ApiTestList apiTests={searchedApiTests} onRemoveApiTest={handleRemoveApiTest} />
      )}
      <hr />
      <ApiTestForm />
    </div>
  );
}
