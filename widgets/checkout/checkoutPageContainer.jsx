import { useMemo, useState } from "react";
import AddressContainer from "../profile/addressContainer";
import PaymentComponent from "./paymentComponent";
import SelectAddressComponent from "./selectAddressComponent";
import { getUserAddresses } from "../../services/userServices";

const CheckoutPageContainer = () => {
  const [address, setAddress] = useState({});
  const [addresses, SetAddresses] = useState([]);

  useMemo(async () => {
    const response = await getUserAddresses();
    SetAddresses(response.data);
  }, []);
  return (
    <div className="container">
      {address ? (
        <SelectAddressComponent setAddress={setAddress} />
      ) : (
        <AddressContainer addresses={addresses} />
      )}
      <br />
      <PaymentComponent />
    </div>
  );
};

export default CheckoutPageContainer;
