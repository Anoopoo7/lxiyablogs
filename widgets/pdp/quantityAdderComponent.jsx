const QuantityAdderComponet = ({
  selectedQuantity,
  incrementQuantity,
  decrementQuantity,
}) => {
  return (
    <>
      <div className="orders-sections mt-3 d-flex">
        <div className="mr-2">
          <button className="btn" onClick={decrementQuantity}>
            -
          </button>
          <button className="btn bg-white border pl-3 pr-3">
            {selectedQuantity}
          </button>
          <button className="btn" onClick={incrementQuantity}>
            +
          </button>
        </div>
        <button className="btn ml-2 bg-primary text-light">Add to Cart</button>
        <button className="btn ml-2">
          {/* <img src="/icons8-heart-64.png" alt="wishlist" width={23} /> */}
          <img src="/icons8-heart-50.png" alt="wishlist" width={23} />
        </button>
      </div>
    </>
  );
};

export default QuantityAdderComponet;
