const Contacts = ({contacts}) => {
  return (
    <>
    <h2>Contacts</h2>
    <ul>
      {contacts.map(({name, number}) => (
        <li>
          {name}: {number}
        </li>
      ))}
    </ul>
    </>
  )
};

export default Contacts;