import DropdownComponent from "../../commons/dropdowncomponent";

const CartTablecomponent = () => {
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
        <tr>
          <td>
            <small>marko polo jeans (bl...</small>
          </td>
          <td>
            <DropdownComponent />
          </td>
          <td>$ 100</td>
        </tr>
        <tr>
          <td>
            <small>Men Regular Fit Stri...</small>
          </td>
          <td>
            <DropdownComponent />
          </td>
          <td>$ 299</td>
        </tr>
        <tr>
          <td>
            <small>Women Printed A-line...</small>
          </td>
          <td>
            <DropdownComponent />
          </td>
          <td>$ 199</td>
        </tr>
      </tbody>
    </table>
  );
};

export default CartTablecomponent;
