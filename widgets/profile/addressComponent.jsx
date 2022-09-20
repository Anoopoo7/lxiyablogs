const AddressComponent = () => {
  return (
    <form>
      <div className="form-group">
        <h3 className="text-center">Add new Address</h3>
        <hr />
        <div className="col m-1">
          <input type="text" className="form-control" placeholder="Home/Flat No*" required/>
        </div>
        <div className="col m-1">
          <input type="text" className="form-control" placeholder="Area*" required/>
        </div>
        <div className="col m-1">
          <input type="text" className="form-control" placeholder="City*" required/>
        </div>
        <div className="col m-1">
          <input type="text" className="form-control" placeholder="State*" required/>
        </div>
        <div className="col m-1">
          <input type="text" className="form-control" placeholder="PIN*" required/>
        </div>
        <div className="col m-1">
          <input type="text" className="form-control" placeholder="Mobile No*" required/>
        </div>
        <div className="col m-1">
          <input type="text" className="form-control" placeholder="Optional Mobile No" />
        </div>
        <div className="col m-1">
          <button className="btn btn-success btn-block">Add Address</button>
        </div>
      </div>
    </form>
  );
};

export default AddressComponent;
