import Checkbox from "../Checkbox";

const Checkboxes = ({
  selectedOptions,
  selecttAll,
  deselectAll,
  onChange,
  options,
}) => {
  return (
    <>
      <fieldset>
        <legend>Choose your furit</legend>
        {options.map((option) => (
          <Checkbox
            label={option}
            isSelected={selectedOptions[option]}
            onCheckboxChange={onChange}
            key={option}
          />
        ))}
      </fieldset>
      <button type="button" onClick={selecttAll}>
        Select All
      </button>
      <button type="button" onClick={deselectAll}>
        Deselect All
      </button>
    </>
  );
};

export default Checkboxes;
