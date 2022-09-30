import Image from "next/image";

const QuantityAdderComponet = () => {
  return (
    <>
      <div className="orders-sections mt-3 d-flex">
        <div className="mr-2">
          <button className="btn">-</button>
          <button className="btn bg-white border pl-3 pr-3">1</button>
          <button className="btn">+</button>
        </div>
        <button className="btn ml-2 bg-primary text-light">Add to Cart</button>
        <button className="btn ml-2">
            <Image src="/icons8-heart-64.png" alt="wishlist" width={23} />
            {/* <img src="/icons8-heart-50.png" alt="wishlist" width={23} /> */}
        </button>
      </div>
    </>
  );
};

export default QuantityAdderComponet;
