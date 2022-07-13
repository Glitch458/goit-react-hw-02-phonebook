import styles from './Filter.module.css';

const Filter = ({ value, inputChange }) => {
  return (
    <label className={styles.label}>
      Find contacts by name
      <input
        className={styles.input}
        type="text"
        name="filter"
        value={value}
        onChange={inputChange}
      />
    </label>
  );
};

export default Filter;
