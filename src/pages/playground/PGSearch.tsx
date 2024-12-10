type PGSearchProps = {
  onSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
  search: string;
};

export default function PGSearch({ onSearch, search }: PGSearchProps) {
  return (
    <div>
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" onChange={onSearch} value={search} />
      {/* <p>
        Searching for <strong>{searchTerm}</strong>.
      </p> */}
    </div>
  );
}
