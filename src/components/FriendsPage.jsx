import OneFriend from "./OneFriend";
import axios from "axios";
import { useState, useEffect } from "react";
import { ImSad2 } from "react-icons/im";
import Search from "./Search";
import React from "react";

const FriendsPage = () => {
  const [clans, setClans] = useState([]);

  useEffect(() => {
    fetchClans();
  }, []);

  const fetchClans = () => {
    let token = window.sessionStorage.getItem("auth_token");
    axios.defaults.headers.common = { Authorization: `Bearer ${token}` };
    axios
      .get(`api/clan`)
      .then((response) => {
        console.log(response.data);
        setClans(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching clans:", error);
      });
  };

  const handleDelete = (e) => {
    setClans(clans.filter((clan) => clan.id !== e));
  };

  const [data, setData] = useState();

  useEffect(() => {
    if (data == null) {
      console.log(window.sessionStorage);
      let token = window.sessionStorage.getItem("auth_token");
      axios.defaults.headers.common = { Authorization: `Bearer ${token}` };
      axios.get("api/clan").then((response) => {
        console.log(response.data);
        setData(response.data.data);
      });
    }
  }, [data]);

  const handleSortId = (e) => {
    let sId = data.sort((a, b) => {
      console.log(`comparing ${a.id},${b.id}`);
      return a.id < b.id ? 1 : a.id === b.id ? 0 : -1;
    });
    setData(sId);
    setClans(sId);
  };
  const handleSortName = () => {
    let sId = data.sort((a, b) => {
      console.log(`comparing ${a.imePrezime},${b.imePrezime}`);
      return a.imePrezime > b.imePrezime
        ? 1
        : a.imePrezime === b.imePrezime
        ? 0
        : -1;
    });
    setData(sId);
    setClans(sId);
  };

  return (
    <div>
      <h2>Friends</h2>
      {data == null ? (
        <h2>
          You don't have friends{" "}
          <span>
            <ImSad2></ImSad2>
          </span>
        </h2>
      ) : (
        <div>
          <Search></Search>
          <div style={{ display: "inline" }}>
            <button
              className="btn btn-primary"
              onClick={() => {
                handleSortId(data.id);
              }}
            >
              Sort by ID
            </button>

            <button
              style={{ marginLeft: 10 + "px" }}
              className="btn btn-primary"
              onClick={() => {
                handleSortName(data.imePrezime);
              }}
            >
              Sort by Name
            </button>
          </div>
          <hr></hr>
          {data.map((dat) => (
            <OneFriend dat={dat} key={dat.id} onDelete={handleDelete} />
          ))}
        </div>
      )}
    </div>
  );
};

export default FriendsPage;
