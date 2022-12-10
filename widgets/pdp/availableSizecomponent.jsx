/* eslint-disable react/jsx-key */
const AvailableSizeComponent = ({
  inventory,
  setSelectedSKU,
  selectedQuantity,
}) => {
  const handleChange = (e) => {
    setSelectedSKU(e);
  };
  return (
    <>
      <b>Available Size</b>
      <br />
      {inventory &&
        Object.keys(inventory).map((key, i) => (
          <div className="form-check form-check-inline" key={i}>
            <input
              className="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio1"
              value="option1"
              onClick={() => handleChange(inventory[key])}
            />
            <label className="form-check-label" htmlFor="inlineRadio1">
              {key}
            </label>
          </div>
        ))}
    </>
  );
};

export default AvailableSizeComponent;
