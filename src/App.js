import React from 'react';
import './App.css';
import { BrowserRouter as Router} from 'react-router-dom'
import store from './store'
import { Provider } from 'react-redux'

import './App.css';
import RHome from './components/RHome';
import { setCurrentUser , setCurrentAdmin } from './actions/authActions';
import setAuthToken from './utils/setAuthToken'

// check for token 
if(localStorage.Token){
  //set the auth token header auth 
  setAuthToken(localStorage.Token)
  
  
  
  // set user and isAuthenticated
  const res_d = {}
  res_d.token = localStorage.Token
  store.dispatch(setCurrentUser(res_d))
 
}

if(localStorage.Admin_Token){
  const res_admin_d = {}
  res_admin_d.token = localStorage.Admin_Token
  store.dispatch(setCurrentAdmin(res_admin_d))

}


// if(localStorage.Theme){
//   const res_admin_d = {}
//   res_admin_d.token = localStorage.Admin_Token
//   store.dispatch(setCurrentAdmin(res_admin_d)) 
// }





function App() {
  return (
    <Provider store={store}>
        <Router>
          <RHome/>
        </Router>
      </Provider>
  );
}

export default App;
