import React from "react";
import axios from "axios";
import OneFriend from "./OneFriend";
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

  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (e) => {
    const term = e.target.value;

    setSearchTerm(term);

    let results = data1.filter((dat1) => dat1.imePrezime.includes(term));
    setSearchResults(results);
    if (term == "") {
      setSearchResults(null);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleSearch}
        style={{ marginBottom: 20 + "px" }}
      />
      <div>
        {searchResults != null ? (
          searchResults.map((dat) => <OneFriend dat={dat} key={dat.id} />)
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default Search;
