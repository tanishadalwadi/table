import React from "react";

const Search = ({ data, setData }) => {
  const { search } = window.location;
  const query = new URLSearchParams(search).get("s");
  const m = data.map((i) => {
    return <li>{i.name}</li>;
  });
  return (
    <form action="/" method="get">
      <label htmlFor="header-search">
        <span className="visually-hidden">Search the Table</span>
      </label>
      <input
        type="text"
        id="header-search"
        placeholder="Search the Table"
        name="s"
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default Search;
