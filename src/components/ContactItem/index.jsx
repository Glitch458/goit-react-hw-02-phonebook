import PropTypes from 'prop-types';

const ContactItem = ({ id, name, number, deleteContact }) => {
  return (
    <li key={id}>
      {name}: {number}
      <button type="button" onClick={deleteContact}>
        Delete
      </button>
    </li>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  deleteContact: PropTypes.func.isRequired,
};

export default ContactItem;
