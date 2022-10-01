/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/no-img-element */
const ImageHandleComponent = ({ images }) => {
  return (
    <>
      <img src={images[0]} alt="image" className="img-fluid" />
      <div className="img-options">
        {images?.map((img) => (
          <img
            src={img}
            alt="image"
            className="img-fluid border rounded p-2 m-2"
            width={100}
          />
        ))}
      </div>
    </>
  );
};

export default ImageHandleComponent;
