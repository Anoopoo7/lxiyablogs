const CouponcodeComponet = () => {
  return (
    <>
      <h3>Have coupon ?</h3>
      <br />
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Enter coupon code"
          aria-label="Recipient's username"
          aria-describedby="button-addon2"
        />
        <div className="input-group-append">
          <button
            className="btn btn-outline-secondary"
            type="button"
            id="button-addon2"
          >
            Apply
          </button>
        </div>
      </div>
    </>
  );
};

export default CouponcodeComponet;
