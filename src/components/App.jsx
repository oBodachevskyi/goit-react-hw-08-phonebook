
import { AppBar } from 'components/AppBar/AppBar';
import { Register } from 'components/Pages/Register/RegisterPage';
import { Login }  from 'components/Pages/Login/StartPage';
import { Contacts } from 'components/Pages/Contacts/Contacts';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth/auth-operations';


import { Route, Routes } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import PublicRoute from './PublicRoute';


export default function App () {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);
  
    ProtectedRoute()
    return (
    <>
    
      {/* <AppBar /> */}
   
        <Routes>
          <Route element={<PublicRoute />}>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Route>
        
          <Route element={<ProtectedRoute />}>
            <Route exact path="/" element={<AppBar />} />
            <Route path="/contacts" element={<Contacts />} />
          </Route>

          <Route path="*" element={<h1>non-page</h1>} />     

          {/* <PrivateRoute path="/contacts"><Contacts /></PrivateRoute>  */}   
        </Routes>




    </>
    
    );
  }


