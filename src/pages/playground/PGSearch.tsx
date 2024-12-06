import { useState } from "react";

export default function PGSearch() {
  const [searchTerm, setSearchTerm] = useState("");
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleBlur = () => {
    console.log("blurred");
  };

  return (
    <div>
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" onChange={handleChange} onBlur={handleBlur} />
      <p>
        Searching for <strong>{searchTerm}</strong>.
      </p>
    </div>
  );
}
