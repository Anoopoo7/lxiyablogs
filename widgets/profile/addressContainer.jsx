import PaginationComponent from "../pagination/paginationcomponent";
import AddressCardComponent from "./addressCardComponent";
import AddressComponent from "./addressComponent";

const AddressContainer = () => {
  return (
    <div className="row">
      <div className="col-12 col-md-6">
        <AddressCardComponent />
        <AddressCardComponent />
        <AddressCardComponent />
        <div className="d-flex justify-content-center">
          <PaginationComponent />
        </div>
      </div>
      <div className="col-12 col-md-6">
        <AddressComponent />
      </div>
    </div>
  );
};

export default AddressContainer;
