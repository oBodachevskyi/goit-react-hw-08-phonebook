
import { LoginForm } from 'components/LoginForm/LoginFrom'
import css from './StartPage.module.css'

export function Login () {
  return (
    
    <div className={css.startPage__container}>
      <div className={css.startPage__caseImg}>
       
      </div>
      <div className={css.startPage__caseForm}>
        <LoginForm />
      </div>

      
    </div>
   
  )


}




/* 

export default function LoginView() {
  
} */
