/* eslint-disable @next/next/no-html-link-for-pages */
const HomepageheaderComponent = ({ content }) => {
  return (
    <div classNameName="container">
      <div className="home-header">
        <div
          className="container d-flex flex-column justify-content-center align-items-center text-center position-relative aos-init aos-animate"
          data-aos="zoom-out"
        >
          <img
            src={content?.image}
            className="img-fluid animated d-none d-lg-block w-50"
            alt="alt"
          />
          <img
            src={content?.image}
            className="img-fluid animated d-block d-lg-none"
            alt="alt"
          />
          <h2>
            <br />
            <br />
            {content?.heding_text}
          </h2>
          <p>{content?.description}</p>
          <div className="d-flex">
            {content?.dark_button?.active && (
              <a
                href={content?.dark_button?.link}
                className="btn btn-dark scrollto m-2"
              >
                {content?.dark_button?.text}
              </a>
            )}
            {content?.light_button?.active && (
              <a
                href={content?.light_button?.link}
                className="glightbox btn-watch-video d-flex align-items-center m-2"
              >
                <i className="bi bi-play-circle"></i>
                <span>{content?.light_button?.text}</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomepageheaderComponent;
