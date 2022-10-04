/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-img-element */
const CardComponent = ({ cardData }) => {
  return (
    <div className="item-card m-2">
      {cardData && Array.isArray(cardData) && cardData.length == 2 && (
        <>
          <a href={`product${cardData[0]?.landingPageUrl}`} className="text-dark">
            <div className="imgBox">
              <img
                src={cardData[0]?.images[0]}
                alt="mouse corsair"
                className="mouse"
              />
            </div>
          </a>
          <div className="contentBox text-decoration-none">
            <h6>
              {cardData[0]?.name.substring(0, 20)}
              {cardData[0]?.name.length > 20 ? "..." : ""}
            </h6>
            <h5 className="price">
              $ {cardData[1]?.defaultPrice}.<small>00</small> <small className="small-cut">850.00</small>
            </h5>
            <a href="#" className="buy">
              Buy Now
            </a>
          </div>
        </>
      )}
    </div>
  );
};

export default CardComponent;
