/* eslint-disable @next/next/no-img-element */
import SingleCard from "./singleCard";

const HomecardComponent = ({ content }) => {
  const { text_area, offer_area } = content;
  console.log(offer_area);
  return (
    <div className="container mt-3">
      <section id="why-us" className="why-us">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 d-flex align-items-center">
              {text_area && (
                <div className="home-card-content">
                  <h5>
                    <b>{text_area.heading_text}</b>
                  </h5>
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
            <div className="col-lg-7 d-flex align-items-stretch mt-5 p-2 rounded">
              <div className="icon-boxes d-flex flex-column justify-content-center">
                <div className="container-fluid">
                  <div className="card_container">
                    <div className="d-flex flex-column justify-content-center align-items-center">
                      <div className="f-1 d-block">
                        <img
                          src={offer_area?.image}
                          className="img-fluid animated bg-success w-100 rounded"
                          alt="alt"
                        />
                      </div>
                      <div className="card-container f-1 flex-column">
                        <br />
                        <h4 className="text-center">{offer_area?.heading_text}</h4>
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
