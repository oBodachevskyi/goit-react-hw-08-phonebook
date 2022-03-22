import React, { Component } from 'react';
import ContactForm from 'components/ContactForm/ContactForm';
import Filter  from 'components/Filter/Filter'; 
import ContactList from 'components/ContactList/ContactList'
import { nanoid } from 'nanoid';

class App extends Component {
  state = {
    contacts: [
  
    ],
    filter:""
  }


  componentDidMount() { 

    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate (prevProps, prevState) {
    const nextContacts =  this.state.contacts;
    const prevContacts = prevState.contacts;

    if (nextContacts !== prevContacts) {

      localStorage.setItem('contacts', JSON.stringify(nextContacts));
    }

    
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
    const {filter} = this.state;
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
