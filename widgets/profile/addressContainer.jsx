import PaginationComponent from "../pagination/paginationcomponent";
import AddressCardComponent from "./addressCardComponent";
import AddressComponent from "./addressComponent";

const AddressContainer = ({ addresses, handleAddress }) => {
  return (
    <div className="row">
      <div className="col-12 col-md-6">
        {addresses &&
          Array.isArray(addresses) &&
          addresses.map((each, i) => (
            <AddressCardComponent address={each} key={i} />
          ))}

        {addresses && Array.isArray(addresses) && addresses.length > 3 && (
          <div className="d-flex justify-content-center">
            <PaginationComponent />
          </div>
        )}
      </div>
      <div className="col-12 col-md-6">
        <AddressComponent handleAddress={handleAddress} />
      </div>
    </div>
  );
};

export default AddressContainer;
