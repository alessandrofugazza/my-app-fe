export default function PGSearch() {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // synthetic event
    console.log(event);
    // value of target (here: input HTML element)
    console.log(event.target.value);
  };

  const handleBlur = () => {
    console.log("blurred");
  };

  return (
    <div>
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" onChange={handleChange} onBlur={handleBlur} />
    </div>
  );
}
