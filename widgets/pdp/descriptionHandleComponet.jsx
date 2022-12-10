import AvailableSizeComponent from "./availableSizecomponent";
import QuantityAdderComponet from "./quantityAdderComponent";

const DescriptionHandleComponet = ({
  product,
  inventory,
  setVarient,
  selectedSKU,
  setSelectedSKU,
  addToCartHandle,
  selectedQuantity,
  incrementQuantity,
  decrementQuantity,
}) => {
  return (
    <>
      <h5>
        <b> {product?.name}</b>
      </h5>
      <br />
      <p className="text-muted">{product?.shortDescription}</p>
      <br />
      <br />
      <AvailableSizeComponent
        inventory={inventory}
        setSelectedSKU={setSelectedSKU}
        setVarient={setVarient}
      />
      <br />
      <br />
      <h3>Rs. {selectedQuantity * selectedSKU?.salePrice}</h3>
      <QuantityAdderComponet
        inventory={inventory}
        setSelectedSKU={setSelectedSKU}
        selectedQuantity={selectedQuantity}
        incrementQuantity={incrementQuantity}
        decrementQuantity={decrementQuantity}
        addToCartHandle={addToCartHandle}
      />
      <hr />
      <small className="text-muted">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum optio
        dicta cupiditate illo, alias dolore ipsam sed nesciunt, beatae sint
        dignissimos accusantium praesentium obcaecati. Fuga totam enim
        voluptatem, id architecto amet, minima esse, ducimus reiciendis libero
        ipsum necessitatibus ad veritatis saepe debitis! Modi, iusto animi.
      </small>
    </>
  );
};

export default DescriptionHandleComponet;
