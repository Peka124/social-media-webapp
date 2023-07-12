import OneFriend from "./OneFriend";
import axios from "axios";
import { useState, useEffect } from "react";
import { ImSad2 } from "react-icons/im";
import React from "react";
import Search from "./Search";

const FriendsPage = () => {
  // const [searchTerm, setSearchTerm] = useState("");
  // const [searchResults, setSearchResults] = useState([]);

  // const handleSearch = (event) => {
  //   const term = event.target.value;
  //   setSearchTerm(term);

  //   const results = data.filter((dat) =>
  //     dat.toLowerCase().includes(term.toLowerCase())
  //   );
  //   setSearchResults(results);
  // };

  const [data, setData] = useState();
  useEffect(() => {
    if (data == null) {
      axios.get("api/clan").then((response) => {
        console.log(response.data);
        setData(response.data.data);
      });
    }
  }, [data]);

  return (
    <div>
      <h2>Friends</h2>
      <Search></Search>
      {data == null ? (
        <h2>
          You don't have friends{" "}
          <span>
            <ImSad2></ImSad2>
          </span>
        </h2>
      ) : (
        data.map((dat) => <OneFriend dat={dat} key={dat.id} />)
      )}
    </div>
  );
};

export default FriendsPage;
