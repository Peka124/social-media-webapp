import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

const Search = () => {
  const [data1, setData] = useState();
  useEffect(() => {
    if (data1 == null) {
      let token = window.sessionStorage.getItem("auth_token");
      axios.defaults.headers.common = { Authorization: `Bearer ${token}` };
      axios.get("api/clan").then((response) => {
        console.log(response.data);
        setData(response.data.data);
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
    console.log(data1);
    setSearchTerm(term);

    const results = data1.filter((dat1) => dat1.imePrezime.includes(term));
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
