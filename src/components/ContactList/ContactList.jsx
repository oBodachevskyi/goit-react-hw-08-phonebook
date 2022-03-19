import React  from 'react';

const ContactList = ({contactRender, onDeleteContact}) =>
    ( <ul>
        {contactRender.map(({id, name, number}) => 
            (<li key={id}>{name}: {number}
                <button type="button" onClick={() => onDeleteContact(id)} >Delete</button>
            </li>))} 
     </ul>);

export default ContactList