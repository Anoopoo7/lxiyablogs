import CardComponent from "./cardComponent";

const CardContainer = ({cardData}) => {
  return (
    <>
      <CardComponent cardData={cardData} />
    </>
  );
};

export default CardContainer;
