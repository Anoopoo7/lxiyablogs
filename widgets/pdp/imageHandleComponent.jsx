/* eslint-disable react/jsx-key */

import { useState } from "react";

/* eslint-disable @next/next/no-img-element */
const ImageHandleComponent = ({ images }) => {
  const [prevImg, setPrevImage] = useState(images[0]);
  return (
    <>
      <div className="main-img">
        <img src={prevImg} alt="image" className="img-fluid img-main-img-tag" />
      </div>
      <div className="img-options d-flex flex-wrap">
        {images?.map((img, i) => (
          <>
            <div
              className="pdp-img-container rounded"
              key={i}
              onClick={() => setPrevImage(img)}
            >
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
