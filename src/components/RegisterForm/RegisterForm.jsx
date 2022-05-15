import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../../redux/auth/auth-operations.jsx'
import { NavLink } from 'react-router-dom';
import Notiflix from 'notiflix';
import css from './RegisterForm.module.css'


export  function RegisterForm() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleChange = ({ target: { name, value }}) => {
    switch (name) {
      case 'name':
        return setName(value);
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  }

  const handleSubmit = e => {
    e.preventDefault()
    if(email.length>0 && password.length>0 && name.length>0) {
      dispatch(authOperations.register({ name, email, password }));
      setName('');
      setEmail('');
      setPassword(''); 
    } else {
      Notiflix.Notify.warning('Input name, login and password');
    }
    
  }

  return (
    
     <>
      <h1 className={css.form__header}>Registration page</h1>
        <div>
      <form autoComplete="off" onSubmit={handleSubmit} className={css.form__case}>
        <label>
          <p className={css.form__nameInput}>
            Name
          </p>
          <input 
          className={css.form__input}
          type="text" 
          name="name"
          value={name}
          onChange={handleChange}  />
        </label>

        <label>
          <p className={css.form__nameInput}>
            Email
          </p>
          <input
            className={css.form__input}
            type="email"
            name="email"
            value={email}
            onChange={handleChange}          
          />
        </label>

        <label>
          <p className={css.form__nameInput}>
            Password
            </p>
          <input
            className={css.form__input}
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
           
          />
        </label>

        <button 
        type="submit"
        className={css.form__button}>
          Register</button>

          
            <NavLink to="/login"
            className={css.form__nav}>
              <button  
              type='button' 
              className={css.form__button}>
                Log-in
              </button>
            </NavLink>
           

      </form>

      
      
    </div>
    </>
  );
}