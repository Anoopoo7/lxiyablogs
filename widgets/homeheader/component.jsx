const HomepageheaderComponent = ({ content }) => {
  return (
    <div classNameName="container">
      <div className="home-header">
        <div
          className="container d-flex flex-column justify-content-center align-items-center text-center position-relative aos-init aos-animate"
          data-aos="zoom-out"
        >
          <img
            src={content?.hero_image?.url}
            className="img-fluid animated d-none d-lg-block w-50"
            alt="alt"
          />
          <img
            src={content?.hero_image?.url}
            className="img-fluid animated d-block d-lg-none"
            alt="alt"
          />
          <h2>
            <br />
            <br />
            {content?.hero_text}
          </h2>
          <p>{content?.custom_description}</p>
          <div className="d-flex">
            <a
              href={content?.block_button_link}
              className="btn btn-dark scrollto m-2"
            >
              {content?.bloc_button_text}
            </a>
            <a
              href={content?.link_button_link}
              className="glightbox btn-watch-video d-flex align-items-center m-2"
            >
              <i className="bi bi-play-circle"></i>
              <span>{content?.link_button}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomepageheaderComponent;
