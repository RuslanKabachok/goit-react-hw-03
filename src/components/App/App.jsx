import ContactList from '../ContactList/ContactList';
import SearchBar from '../SearchBar/SearchBar';
import { useState } from 'react';

const initialConntacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

function App() {
  const [contacts, setContacts] = useState(initialConntacts);
  const [filter, setFilter] = useState('');

  const visibleContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      <div>
        <h1>Phonebook</h1>
        <SearchBar value={filter} onFilter={setFilter} />
        <ContactList data={visibleContacts} />
      </div>
    </>
  );
}

export default App;