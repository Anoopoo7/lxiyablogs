/* eslint-disable @next/next/no-html-link-for-pages */
const HomepageheaderComponent = ({ content }) => {
  return (
    // <div classNameName="container">
    <div
      id="carouselExampleIndicators"
      className="carousel slide container mb-3"
      data-ride="carousel"
    >
      <ol className="carousel-indicators">
        <li
          data-target="#carouselExampleIndicators"
          data-slide-to="0"
          className="active"
        ></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="5"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="6"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="7"></li>
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAHYAnQMBIgACEQEDEQH/xAAWAAEBAQAAAAAAAAAAAAAAAAAAAQf/xAAWEAEBAQAAAAAAAAAAAAAAAAAAARH/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AMRQAAAAAAAVFEVBUVFARRUAABABQRUABQQUFRUAUBAABCKgiiAqiKqBAQAAQVFAgIoAAqAKAAACACAKAAAAKIoCAAAAAAACKIooAAIoAAACoAIoigIAIAAAKBAQUSKKAAAAAKAGoACiBRAAVABAAAVAVRFAAAVBQAQAQABUAAAAAVFQMBFAFAUEAUABEAAAAAAwABQRQAAAFAB//9k="
            className="d-block w-100 rounded img-fluid"
            alt="..."
          />
        </div>
        <div className="carousel-item">
          <img
            src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAHYAnQMBIgACEQEDEQH/xAAWAAEBAQAAAAAAAAAAAAAAAAAAAQf/xAAWEAEBAQAAAAAAAAAAAAAAAAAAARH/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AMRQAAAAAAAVFEVBUVFARRUAABABQRUABQQUFRUAUBAABCKgiiAqiKqBAQAAQVFAgIoAAqAKAAACACAKAAAAKIoCAAAAAAACKIooAAIoAAACoAIoigIAIAAAKBAQUSKKAAAAAKAGoACiBRAAVABAAAVAVRFAAAVBQAQAQABUAAAAAVFQMBFAFAUEAUABEAAAAAAwABQRQAAAFAB//9k="
            className="d-block w-100 rounded img-fluid"
            alt="..."
          />
        </div>
        <div className="carousel-item">
          <img
            src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAHYAnQMBIgACEQEDEQH/xAAWAAEBAQAAAAAAAAAAAAAAAAAAAQf/xAAWEAEBAQAAAAAAAAAAAAAAAAAAARH/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AMRQAAAAAAAVFEVBUVFARRUAABABQRUABQQUFRUAUBAABCKgiiAqiKqBAQAAQVFAgIoAAqAKAAACACAKAAAAKIoCAAAAAAACKIooAAIoAAACoAIoigIAIAAAKBAQUSKKAAAAAKAGoACiBRAAVABAAAVAVRFAAAVBQAQAQABUAAAAAVFQMBFAFAUEAUABEAAAAAAwABQRQAAAFAB//9k="
            className="d-block w-100 rounded img-fluid"
            alt="..."
          />
        </div>
        <div className="carousel-item">
          <img
            src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAHYAnQMBIgACEQEDEQH/xAAWAAEBAQAAAAAAAAAAAAAAAAAAAQf/xAAWEAEBAQAAAAAAAAAAAAAAAAAAARH/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AMRQAAAAAAAVFEVBUVFARRUAABABQRUABQQUFRUAUBAABCKgiiAqiKqBAQAAQVFAgIoAAqAKAAACACAKAAAAKIoCAAAAAAACKIooAAIoAAACoAIoigIAIAAAKBAQUSKKAAAAAKAGoACiBRAAVABAAAVAVRFAAAVBQAQAQABUAAAAAVFQMBFAFAUEAUABEAAAAAAwABQRQAAAFAB//9k="
            className="d-block w-100 rounded img-fluid"
            alt="..."
          />
        </div>
        <div className="carousel-item">
          <img
            src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAHYAnQMBIgACEQEDEQH/xAAWAAEBAQAAAAAAAAAAAAAAAAAAAQf/xAAWEAEBAQAAAAAAAAAAAAAAAAAAARH/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AMRQAAAAAAAVFEVBUVFARRUAABABQRUABQQUFRUAUBAABCKgiiAqiKqBAQAAQVFAgIoAAqAKAAACACAKAAAAKIoCAAAAAAACKIooAAIoAAACoAIoigIAIAAAKBAQUSKKAAAAAKAGoACiBRAAVABAAAVAVRFAAAVBQAQAQABUAAAAAVFQMBFAFAUEAUABEAAAAAAwABQRQAAAFAB//9k="
            className="d-block w-100 rounded img-fluid"
            alt="..."
          />
        </div>
        <div className="carousel-item">
          <img
            src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAHYAnQMBIgACEQEDEQH/xAAWAAEBAQAAAAAAAAAAAAAAAAAAAQf/xAAWEAEBAQAAAAAAAAAAAAAAAAAAARH/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AMRQAAAAAAAVFEVBUVFARRUAABABQRUABQQUFRUAUBAABCKgiiAqiKqBAQAAQVFAgIoAAqAKAAACACAKAAAAKIoCAAAAAAACKIooAAIoAAACoAIoigIAIAAAKBAQUSKKAAAAAKAGoACiBRAAVABAAAVAVRFAAAVBQAQAQABUAAAAAVFQMBFAFAUEAUABEAAAAAAwABQRQAAAFAB//9k="
            className="d-block w-100 rounded img-fluid"
            alt="..."
          />
        </div>
        <div className="carousel-item">
          <img
            src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAHYAnQMBIgACEQEDEQH/xAAWAAEBAQAAAAAAAAAAAAAAAAAAAQf/xAAWEAEBAQAAAAAAAAAAAAAAAAAAARH/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AMRQAAAAAAAVFEVBUVFARRUAABABQRUABQQUFRUAUBAABCKgiiAqiKqBAQAAQVFAgIoAAqAKAAACACAKAAAAKIoCAAAAAAACKIooAAIoAAACoAIoigIAIAAAKBAQUSKKAAAAAKAGoACiBRAAVABAAAVAVRFAAAVBQAQAQABUAAAAAVFQMBFAFAUEAUABEAAAAAAwABQRQAAAFAB//9k="
            className="d-block w-100 rounded img-fluid"
            alt="..."
          />
        </div>
        <div className="carousel-item">
          <img
            src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAHYAnQMBIgACEQEDEQH/xAAWAAEBAQAAAAAAAAAAAAAAAAAAAQf/xAAWEAEBAQAAAAAAAAAAAAAAAAAAARH/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AMRQAAAAAAAVFEVBUVFARRUAABABQRUABQQUFRUAUBAABCKgiiAqiKqBAQAAQVFAgIoAAqAKAAACACAKAAAAKIoCAAAAAAACKIooAAIoAAACoAIoigIAIAAAKBAQUSKKAAAAAKAGoACiBRAAVABAAAVAVRFAAAVBQAQAQABUAAAAAVFQMBFAFAUEAUABEAAAAAAwABQRQAAAFAB//9k="
            className="d-block w-100 rounded img-fluid"
            alt="..."
          />
        </div>
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
