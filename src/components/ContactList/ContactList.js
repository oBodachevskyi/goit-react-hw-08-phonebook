import React, { useEffect }  from 'react';
import css from 'components/ContactList/ContactList.module.css'
import { useSelector, useDispatch } from 'react-redux';
import * as contactsOperation from '../../redux/contacts/contactsOperations';



export default function ContactList() {
    const dispatch = useDispatch();
    const contactsRender = useSelector(state => 
            state.contacts.items);
        const filter = useSelector(state => state.contacts.filters); 
  
        
        let visibleContacts = '';
          if(contactsRender) {
            visibleContacts = contactsRender.filter(item => item.name.toLowerCase().includes(filter.toLowerCase()))
        } 
 
        useEffect(()=> {
            dispatch(contactsOperation.fetchContactsList())
        },[dispatch])

        return (<div className={css.contactList__container}>
            <ul>
            {visibleContacts && visibleContacts.map(({id, name, phone}) => 
                (<li className={css.containerList__item} key={id}>{name}: {phone}
                    <button type="button"  onClick={()=>dispatch(contactsOperation.fetchDelContact(id))}>
                        Delete</button>
                </li>))} 
         </ul>
        </div>)
    };