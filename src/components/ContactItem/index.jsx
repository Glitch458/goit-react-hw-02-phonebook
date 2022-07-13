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

export default ContactItem;
