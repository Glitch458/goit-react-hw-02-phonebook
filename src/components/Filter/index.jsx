const Filter = ({ value, inputChange }) => {
  return (
    <label>
      Find contacts by name
      <input type="text" name="filter" value={value} onChange={inputChange} />
    </label>
  );
};

export default Filter;
