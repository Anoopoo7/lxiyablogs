/* eslint-disable @next/next/no-img-element */
import SingleCard from "./singleCard";

const HomecardComponent = ({ content }) => {
  const { text_area, offer_area } = content;
  return (
    <div className="container ">
      <section id="why-us" className="why-us">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 d-flex align-items-center">
              {text_area && (
                <div className="home-card-content">
                  <h3>{text_area.heading_text}</h3>
                  <p>{text_area.description}</p>
                  <div className="text-center">
                    {text_area.button?.visible && (
                      <a href={text_area.button?.link} className="more-btn">
                        {text_area.button?.text}
                        <i className="bx bx-chevron-right"></i>
                      </a>
                    )}
                  </div>
                </div>
              )}
            </div>
            <div className="col-lg-8 d-flex align-items-stretch mt-5 border rounded">
              <div className="icon-boxes d-flex flex-column justify-content-center">
                <div className="container-fluid">
                  <div className="card_container">
                    <div className="banner-card" data-label={offer_area?.label}>
                      <div className="f-1">
                        <img
                          src={offer_area?.image}
                          className="img-fluid animated"
                          alt="alt"
                        />
                      </div>
                      <div className="card-container f-1">
                        <h4>{offer_area?.heading_text}</h4>
                        <p>{offer_area?.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomecardComponent;
