import { Placeholder } from "react-bootstrap";
import { TApiTest } from "../../types/TApiTest";

type ApiTestListProps = {
  isLoading: boolean;
  apiTests: TApiTest[];
};

export default function ApiTestsList(props: ApiTestListProps) {
  return (
    <ul>
      {props.isLoading
        ? Array.from({ length: 4 }).map((_, index) => (
            <li key={index}>
              <Placeholder as="span" animation="glow">
                <Placeholder xs={3} />
              </Placeholder>
            </li>
          ))
        : props.apiTests.map((item) => (
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
