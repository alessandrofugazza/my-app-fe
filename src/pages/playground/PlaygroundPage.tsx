import ApiTestsList from "./ApiTestsList";
import PGSearch from "./PGSearch";

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
  return (
    <div>
      <h1>
        {welcome.greeting} {welcome.subtitle}
      </h1>
      <hr />
      <PGSearch />
      <hr />
      <ApiTestsList />
    </div>
  );
}
