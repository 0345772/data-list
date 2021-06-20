import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import { List1, List2, List3, List4, NotFound  } from '../pages';
import { paths } from '../constants';
import { NavBar } from '../components/navBar';

export const Routing = () => {
  return (
    <Router>
     
      <Switch>

        <Route path = { paths.list1 }> 
          <List1/>
        </Route>

        <Route path= { paths.list2 } >
          <List2/>
        </Route>

        <Route path= { paths.list3 } >
          <List3/>
        </Route>

        <Route path= { paths.list4 } >
          <List4/>
        </Route>

          <NotFound/>

      </Switch>

      <NavBar/>
      
    </Router>
  )
}