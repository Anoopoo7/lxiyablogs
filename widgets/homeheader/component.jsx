/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-html-link-for-pages */
const HomepageheaderComponent = ({ content }) => {
  const contents = content || [];
  return (
    // <div classNameName="container">
    <div
      id="carouselExampleIndicators"
      className="carousel slide container mb-3"
      data-ride="carousel"
    >
      <ol className="carousel-indicators">
        {contents.map((each, i) => (
          <li
            key={i}
            data-target="#carouselExampleIndicators"
            data-slide-to={i}
            className={`${i == 0 ? "active" : ""}`}
          ></li>
        ))}
      </ol>
      <div className="carousel-inner">
        {content.map((each, i) => (
          <div key={i} className={`carousel-item carosal-size ${i == 0 ? "active" : ""}`}>
            <img
              src={each.image}
              className="d-block w-100 rounded img-fluid h-100"
              alt="..."
            />
          </div>
        ))}
      </div>
      <b
        className="carousel-control-prev"
        type="button"
        data-target="#carouselExampleIndicators"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </b>
      <b
        className="carousel-control-next"
        type="button"
        data-target="#carouselExampleIndicators"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </b>
    </div>
    // </div>
  );
};

export default HomepageheaderComponent;
