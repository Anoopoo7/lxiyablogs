import SingleCard from "./singleCard";

const HomecardComponent = () => {
  return (
    <div className="container ">
      <section id="why-us" className="why-us">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 d-flex align-items-center">
              <div className="home-card-content">
                <h3>Why Choose Medilab?</h3>
                <p>
                  {" "}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Duis aute irure dolor in reprehenderit Asperiores dolores sed
                  et. Tenetur quia eos. Autem tempore quibusdam vel
                  necessitatibus optio ad corporis.
                </p>
                <div className="text-center">
                  {" "}
                  <a href="#" className="more-btn">
                    Learn More <i className="bx bx-chevron-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-8 d-flex align-items-stretch mt-5">
              <div className="icon-boxes d-flex flex-column justify-content-center">
                <div className="container-fluid">
                  <div className="card_container">
                    <div className="card" data-label="Coming Soon">
                      <div className="f-1">
                        <img
                          src="https://images.prismic.io/slicemachine-blank/30d6602b-c832-4379-90ef-100d32c5e4c6_selfie.png?auto=compress,format"
                          className="img-fluid animated"
                          alt="alt"
                        />
                      </div>
                      <div className="card-container f-1">
                        <h4>Coming Soon</h4>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua.
                        </p>
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
