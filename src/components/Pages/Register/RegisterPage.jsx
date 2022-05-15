import { RegisterForm } from '../../RegisterForm/RegisterForm'
import css from '../Login/StartPage.module.css' 

export function Register () {
  return (
    
    <div className={css.startPage__container}>
     
      <div className={css.startPage__caseForm}>
        <RegisterForm />
      </div>  
      <div className={css.startPage__caseImg}>
       
       </div>    
    </div>
   
  )


}