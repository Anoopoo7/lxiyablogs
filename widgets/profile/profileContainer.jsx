import { useMemo, useState } from "react";
import AddressContainer from "./addressContainer";
import OrderContainer from "./orderContainer";
import ProfileMenuComponent from "./profilemenuComponent";
import {
  getUserAddresses,
  saveUserAddresses,
} from "../../services/userServices";

const ProfilePageContainer = () => {
  const [selectedPage, setSelectedPage] = useState("order");
  const [addresses, SetAddresses] = useState([]);

  useMemo(async () => {
    const response = await getUserAddresses();
    SetAddresses(response.data);
  }, []);

  const handleAddress = async (e) => {
    e.preventDefault();
    const buildingNo = e.target.buildingNo.value || "";
    const area = e.target.area.value || "";
    const city = e.target.city.value || "";
    const state = e.target.state.value || "";
    const pincode = e.target.pincode.value || "";
    const phoneOne = e.target.phoneOne.value || "";
    const phoneTwo = e.target.phoneTwo.value || "";
    const response = await saveUserAddresses({
      buildingNo,
      area,
      city,
      state,
      pincode,
      phoneOne,
      phoneTwo,
    });
    SetAddresses(response.data);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-4">
          <ProfileMenuComponent setSelectedPage={setSelectedPage} />
        </div>
        <div className="col-12 col-md-8 mt-3">
          {selectedPage == "order" && <OrderContainer />}
          {selectedPage == "address" && (
            <AddressContainer
              addresses={addresses}
              handleAddress={handleAddress}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfilePageContainer;
