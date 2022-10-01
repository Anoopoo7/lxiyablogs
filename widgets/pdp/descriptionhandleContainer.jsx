import DescriptionHandleComponet from "./descriptionHandleComponet";

const DescriptionHandleContainer = ({ products }) => {
  const [product, inventory] = products;

  return <DescriptionHandleComponet product={product} inventory={inventory.varients} />;
};

export default DescriptionHandleContainer;
