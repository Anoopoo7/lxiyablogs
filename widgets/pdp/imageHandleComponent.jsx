/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/no-img-element */
const ImageHandleComponent = ({ images }) => {
  return (
    <>
      <div className="main-img">
        <img src={images[0]} alt="image" className="img-fluid img-main-img-tag" />
      </div>
      <div className="img-options d-flex flex-wrap">
        {images?.map((img) => (
          <>
            <div className="pdp-img-container rounded">
              <img
                src={img}
                alt="image"
                className="img-fluid rounded p-2 m-2 w-100 h-100"
              />
            </div>
          </>
        ))}
      </div>
    </>
  );
};

export default ImageHandleComponent;
