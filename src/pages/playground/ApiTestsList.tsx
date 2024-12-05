import axios from "axios";
import { useEffect, useState } from "react";
import { Placeholder, Spinner } from "react-bootstrap";

interface IApiTests {
  id: string;
  title: string;
  created_at: string;
  updated_at: string;
}

export default function ApiTestsList() {
  const [apiTests, setApiTests] = useState<IApiTests[]>([]);
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
    <ul>
      {isLoading
        ? Array.from({ length: 4 }).map((_, index) => (
            <li key={index}>
              <Placeholder as="span" animation="glow">
                <Placeholder xs={3} />
              </Placeholder>
            </li>
          ))
        : apiTests.map((item) => (
            <li key={item.id}>
              <span>{item.title}</span>
              {/* <span>
                <a href={item.url}>{item.title}</a>
              </span>
              <span>{item.author}</span>
              <span>{item.num_comments}</span>
              <span>{item.points}</span> */}
            </li>
          ))}
    </ul>
  );
}
