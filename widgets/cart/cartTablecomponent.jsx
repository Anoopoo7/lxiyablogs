import DropdownComponent from "../../commons/dropdowncomponent";

const CartTablecomponent = ({ cart }) => {
  const lineItems = cart?.lineItems;

  const limit = (string) => {
    return string.substring(0, 15);
  };
  return (
    <table className="table border">
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Quantity</th>
          <th scope="col">Price</th>
        </tr>
      </thead>
      <tbody>
        {lineItems &&
          Array.isArray(lineItems) &&
          lineItems.map((each, i) => (
            <tr key={i}>
              <td title={`${each.name} [ ${each.varient} ]`}>
                <a href={`/product/${each.landingPageUrl}`}>
                  {limit(each.name)}...
                </a>
              </td>
              <td>
                <DropdownComponent quantity={each.quantity} />
              </td>
              <td>$ {each.price}.00</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default CartTablecomponent;
