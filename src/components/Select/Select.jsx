const Select = ({ options, onChange, category }) => {
  return (
    <label>
      Виберіть категорію пошуку
      <select name="category" value={category} onChange={onChange}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  );
};

export default Select;
