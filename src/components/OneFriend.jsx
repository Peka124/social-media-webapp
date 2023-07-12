import axios from "axios";
import { FaMinus } from "react-icons/fa";

const OneFriend = ({ dat }) => {
  const onDeleteClick = (e) => {
    if (!window.confirm("Are you sure you want to delete this user?")) {
      return;
    }
    axios.delete(`/users/${dat.id}`).then(() => {
      console.log("User was successfully deleted");
    });
  };
  return (
    <div className="card text-center">
      <div className="card-header">{dat.imePrezime}</div>
      <div className="card-body">
        <h5 className="card-title">{dat.username}</h5>
        <div>
          <button className="btn btn-success" onClick={onDeleteClick}>
            Remove <FaMinus></FaMinus>
          </button>
        </div>
      </div>
      <div className="card-footer text-muted">{dat.forum.osnivac}</div>
    </div>
  );
};

export default OneFriend;
