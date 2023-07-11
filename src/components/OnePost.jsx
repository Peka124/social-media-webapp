const OnePost = () => {
  return (
    <div className="card">
      <div className="card-header">Category</div>
      <div className="card-body">
        <h5 className="card-title">Title</h5>
        <p className="card-text">Body</p>
        <a href="#" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
      <div className="card-footer text-muted">User</div>
    </div>
  );
};

export default OnePost;
