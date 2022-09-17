/* eslint-disable @next/next/no-img-element */
const CardComponent = () => {
  return (
    <div className="item-card m-2">
      <a href="/product/abc" className="text-dark">
        <div className="imgBox">
          <img
            src="https://images.prismic.io/slicemachine-blank/30d6602b-c832-4379-90ef-100d32c5e4c6_selfie.png?auto=compress,format"
            alt="mouse corsair"
            className="mouse"
          />
        </div>
      </a>
      <div className="contentBox text-decoration-none">
        <h3>Mouse Corsair M65</h3>
        <h2 className="price">
          61.<small>98</small> €
        </h2>
        <a href="#" className="buy">
          Buy Now
        </a>
      </div>
    </div>
  );
};

export default CardComponent;
