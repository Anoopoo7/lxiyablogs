import { useEffect, useState } from "react";
import DescriptionHandleComponet from "./descriptionHandleComponet";

const DescriptionHandleContainer = ({ products, inventory }) => {
  const [product] = products;
  const [selectedSKU, setSelectedSKU] = useState({
    salePrice: "select the option",
  });

  return (
    <DescriptionHandleComponet
      product={product}
      inventory={inventory.varients}
      setSelectedSKU={setSelectedSKU}
      selectedSKU={selectedSKU}
    />
  );
};

export default DescriptionHandleContainer;
