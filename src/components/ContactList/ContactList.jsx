import React  from 'react';
import css from 'components/ContactList/ContactList.module.css'
import { useSelector, useDispatch } from 'react-redux';
import { delContact } from 'redux/store.js';


export default function ContactList() {
        const dispatch = useDispatch();
        const contactsRender = useSelector(state => 
            state.contacts.items);
        const filter = useSelector(state => state.contacts.filter);
        
        let visibleContacts = '';
        if(contactsRender) {
            visibleContacts = contactsRender.filter(item => item.name.toLowerCase().includes(filter.toLowerCase()))
        } 


        return (<div className={css.contactList__container}>
            <ul>
            {visibleContacts && visibleContacts.map(({id, name, number}) => 
                (<li className={css.containerList__item} key={id}>{name}: {number}
                    <button type="button" onClick={()=>dispatch(delContact(id))}>
                        Delete</button>
                </li>))} 
         </ul>
        </div>)
    };