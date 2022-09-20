import { useState } from "react";
import PaginationComponent from "../pagination/paginationcomponent";
import AddressContainer from "./addressContainer";
import OrderComponent from "./orderComponent";
import OrderContainer from "./orderContainer";
import ProfileMenuComponent from "./profilemenuComponent";

const ProfilePageContainer = () => {
  const [selectedPage, setSelectedPage] = useState("order");
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-4">
          <ProfileMenuComponent setSelectedPage={setSelectedPage}/>
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
