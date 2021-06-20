import React from 'react';
import { Provider } from 'react-redux';

import { LoginForm, Profile } from './components';
import {store} from './store';
import './App.css';
// import { Routing } from './routing';

function App() {
  return (
    <Provider store={store}>
      <div className="App container">
       {/* <Routing/> */}
       <LoginForm/>
       <Profile/>
      </div>
    </Provider>
   
  );
}

export default App;
