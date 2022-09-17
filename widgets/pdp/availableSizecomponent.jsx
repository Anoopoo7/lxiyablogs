const AvailableSizeComponent = () => {
  return (
    <>
      <b>Available Size</b>
      <br />
      <div className="form-check form-check-inline">
        <input
          className="form-check-input"
          type="radio"
          name="inlineRadioOptions"
          id="inlineRadio1"
          value="option1"
        />
        <label className="form-check-label" htmlFor="inlineRadio1">
          L
        </label>
      </div>
      <div className="form-check form-check-inline">
        <input
          className="form-check-input"
          type="radio"
          name="inlineRadioOptions"
          id="inlineRadio2"
          value="option2"
        />
        <label className="form-check-label" htmlFor="inlineRadio2">
          XL
        </label>
      </div>
      <div className="form-check form-check-inline">
        <input
          className="form-check-input"
          type="radio"
          name="inlineRadioOptions"
          id="inlineRadio3"
          value="option3"
        />
        <label className="form-check-label" htmlFor="inlineRadio3">
          XXL
        </label>
      </div>
    </>
  );
};

export default AvailableSizeComponent;
