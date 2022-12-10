import { useEffect, useState } from "react";
import DescriptionHandleComponet from "./descriptionHandleComponet";
import { addItemToCart } from "../../services/orderService";
import { useRouter } from "next/router";

const DescriptionHandleContainer = ({ products, inventory }) => {
  const [product, dummyInventory] = products;
  const [selectedSKU, setSelectedSKU] = useState({
    salePrice: "select the option",
  });
  const router = useRouter();
  const [varient, setVarient] = useState(null);
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

  const addToCartHandle = async () => {
    const body = {
      productId: product.id,
      quantity: selectedQuantity,
      varient: varient,
    };
    const response = await addItemToCart(body);
    if (response.data) {
      router.push("/cart")
    }
  };

  return (
    <DescriptionHandleComponet
      product={product}
      inventory={inventory.varients}
      setSelectedSKU={setSelectedSKU}
      selectedSKU={selectedSKU}
      selectedQuantity={selectedQuantity}
      decrementQuantity={decrementQuantity}
      incrementQuantity={incrementQuantity}
      addToCartHandle={addToCartHandle}
      setVarient={setVarient}
    />
  );
};

export default DescriptionHandleContainer;
