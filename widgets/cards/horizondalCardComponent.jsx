/* eslint-disable react/jsx-key */
import CardContainer from "./cardContainer";

const HorizondalcardContainer = ({ featured }) => {
  return (
    <div className="horizondal-inner">
      {featured &&
        Array.isArray(featured) &&
        featured.map((item, i) => <CardContainer key={i} cardData={item} />)}
    </div>
  );
};

export default HorizondalcardContainer;
