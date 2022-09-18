import DropdownComponent from "../../commons/dropdowncomponent";

const CartTablecomponent = () => {
  return (
    <table className="table table-striped border">
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Quantity</th>
          <th scope="col">Price</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Mark</td>
          <td>
            <DropdownComponent />
          </td>
          <td>$ 100</td>
        </tr>
        <tr>
          <td>Jacob</td>
          <td>
            <DropdownComponent />
          </td>
          <td>$ 299</td>
        </tr>
        <tr>
          <td>Larry</td>
          <td>
            <DropdownComponent />
          </td>
          <td>$ 199</td>
        </tr>
        <tr>
          <td>Mark</td>
          <td>
            <DropdownComponent />
          </td>
          <td>$ 100</td>
        </tr>
        <tr>
          <td>Jacob</td>
          <td>
            <DropdownComponent />
          </td>
          <td>$ 299</td>
        </tr>
        <tr>
          <td>Larry</td>
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
