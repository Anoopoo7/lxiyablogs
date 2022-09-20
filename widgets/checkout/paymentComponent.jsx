const PaymentComponent = () => {
  return (
    <div className="border p-3 rounded">
      <h3 className="text-center">Chooose Payment Type</h3>
      <br />
      <div className="form-check ml-5">
        <input
          className="form-check-input"
          type="radio"
          name="exampleRadios"
          id="exampleRadios1"
          value="option1"
          checked
        />
        <label className="form-check-label" htmlFor="exampleRadios1">
          COD
        </label>
      </div>
      <div className="form-check ml-5">
        <input
          className="form-check-input"
          type="radio"
          name="exampleRadios"
          id="exampleRadios2"
          value="option2"
        />
        <label className="form-check-label" htmlFor="exampleRadios2">
          Online Payment
        </label>
      </div>
      <br />
      <p className="text-justify text-muted">
        Lorem ipsum dolor sit, amet contetur adipisicing elit. Temporibus nihil
        repellendus ullam alias suscipit eaque repellat aspernatur. Voluptatibus
        provident tempora velit voluptate. Optio aperiam quibusdam nobis? Aut
        totam atque dignissimos culpa, numquam iure sunt veniam sapiente magnam
        nesciunt ex exercitationem repellendus necessitatibus provident.
        Facilis, accusamus!
      </p>
      <button className="btn btn-success btn-block btn-lg-flex">Place Order</button>
    </div>
  );
};

export default PaymentComponent;
