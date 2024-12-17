import { ApiTest } from "../../types/ApiTest";
import ApiTestForm from "./ApiTestForm";
import ApiTestList from "./ApiTestList";
import axios from "axios";
import { useEffect, useState } from "react";
import InputWithLabel from "./InputWithLabel";

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

export default function PlaygroundPage() {
  const [apiTests, setApiTests] = useState<ApiTest[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const [searchTerm, setSearchTerm] = useStorageState("search", "");
  // const [searchTerm, setSearchTerm] = useState(localStorage.getItem("search") || "");

  // useEffect(() => {
  //   localStorage.setItem("search", searchTerm);
  // }, [searchTerm]);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleRemoveApiTest = async (apiTestId: string) => {
    try {
      await axios.delete(`${import.meta.env.VITE_API_BASE_URL}/api-tests/v1/${apiTestId}`);
      setApiTests(apiTests.filter((test) => test.id !== apiTestId));
    } catch (error) {
      console.error("Failed to delete the API test:", error);
    }
  };

  const searchedApiTests = apiTests.filter((apiTest) => apiTest.title.toLowerCase().includes(searchTerm.toLowerCase()));

  const fetchApiTests = async () => {
    try {
      const re = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/api-tests/v1/`);
      setApiTests(re.data);
      setIsLoading(false);
    } catch (error) {
      console.error("There was an error fetching the Api Tests!", error);
    }
  };

  useEffect(() => {
    fetchApiTests();
  }, []);

  return (
    <div>
      <h1>
        {welcome.greeting} {welcome.subtitle}
      </h1>
      <hr />
      {/* <PGSearch onSearch={handleSearch} search={searchTerm} /> */}
      <InputWithLabel id="search" value={searchTerm} onInputChange={handleSearch} isFocused>
        <strong>Search:</strong>
      </InputWithLabel>
      <hr />
      <ApiTestList isLoading={isLoading} apiTests={searchedApiTests} onRemoveApiTest={handleRemoveApiTest} />

      <hr />
      <ApiTestForm />
    </div>
  );
}
