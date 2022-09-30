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
            src="https://images.prismic.io/slicemachine-blank/30d6602b-c832-4379-90ef-100d32c5e4c6_selfie.png?auto=compress,format"
            className="img-fluid animated d-none d-lg-block w-50"
            alt="alt"
          />
          <img
            src="https://images.prismic.io/slicemachine-blank/30d6602b-c832-4379-90ef-100d32c5e4c6_selfie.png?auto=compress,format"
            className="img-fluid animated d-block d-lg-none"
            alt="alt"
          />
          <h2>
            <br />
            <br />
            Here we are !
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
            quo, aut, maiores laboriosam iste mollitia dolorem dignissimos
            eveniet quasi at aperiam vero, labore quidem. Odit.
          </p>
          <div className="d-flex">
            <a
              href="/"
              className="btn btn-dark scrollto m-2"
            >
              Shop Now
            </a>
            <a
              href="/"
              className="glightbox btn-watch-video d-flex align-items-center m-2"
            >
              <i className="bi bi-play-circle"></i>
              <span>Watch US</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomepageheaderComponent;
