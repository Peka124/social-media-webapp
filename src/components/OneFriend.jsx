import axios from "axios";

const OneFriend = ({ dat, onDelete }) => {
  //******************************************************************************* */
  const handleDelete = () => {
    console.log("Brisem clana " + dat.id);
    axios
      .delete(`api/clan/${dat.id}`)
      .then((response) => {
        console.log(response.data);
        onDelete(dat.id);
        window.location.reload();
      })
      .catch((error) => {
        console.error("Error deleting friend:", error);
      });
  };

  function openForm(e) {
    let ne = document.createElement("p");

    let glavni = e.target.previousElementSibling;
    glavni.appendChild(ne);
    ne.innerHTML = `<hr>
                    <h5 class="col-md-8 col-lg-6 col-xl-4 text-left"}>${dat.forum.email}</h5>
                    <h5 class="col-md-8 col-lg-6 col-xl-4 text-left">${dat.forum.instagram}</h5
                    <h5 class="col-md-8 col-lg-6 col-xl-4 text-left">Forum created by <i>${dat.forum.osnivac}</i></h5>`;
    e.target.setAttribute("disabled", "true");
    let of = e.target.nextElementSibling;
    of.removeAttribute("disabled");
  }

  function closeForm(e) {
    let ne = document.querySelector("p");
    if (e.target.disabled != "true" && ne != null) {
      ne.remove();
      let glavni = e.target.previousElementSibling;
      glavni.removeAttribute("disabled");
      e.target.setAttribute("disabled", "true");
    }
  }

  return (
    <div
      className="col-md-8 col-lg-4 col-xl-8 text-center main-div"
      style={{
        marginBottom: 90 + "px",
        marginLeft: 15 + "%",
      }}
    >
      <div className="submain-div">
        <div style={{ textAlign: "center" }}>
          <h3 className="title">{dat.imePrezime}</h3>
          <h4 className="col-md-8 col-lg-4 col-xl-6 text-center username">
            {dat.username}
          </h4>
          <h4 className="col-md-8 col-lg-4 col-xl-6 text-center osnivac">
            {dat.email}
          </h4>
        </div>

        <div className="forum" style={{}}></div>
        <button
          className="open-button btn btn-primary"
          style={{ marginLeft: 36 + "%" }}
          onClick={openForm}
        >
          Open Forum
        </button>
        <button className="close-button btn btn-secondary" onClick={closeForm}>
          Close Forum
        </button>

        <button
          className="btn btn-danger"
          style={{ marginLeft: 25 + "px" }}
          onClick={() => {
            handleDelete();
          }}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default OneFriend;
