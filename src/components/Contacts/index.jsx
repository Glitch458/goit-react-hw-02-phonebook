const Contacts = ({contacts}) => {
  return (
    <>
    <h2>Contacts</h2>
    <ul>
      {contacts.map(({name}) => (
        <li>
          {name}
        </li>
      ))}
    </ul>
    </>
  )
};

export default Contacts;