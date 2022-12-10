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
    const buildingNo = e.target.buildingNo.value;
    const area = e.target.area.value;
    const city = e.target.city.value;
    const state = e.target.state.value;
    const pincode = e.target.pincode.value;
    const phoneOne = e.target.phoneOne.value;
    const phoneTwo = e.target.phoneTwo.value;
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
