import AddressContainer from "../profile/addressContainer";
import PaymentComponent from "./paymentComponent";

const CheckoutPageContainer = () => {
  return (
    <div className="container">
      <AddressContainer />
      <br />
      <PaymentComponent/>
    </div>
  );
};

export default CheckoutPageContainer;
