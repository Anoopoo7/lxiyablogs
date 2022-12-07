import { useState } from "react";
import AddressContainer from "./addressContainer";
import OrderContainer from "./orderContainer";
import ProfileMenuComponent from "./profilemenuComponent";

const ProfilePageContainer = () => {
  const [selectedPage, setSelectedPage] = useState("order");
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
      <div className="row">
        <div className="col-12 col-md-4">
          <ProfileMenuComponent setSelectedPage={setSelectedPage} />
        </div>
        <div className="col-12 col-md-8 mt-3">
          {selectedPage == "order" && <OrderContainer />}
          {selectedPage == "address" && (
            <AddressContainer addresses={addresses} />
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfilePageContainer;
