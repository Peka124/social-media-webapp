import OnePost from "./OnePost";
import axios from "axios";
import { useState, useEffect } from "react";

const PostsPage = () => {
  const [data, setData] = useState();
  useEffect(() => {
    if (data == null) {
      axios.get("api/forum").then((response) => {
        console.log(response.data);
        setData(response.data.data);
      });
    }
  }, [data]);

  return (
    <div>
      <h3>Theese are all data from database.</h3>
      {data == null ? (
        <></>
      ) : (
        data.map((dat) => <OnePost dat={dat} key={dat.ID} />)
      )}
    </div>
  );
};

export default PostsPage;
