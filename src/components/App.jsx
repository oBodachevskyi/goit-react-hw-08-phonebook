import { useState, useEffect } from 'react';
import ContactForm from 'components/ContactForm/ContactForm';
import Filter  from 'components/Filter/Filter'; 
import ContactList from 'components/ContactList/ContactList'
import { nanoid } from 'nanoid';

export default function App () {
  const [filter, setFilter] = useState('')
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(window.localStorage.getItem('contacts')) ?? '';
  })

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts))
  }, [contacts])

  const addContacts = (nameNew, numberNew) => {    
    const contact = {
      id: nanoid(),
      name: nameNew,
      number: numberNew
    }
    contacts.find(item => 
      item.name.toLowerCase() === contact.name.toLowerCase()) ?
        alert(contact.name + " is already in contscts") :
        setContacts(prevState => ([contact, ...contacts]))        
  }

  const filterChange = e => {
    setFilter(e.currentTarget.value) 
  }

  const deleteContact = (contactId) =>    
   (setContacts(contacts.filter(contact => contact.id !== contactId)))
   
  const visibleContacts = () => {   
    const normalizedFilter = filter.toLowerCase(); 
    return contacts.filter(contact => 
      contact.name.toLowerCase().includes(normalizedFilter),
    );}

    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={addContacts}/>
         <h2>Contacts</h2>        
        <Filter value={filter} onChange={filterChange}/>
        <ContactList contactRender={visibleContacts()} onDeleteContact={deleteContact} />      
      </div>
    );
  }


