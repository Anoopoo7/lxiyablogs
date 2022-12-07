import PaginationComponent from "../pagination/paginationcomponent";
import AddressCardComponent from "./addressCardComponent";
import AddressComponent from "./addressComponent";

const AddressContainer = ({ addresses }) => {
  return (
    <div className="row">
      <div className="col-12 col-md-6">
        {addresses &&
          Array.isArray(addresses) &&
          addresses.map((each, i) => (
            <AddressCardComponent address={each} key={i} />
          ))}

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
