import { useState } from 'react';
import { useDispatch } from 'react-redux'; 
import { NavLink } from 'react-router-dom';
import Notiflix from 'notiflix'; 
import { authOperations } from '../../redux/auth/auth-operations'; 
import css from './LoginForm.module.css'

 export function LoginForm () {
    const dispatch = useDispatch(); 
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleChange = ({ target: { name, value } }) => {
      switch (name) {
        case 'email':
          return setEmail(value);
        case 'password':
          return setPassword(value);
        default:
          return;
      }
    };
  
    const handleSubmit = e => {
      e.preventDefault();
      if (email.length>0 && password.length>0) {
        dispatch(authOperations.logIn({ email, password }));
        setEmail('');
        setPassword('');
      } else {
        Notiflix.Notify.warning('Input login and password');
      }    
    };

    
  
    return (
      <>
       <h1 className={css.form__header}>LOGIN</h1>
        <div >
  
        <form onSubmit={handleSubmit}  autoComplete="off" className={css.form__case}>
          <label>
           <p className={css.form__nameInput}>
           Email
           </p>
            <input
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
              className={css.form__input}
            />
          </label>
  
          <label >
            <p className={css.form__nameInput}>
              Password
              </p>
            <input
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
              className={css.form__input}
            />
          </label>
  
          <button 
          type="submit"
          className={css.form__button}>Login</button>
              
          <NavLink to="/register"
            className={css.form__nav}>
              <button  
              type='button' 
              className={css.form__button}>
                Register
              </button>
            </NavLink>
        </form>
      </div>
      </>
       
    );
    
  }