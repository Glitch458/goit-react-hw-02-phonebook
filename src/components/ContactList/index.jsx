import ContactItem from 'components/ContactItem';

const ContactList = ({ contacts }) => {
  return (
    <>
      <ul>
        {contacts.map(({ id, name, number }) => (
          <ContactItem key={id} name={name} number={number} />
        ))}
      </ul>
    </>
  );
};

export default ContactList;
