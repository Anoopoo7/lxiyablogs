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

  const handleAddress = (e) => {
    e.preventDefault();
    const billingAddress = {
      buildingNo: e.target.buildingNo.value,
      area: e.target.area.value,
      city: e.target.city.value,
      state: e.target.state.value,
      pincode: e.target.pincode.value,
      phoneOne: e.target.phoneOne.value,
      phoneTwo: e.target.phoneTwo.value,
    };
    console.log(billingAddress);
  };

  return (
    <div className="container">
      {address ? (
        <SelectAddressComponent setAddress={setAddress} />
      ) : (
        <AddressContainer addresses={addresses} handleAddress={handleAddress} />
      )}
      <br />
      <PaymentComponent />
    </div>
  );
};

export default CheckoutPageContainer;
