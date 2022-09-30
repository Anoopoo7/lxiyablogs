import HorizondalcardContainer from "../widgets/cards/horizondalCardComponent";
import HeadingComponent from "../widgets/heading/headingcomponent";
import Homecardcontainer from "../widgets/homecards/container";
import HomeHeaderContainer from "../widgets/homeheader/container";

const HomePageLayout = ({ content }) => {
    return (
    <>
      <HomeHeaderContainer content={content?.HomeHeaderContainer} />
      <div className="section">
        <Homecardcontainer content={content?.Homecardcontainer} />
      </div>
      <div className="container horizondal-outer">
        <HeadingComponent content={content?.HeadingComponent} />
        <HorizondalcardContainer />
      </div>
    </>
  );
};

export default HomePageLayout;
