const AddressComponent = ({ handleAddress }) => {
  return (
    <form className="form-group" onSubmit={handleAddress}>
        <h3 className="text-center">Add new Address</h3>
        <hr />
        <div className="col m-1">
          <input
            type="text"
            name="buildingNo"
            className="form-control"
            placeholder="Home/Flat No*"
            required
          />
        </div>
        <div className="col m-1">
          <input
            type="text"
            name="area"
            className="form-control"
            placeholder="Area*"
            required
          />
        </div>
        <div className="col m-1">
          <input
            type="text"
            name="city"
            className="form-control"
            placeholder="City*"
            required
          />
        </div>
        <div className="col m-1">
          <input
            type="text"
            name="state"
            className="form-control"
            placeholder="State*"
            required
          />
        </div>
        <div className="col m-1">
          <input
            type="number"
            name="pincode"
            className="form-control"
            placeholder="PIN*"
            required
          />
        </div>
        <div className="col m-1">
          <input
            type="number"
            name="phoneOne"
            className="form-control"
            placeholder="Mobile No*"
            required
          />
        </div>
        <div className="col m-1">
          <input
            type="number"
            name="phoneTwo"
            className="form-control"
            placeholder="Optional Mobile No"
            required
          />
        </div>
        <div className="col m-1">
          <button className="btn btn-success btn-block">Add Address</button>
        </div>
    </form>
  );
};

export default AddressComponent;
