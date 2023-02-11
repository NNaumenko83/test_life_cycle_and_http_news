const Checkbox = ({ label, isSelected, onCheckboxChange }) => {
  return (
    <label>
      {label}
      <input
        type="checkbox"
        checked={isSelected}
        onChange={onCheckboxChange}
        name={label}
      />
    </label>
  );
};

export default Checkbox;
