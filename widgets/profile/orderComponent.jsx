const OrderComponent = () => {
  return (
    <div className="card m-2">
      <div className="card-body">
        <h5 className="card-title">Zoo UI washing Milk 200D</h5>
        <h6 className="card-subtitle mb-2 text-muted">Shipped</h6>
        <p className="card-text text-muted">
          Some quick example text to
          <br />
          build on the card title and make up the
          <br />
          bulk of the cards content.
          <br />
          PIN: 345543
          <br />
          MOB: +91 987654310
        </p>
        <a href="#" className="card-link">
          Edit
        </a>
        <a href="#" className="card-link text-danger">
          Cancel
        </a>
      </div>
    </div>
  );
};

export default OrderComponent;
