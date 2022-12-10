import TermsAndConditionComponet from "../../commons/termsAndConditionscomponent";
import HeadingComponent from "../heading/headingcomponent";
import CartPriceTable from "./cartPriceTable";
import CartTablecomponent from "./cartTablecomponent";
import CouponCodeContainer from "./couponcodeContainer";
import { getUserCart } from "../../services/orderService";
import Router from "next/router";
import { useMemo, useState } from "react";

const CartContainer = () => {
  const submitToCheckout = () => {
    Router.push("/checkout");
  };
  const [cart, setCart] = useState([]);
  useMemo(async () => {
    const response = await getUserCart();
    setCart(response.data);
  }, []);
  return (
    <div className="container">
      <HeadingComponent />
      <div className="row">
        <div className="col-12 col-md-8">
          <CartTablecomponent cart={cart} />
        </div>
        <div className="col-12 col-md-4">
          <div className="component border p-3 rounded">
            <CouponCodeContainer />
          </div>
          <CartPriceTable cart={cart} />
          <button
            className="btn btn-success mt-2 btn-block"
            onClick={submitToCheckout}
          >
            Checkout
          </button>
          <br />
          <TermsAndConditionComponet />
        </div>
      </div>
    </div>
  );
};

export default CartContainer;
