const welcome = {
  greeting: "Welcome to the playground",
  subtitle: "Who told you what was down here?",
};

export default function PlaygroundPage() {
  return (
    <div>
      <h1>
        {welcome.greeting} {welcome.subtitle}
      </h1>
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" />
    </div>
  );
}
