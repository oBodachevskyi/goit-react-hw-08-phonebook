import ContactForm from 'components/ContactForm/ContactForm';
import Filter  from 'components/Filter/Filter'; 
import ContactList from 'components/ContactList/ContactList';
import { useSelector } from 'react-redux';
import { AppBar } from 'components/AppBar/AppBar';


export const Contacts = () => {
  const LoginStatus = useSelector(state => state.auth.isLoggedIn)

    return (<div>
    <AppBar />
    <h1>Phonebook</h1>
    <ContactForm />
     <h2>Contacts</h2>        
    <Filter/>
    {LoginStatus && <ContactList  /> }     
  </div>)
}
