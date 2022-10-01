import AvailableSizeComponent from "./availableSizecomponent";
import DescriptionHandleContainer from "./descriptionhandleContainer";
import ImageHandleContainer from "./imageHandleContainer";
import QuantityAdderComponet from "./quantityAdderComponent";

const PdpContainer = ({ products }) => {
  const [product] = products?.data;
  const images = product?.images;
  console.log(product);
  return (
    <div className="container mt-5 mb-5">
      <div className="row">
        <div className="col-12 col-lg-6 border rounded p-2">
          <ImageHandleContainer images={images} />
        </div>
        <div className="col-12 col-lg-6">
          <br />
          <DescriptionHandleContainer products={products?.data} />
        </div>
      </div>
    </div>
  );
};

export default PdpContainer;
