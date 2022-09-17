import AvailableSizeComponent from "./availableSizecomponent";
import DescriptionHandleContainer from "./descriptionhandleContainer";
import ImageHandleContainer from "./imageHandleContainer";
import QuantityAdderComponet from "./quantityAdderComponent";

const PdpContainer = () => {
  return (
    <div className="container mt-5 mb-5">
      <div className="row">
        <div className="col-12 col-lg-6 border rounded p-2">
          <ImageHandleContainer />
        </div>
        <div className="col-12 col-lg-6">
          <br />
          <DescriptionHandleContainer />
        </div>
      </div>
    </div>
  );
};

export default PdpContainer;
