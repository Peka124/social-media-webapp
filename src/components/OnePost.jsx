const OnePost = ({ dat }) => {
  return (
    <div className="card">
      <div className="card-header">{dat.email}</div>
      <div className="card-body">
        <h5 className="card-title">{dat.instagram}</h5>
        <p className="card-text">{dat.osnivac}</p>
        <a href="#" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
      <div className="card-footer text-muted">{dat.instagram}</div>
    </div>
  );
};

export default OnePost;
