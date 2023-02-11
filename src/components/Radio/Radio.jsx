const Radio = ({ selectionOption, onChange }) => {
  return (
    <>
      <p>Виберіть кількість результатів</p>
      <div className="form-check">
        <label>
          <input
            type="radio"
            name="pageQuantity"
            value="6"
            checked={selectionOption === "6"}
            onChange={onChange}
          />
          6
        </label>
      </div>

      <div className="form-check">
        <label>
          <input
            type="radio"
            name="pageQuantity"
            value="12"
            checked={selectionOption === "12"}
            onChange={onChange}
          />
          12
        </label>
      </div>

      <div className="form-check">
        <label>
          <input
            type="radio"
            name="pageQuantity"
            value="18"
            checked={selectionOption === "18"}
            onChange={onChange}
          />
          18
        </label>
      </div>
    </>
  );
};

export default Radio;
