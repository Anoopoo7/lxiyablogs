const CartPricediv = ({ cart }) => {
  return (
    <div className="text-secondary p-3">
      <div className="d-flex justify-content-between">
        <div>Items price : </div>
        <div>$ {cart?.pricingInfo?.totalPrice}.00</div>
      </div>
      <div className="d-flex justify-content-between">
        <div>Delivery charge : </div>
        <div>$ {cart?.pricingInfo?.deliveryCharge}.00</div>
      </div>
      <div className="d-flex justify-content-between">
        <div>Discount : </div>
        <div>- $ {cart?.pricingInfo?.discount}.00</div>
      </div>
      <hr />
      <div className="d-flex justify-content-between">
        <div>Total : </div>
        <div>$ {cart?.pricingInfo?.netPrice}.00</div>
      </div>
    </div>
  );
};

export default CartPricediv;
