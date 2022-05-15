import { NavLink } from 'react-router-dom';
import { authOperations } from 'redux/auth/auth-operations';
import css from '../AppBar/AppBar.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';




export function AppBar () {
    const [logOut, setLogOut] = useState(false)
    const dispatch = useDispatch(); 

    const nameForIcon = useSelector(state => state.auth.user.name)
    let symbolsOfName = 'User'
    if (nameForIcon && nameForIcon.includes(' ')) {
        symbolsOfName = nameForIcon[0].toUpperCase() + nameForIcon[(nameForIcon.indexOf(' ')+1)].toUpperCase()
    } else if (nameForIcon && !nameForIcon.includes(' ')) {
        symbolsOfName = nameForIcon[0].toUpperCase()
    }
 

    const handleLogOut = () => {
        setLogOut(!logOut)
    }
    
    return (<div className={css.nav__container}>       
            <div className={css.nav__buttonCase}>                
                <NavLink 
                    to="/"
                    className={css.nav__link}>
                    <button type='button' className={css.nav__button}>
                   Home
                   </button>
                </NavLink>

                <NavLink 
                    to="/contacts"
                    className={css.nav__link}
                    >
                    <button type='button' className={css.nav__button}>
                        Contacts
                    </button>
                </NavLink>
                
            </div>
            <button type='button' className={css.nav__icon}  onClick={handleLogOut} >
                {symbolsOfName}                 
            </button>
            {logOut && (<button type='button' className={css.button__out} onClick={() => dispatch(authOperations.logOut()) }>Logout</button>)}
            
    </div>
    )
}