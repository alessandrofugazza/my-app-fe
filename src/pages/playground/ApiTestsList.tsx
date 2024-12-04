import axios from "axios";
import { useEffect, useState } from "react";

interface IApiTests {
  id: string;
  title: string;
  created_at: string;
  updated_at: string;
}

export default function ApiTestsList() {
  const [apiTests, setApiTests] = useState<IApiTests[]>([]);

  const fetchApiTests = async () => {
    try {
      const re = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/api-tests/v1/`);
      setApiTests(re.data);
    } catch (error) {
      console.error("There was an error fetching the Api Tests!", error);
    }
  };

  useEffect(() => {
    fetchApiTests();
  }, []);

  return (
    <ul>
      {apiTests.map((item) => (
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
