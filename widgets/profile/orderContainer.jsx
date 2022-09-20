import PaginationComponent from "../pagination/paginationcomponent";
import OrderComponent from "./orderComponent";

const OrderContainer = () => {
  return (
    <>
      <OrderComponent />
      <OrderComponent />
      <OrderComponent />
      <div className="d-flex justify-content-center">
        <PaginationComponent />
      </div>
    </>
  );
};

export default OrderContainer;
