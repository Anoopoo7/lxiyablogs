const AddressCardComponent = ({ address }) => {
  return (
    <div
      className={`card ${
        address?.defaults ? "border-primary" : "border"
      } mb-3 p-3`}
    >
      <div className="card-body text-muted">
        <h5 className="card-title">{address?.buildingNo}</h5>
        <p className="card-text">
          {address?.city}
          <br />
          {address?.area}
          <br />
          {address?.state}
          <br />
          PIN: {address?.pincode}
          <br />
          MOB: +912 {address?.phoneOne}
          <br />
          MOB: +912 {address?.phoneTwo}
        </p>
      </div>
    </div>
  );
};

export default AddressCardComponent;
