import React from 'react';
import './App.css';
import { BrowserRouter as Router} from 'react-router-dom'
import store from './store'
import { Provider } from 'react-redux'

import './App.css';
import RHome from './components/RHome';


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
