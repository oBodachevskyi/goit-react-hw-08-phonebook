import React, { Component } from 'react';
import ContactForm from 'components/ContactForm/ContactForm';
import Filter  from 'components/Filter/Filter'; 
import ContactList from 'components/ContactList/ContactList'
import { nanoid } from 'nanoid';

class App extends Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter:""
  }

  addContacts= ({name, number}) => {
    const forFilter = this.state.contacts
    const contact = {
      id: nanoid(),
      name: name,
      number: number
    }


    forFilter.find(item => 
      item.name.toLowerCase() === contact.name.toLowerCase()) ?
        alert(contact.name + " is already in contscts") :
        this.setState(prevState => ({
          contacts: [contact, ...prevState.contacts]
        }))       
  }

  deleteContact = (contactId) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId)
    }))
  }

  filterChange = e => {
    this.setState({filter: e.currentTarget.value}) 
  }

  visibleContacts = () => {
    const {contacts, filter} = this.state
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact => 
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };
  
 
  render () {    
    const {contacts, filter} = this.state;
    const renderContacts = this.visibleContacts();
 
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContacts}/>
        <h2>Contacts</h2>        
        <Filter value={filter} onChange={this.filterChange}/>
        <ContactList contactRender={renderContacts} onDeleteContact={this.deleteContact}/>       
      </div>
    );
  }  
};


export default App
