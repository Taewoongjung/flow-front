import React from 'react';
import loadable from '@loadable/component';
import {Redirect, Switch, Route, Router} from 'react-router-dom';

const Main = loadable(() => import('../pages/Main/index'));

const App = () => {
  return (
      <Switch>
          <Redirect exact path="/" to="/main"/>
          <Route path="/main" component={Main}/>
      </Switch>
  )
}

export default App;
