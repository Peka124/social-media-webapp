import React from "react";
import { FaMinus } from "react-icons/fa";

const Delete = () => {
  const handleClick = (e) => {};
  return (
    <div className="card text-right" style={{ display: "inline" }}>
      <button className="btn btn-danger" onClick={handleClick}>
        Remove
        <FaMinus></FaMinus>
      </button>
    </div>
  );
};

export default Delete;
