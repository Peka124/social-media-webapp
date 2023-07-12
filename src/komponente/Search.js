import React from "react";
import axios from "axios";
import OneFriend from "./OneFriend";
import { useState, useEffect } from "react";

const Search = () => {
  const [data1, setData] = useState();
  useEffect(() => {
    if (data1 == null) {
      axios.get("api/clan").then((response) => {
        console.log(response.data);
        setData(response.data.data1);
      });
    }
  }, [data1]);
  //
  //
  //dat1.imePrezime.toLowerCase().includes(term.toLowerCase());
  //
  //
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);

    const results = data1.filter((dat1) => dat1.includes(term));
    setSearchResults(results);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleSearch}
      />

      <ul>
        {searchResults.map((dat) => (
          <li key={dat.id}>{dat.imePrezime}</li>
        ))}
      </ul>
    </div>
  );
};

export default Search;
