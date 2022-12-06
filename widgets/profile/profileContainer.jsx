import { useState } from "react";
import AddressContainer from "./addressContainer";
import OrderContainer from "./orderContainer";
import ProfileMenuComponent from "./profilemenuComponent";
import { getUser } from "../../utils/userManager";

const ProfilePageContainer = () => {
  const [selectedPage, setSelectedPage] = useState("order");
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-4">
          <ProfileMenuComponent setSelectedPage={setSelectedPage} />
        </div>
        <div className="col-12 col-md-8 mt-3">
          {selectedPage == "order" && <OrderContainer />}
          {selectedPage == "address" && <AddressContainer />}
        </div>
      </div>
    </div>
  );
};

export default ProfilePageContainer;
