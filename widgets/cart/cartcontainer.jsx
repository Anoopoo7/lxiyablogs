import TermsAndConditionComponet from "../../commons/termsAndConditionscomponent";
import HeadingComponent from "../heading/headingcomponent";
import CartPriceTable from "./cartPriceTable";
import CartTablecomponent from "./cartTablecomponent";
import CouponCodeContainer from "./couponcodeContainer";
import Router from 'next/router'

const CartContainer = () => {
  const submitToCheckout=()=>{
    Router.push("/checkout")
  }
  return (
    <div className="container">
      <HeadingComponent />
      <div className="row">
        <div className="col-12 col-md-8">
          <CartTablecomponent />
        </div>
        <div className="col-12 col-md-4">
          <div className="component border p-3 rounded">
            <CouponCodeContainer />
          </div>
            <CartPriceTable />
          <button className="btn btn-success mt-2 btn-block" onClick={submitToCheckout}>Checkout</button>
          <br />
          <TermsAndConditionComponet />
        </div>
      </div>
    </div>
  );
};

export default CartContainer;
