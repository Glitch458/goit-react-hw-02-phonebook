import ContactItem from 'components/ContactItem';

const ContactList = ({ contacts }) => {
  return (
    <>
      <ul>
        {contacts.map(({ name, number, id }) => (
          <ContactItem name={name} number={number} id={id} />
        ))}
      </ul>
    </>
  );
};

export default ContactList;
