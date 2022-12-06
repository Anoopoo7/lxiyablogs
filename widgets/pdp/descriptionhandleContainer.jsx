import { useEffect, useState } from "react";
import DescriptionHandleComponet from "./descriptionHandleComponet";

const DescriptionHandleContainer = ({ products, inventory }) => {
  const [product, dummyInventory] = products;
  const [selectedSKU, setSelectedSKU] = useState({
    salePrice: "select the option",
  });
  const [selectedQuantity, setSelectedQuantity] = useState(1);

  const decrementQuantity = () => {
    if (selectedQuantity !== 1) {
      setSelectedQuantity((prev) => prev - 1);
    }
  };
  const incrementQuantity = () => {
    if (selectedQuantity < selectedSKU.quantity) {
      setSelectedQuantity((prev) => prev + 1);
    }
  };
  useEffect(() => {
    const [key] = Object.keys(dummyInventory.varients);
    setSelectedSKU(dummyInventory.varients[key]);
  }, []);

  return (
    <DescriptionHandleComponet
      product={product}
      inventory={inventory.varients}
      setSelectedSKU={setSelectedSKU}
      selectedSKU={selectedSKU}
      selectedQuantity={selectedQuantity}
      decrementQuantity={decrementQuantity}
      incrementQuantity={incrementQuantity}
    />
  );
};

export default DescriptionHandleContainer;
