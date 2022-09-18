const CartPricediv = () => {
  return (
    <div className="text-secondary p-3">
      <div className="d-flex justify-content-between">
        <div>Items price : </div>
        <div>$200</div>
      </div>
      <div className="d-flex justify-content-between">
        <div>Delivery charge : </div>
        <div>$50</div>
      </div>
      <div className="d-flex justify-content-between">
        <div>Discount : </div>
        <div>- $50</div>
      </div>
      <hr />
      <div className="d-flex justify-content-between">
        <div>Total : </div>
        <div>$200</div>
      </div>
    </div>
  );
};

export default CartPricediv;
