/* eslint-disable @next/next/no-img-element */
const ImageHandleComponent = () => {
  return (
    <>
      <img
        src="https://images.prismic.io/slicemachine-blank/30d6602b-c832-4379-90ef-100d32c5e4c6_selfie.png?auto=compress,format"
        alt="image"
        className="img-fluid"
      />
      <div className="img-options">
        <img
          src="https://images.prismic.io/slicemachine-blank/30d6602b-c832-4379-90ef-100d32c5e4c6_selfie.png?auto=compress,format"
          alt="image"
          className="img-fluid border rounded p-2 m-2"
          width={100}
        />
        <img
          src="https://images.prismic.io/slicemachine-blank/30d6602b-c832-4379-90ef-100d32c5e4c6_selfie.png?auto=compress,format"
          alt="image"
          className="img-fluid border rounded p-2 m-2"
          width={100}
        />
      </div>
    </>
  );
};

export default ImageHandleComponent;
