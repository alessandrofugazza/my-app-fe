import { TApiTest } from "../../types/TApiTest";
import ApiTestsList from "./ApiTestsList";
import PGSearch from "./PGSearch";
import axios from "axios";
import { useEffect, useState } from "react";

const welcome = {
  greeting: "Welcome to the playground",
  subtitle: "Who told you what was down here?",
};

// const list = [
//   {
//     title: "React",
//     url: "https://reactjs.org/",
//     author: "Jordan Walke",
//     num_comments: 3,
//     points: 4,
//     objectID: 0,
//   },
//   {
//     title: "Redux",
//     url: "https://redux.js.org/",
//     author: "Dan Abramov, Andrew Clark",
//     num_comments: 2,
//     points: 5,
//     objectID: 1,
//   },
// ];

export default function PlaygroundPage() {
  const [apiTests, setApiTests] = useState<TApiTest[]>([]);
  const [isLoading, setIsLoading] = useState(true);

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
      <PGSearch />
      <hr />
      <ApiTestsList isLoading={isLoading} apiTests={apiTests} />
    </div>
  );
}
