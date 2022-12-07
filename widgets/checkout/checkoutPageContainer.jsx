import { useState } from "react";
import AddressContainer from "../profile/addressContainer";
import PaymentComponent from "./paymentComponent";
import SelectAddressComponent from "./selectAddressComponent";

const CheckoutPageContainer = () => {
  const [address, setAddress] = useState({});
  const [addresses, SetAddresses] = useState([
    {
      buildNo: "MK001",
      city: "dubai",
      area: "fetival mall",
      pincode: "10091",
      phone1: "58135656",
      phone2: "58135656",
      state: "qatar",
      default: true,
    },
    {
      buildNo: "MK002",
      city: "sharja",
      area: "sharja mall",
      pincode: "90091",
      phone1: "58135656",
      phone2: "58135656",
      state: "homnkong",
      default: false,
    },
  ]);
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
