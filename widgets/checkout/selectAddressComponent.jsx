const SelectAddressComponent = ({ setAddress }) => {
  return (
    <div className="card border mb-3 p-3">
      <small className="text-right">
        <button
          className="btn btn-secondary btn-sm"
          onClick={() => {
            setAddress(null);
          }}
        >
          Change
        </button>
      </small>
      <div className="card-body text-muted">
        <h5 className="card-title text-dark">MVR 112</h5>
        <p className="card-text">
          Kunamkulam
          <br />
          Guruvayoor
          <br />
          Palakkad
          <br />
          PIN: 322341
          <br />
          MOB: +91 9238124780
        </p>
      </div>
    </div>
  );
};

export default SelectAddressComponent;
