import AvailableSizeComponent from "./availableSizecomponent";
import QuantityAdderComponet from "./quantityAdderComponent";

const DescriptionHandleComponet = ({ product, inventory }) => {
  return (
    <>
      <h5>
        <b> {product?.name}</b>
      </h5>
      <br />
      <p>{product?.shortDescription}</p>
      <AvailableSizeComponent inventory={inventory} />
      <QuantityAdderComponet inventory={inventory} />
      <hr />
      <small>
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
