import OneFriendUser from "./OneFriendUser";
import axios from "axios";
import { useState, useEffect } from "react";
import { ImSad2 } from "react-icons/im";
import Search from "./Search";
import Sort from "./Sort";
import React from "react";

const FriendsPageUser = () => {
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

  return (
    <div>
      <h2>Friends</h2>
      {/* <Search></Search> */}
      {console.log(Search)}
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
          {/* <Sort></Sort> */}
          {data.map((dat) => (
            <OneFriendUser dat={dat} key={dat.id} />
          ))}
        </div>
      )}
    </div>
  );
};

export default FriendsPageUser;
