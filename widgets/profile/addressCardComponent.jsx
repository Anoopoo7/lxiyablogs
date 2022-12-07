const AddressCardComponent = ({ address }) => {
  return (
    <div
      className={`card ${
        address?.default ? "border-primary" : "border"
      } mb-3 p-3`}
    >
      <div className="card-body text-muted">
        <h5 className="card-title">{address?.buildNo}</h5>
        <p className="card-text">
          {address?.city}
          <br />
          {address?.area}
          <br />
          {address?.state}
          <br />
          PIN: {address?.pincode}
          <br />
          MOB: +912 {address?.phone1}
          <br />
          MOB: +912 {address?.phone2}
        </p>
      </div>
    </div>
  );
};

export default AddressCardComponent;
