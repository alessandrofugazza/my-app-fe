import ApiTestForm from "./ApiTestForm";
import ApiTestList from "./ApiTestList";
import axios from "axios";
import { useCallback, useEffect, useReducer, useState } from "react";
import InputWithLabel from "./InputWithLabel";
import { Button, Form, Spinner } from "react-bootstrap";
import {
  DATA_FETCH_FAILURE,
  DATA_FETCH_INIT,
  DATA_FETCH_SUCCESS,
  DataAction,
  dataReducer,
  DataState,
  REMOVE_DATA_ENTRY,
} from "../../../types/shared/DataState";
import { ApiTest } from "../../../types/ApiTest";

const API_ENDPOINT = `${import.meta.env.VITE_API_BASE_URL}/api-tests/v1/`;

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

export default function ApiTestsPlaygroundPage() {
  const [apiTests, dispatchApiTests] = useReducer(dataReducer, {
    data: [],
    isLoading: false,
    isError: false,
  });

  const [clientSearchTerm, setClientSearchTerm] = useStorageState("clientSearch", "");
  const [serverSearchTerm, setServerSearchTerm] = useStorageState("serverSearch", "");

  const [searchUrl, setSearchUrl] = useState(`${API_ENDPOINT}search?query=${serverSearchTerm}`);

  const handleServerSearchInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setServerSearchTerm(event.target.value);
  };

  const handleServerSearchSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSearchUrl(`${API_ENDPOINT}search?query=${serverSearchTerm}`);
  };

  const handleClientSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setClientSearchTerm(event.target.value);
  };

  const handleRemoveApiTest = async (apiTestId: string) => {
    try {
      await axios.delete(`${API_ENDPOINT}${apiTestId}`);
      dispatchApiTests({ type: REMOVE_DATA_ENTRY, payload: apiTestId });
    } catch (error) {
      dispatchApiTests({ type: DATA_FETCH_FAILURE }); // CHECK are we sure about this
      console.error("Failed to delete the API test:", error); // implement clog in reducer?
    }
  };

  // a bit bullshit but only way to remove ts error
  const searchedApiTests: ApiTest[] = apiTests.data
    .filter((entry): entry is ApiTest => (entry as ApiTest).title !== undefined)
    .filter((apiTest) => apiTest.title.toLowerCase().includes(clientSearchTerm.toLowerCase()));

  const handleFetchApiTests = useCallback(async () => {
    dispatchApiTests({ type: DATA_FETCH_INIT });
    try {
      const result = await axios.get(searchUrl);
      dispatchApiTests({
        type: DATA_FETCH_SUCCESS,
        payload: result.data,
      });
    } catch (error) {
      dispatchApiTests({ type: DATA_FETCH_FAILURE });
    }
  }, [searchUrl]);
  //     .then((result) => {
  //       dispatchApiTests({
  //         type: "APITESTS_FETCH_SUCCESS",
  //         payload: result.data,
  //       });
  //     })
  //     .catch(() => dispatchApiTests({ type: "APITESTS_FETCH_FAILURE" }));
  // }, [searchUrl]);

  useEffect(() => {
    handleFetchApiTests();
  }, [handleFetchApiTests]);

  return (
    <div>
      <h1>{welcome.greeting}</h1>
      <h2> {welcome.subtitle}</h2>
      <hr />
      <InputWithLabel id="client-search" value={clientSearchTerm} onInputChange={handleClientSearch}>
        <strong>Client search:</strong>
      </InputWithLabel>
      <p>Number of filtered API tests: {apiTests.data.length - searchedApiTests.length}</p>

      {/* <hr />
      <InputWithLabel id="server-search" value={serverSearchTerm} onInputChange={handleServerSearchInput} isFocused>
        <strong>Server search:</strong>
      </InputWithLabel>
      <Button disabled={!serverSearchTerm} onClick={handleServerSearchSubmit}>
        Submit
      </Button>
      <hr /> */}
      <hr />
      <Form onSubmit={handleServerSearchSubmit}>
        <Form.Group controlId="server-search">
          <Form.Label>Server search</Form.Label>
          <Form.Control
            type="text"
            placeholder="Search an entry"
            value={serverSearchTerm}
            onChange={handleServerSearchInput}
            autoFocus
          />
        </Form.Group>
        <Button disabled={!serverSearchTerm} variant="light" type="submit">
          Submit
        </Button>
      </Form>
      <hr />

      {apiTests.isError && <p>There was an error!</p>}
      {apiTests.isLoading ? (
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
