type PGSearchProps = {
  onSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function PGSearch(props: PGSearchProps) {
  return (
    <div>
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" onChange={props.onSearch} />
      {/* <p>
        Searching for <strong>{searchTerm}</strong>.
      </p> */}
    </div>
  );
}
