import { useEffect, useState } from "react";
import DescriptionHandleContainer from "./descriptionhandleContainer";
import ImageHandleContainer from "./imageHandleContainer";

const PdpContainer = ({ products, productInventory }) => {
  const [inventory, setInventory] = useState({});
  const [product] = products?.data;
  const images = product?.images;
  useEffect(() => {
    productInventory.then((req) => {
      setInventory(req);
    });
  }, []);
  return (
    <div className="container mt-5 mb-5">
      <div className="row">
        <div className="col-12 col-lg-6 border rounded p-2">
          <ImageHandleContainer images={images} />
        </div>
        <div className="col-12 col-lg-6">
          <br />
          <DescriptionHandleContainer
            products={products?.data}
            inventory={inventory}
          />
        </div>
      </div>
    </div>
  );
};

export default PdpContainer;
