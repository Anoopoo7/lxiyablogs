/* eslint-disable react/jsx-key */
const AvailableSizeComponent = ({ inventory }) => {
  return (
    <>
      <b>Available Size</b>
      <br />
      {inventory &&
        Object.keys(inventory).map((key) => (
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio1"
              value="option1"
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
