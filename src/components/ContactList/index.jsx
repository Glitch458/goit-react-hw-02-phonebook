import ContactItem from 'components/ContactItem';

const ContactList = ({ contacts, deleteContact }) => {
  return (
    <>
      <ul>
        {contacts.map(({ id, name, number }) => (
          <ContactItem
            key={id}
            name={name}
            number={number}
            deleteContact={() => deleteContact(id)}
          />
        ))}
      </ul>
    </>
  );
};

export default ContactList;
