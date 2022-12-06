import PdpContainer from "../widgets/pdp/pdpcontainer";

const ProductDescriptionpage = ({ products, productInventory }) => {
  return (
    <PdpContainer products={products} productInventory={productInventory} />
  );
};

export default ProductDescriptionpage;
