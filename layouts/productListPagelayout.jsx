import CardContainer from "../widgets/cards/cardContainer";
import VerticalCardComponent from "../widgets/cards/verticalCardComponent";
import HeadingComponent from "../widgets/heading/headingcomponent";
import PaginationComponent from "../widgets/pagination/paginationcomponent";

const ProductListPageLayout = () => {
  return (
    <>
      <HeadingComponent />
      <VerticalCardComponent />
      <div className="container d-flex justify-content-center align-items-center mt-2">
        <PaginationComponent />
      </div>
    </>
  );
};

export default ProductListPageLayout;
