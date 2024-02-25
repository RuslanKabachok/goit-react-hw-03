import css from '../ContactList/ContactList.module.css';

import Contact from '../Contact/Contact';

function ContactList({ data }) {
  return (
    <ul className={css.list}>
      {data.map((contact) => (
        <li key={contact.id} className={css.item}>
          <Contact info={contact} />
        </li>
      ))}
    </ul>
  );
}

export default ContactList;
