import CardContainer from "../widgets/cards/cardContainer";
import HorizondalcardContainer from "../widgets/cards/horizondalCardComponent";
import HeadingComponent from "../widgets/heading/headingcomponent";
import Homecardcontainer from "../widgets/homecards/container";
import HomeHeaderContainer from "../widgets/homeheader/container";

const HomePageLayout = ({ content }) => {
  return (
    <>
      <HomeHeaderContainer content={content} />
      <div className="section">
        <Homecardcontainer />
      </div>
      <div className="container horizondal-outer">
        <HeadingComponent />
        <HorizondalcardContainer />
      </div>
    </>
  );
};

export default HomePageLayout;
