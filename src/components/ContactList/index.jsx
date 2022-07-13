import ContactItem from 'components/ContactItem';
import styles from './ContactList.module.css';

const ContactList = ({ contacts, deleteContact }) => {
  return (
    <>
      <ul className={styles.list}>
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
