import { Stack } from "react-bootstrap";
import SectionListCard from "./SectionListCard";

const welcome = {
  greeting: "Welcome to the playground",
  subtitle: "Who told you what was down here?",
};

export default function PlaygroundHomePage() {
  return (
    <div>
      <h1>{welcome.greeting}</h1>
      <h2> {welcome.subtitle}</h2>
      <Stack gap={3}>
        <SectionListCard title={`Api Tests`} to={"playground/api-tests"} />
        <SectionListCard title={`CSS`} to={"playground/css"} />
      </Stack>
    </div>
  );
}
