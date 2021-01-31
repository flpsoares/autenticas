import React from 'react';
import GlobalStyle from './GlobalStyle'
import Layout from './Components/Layout'
import Conjunto from './Components/Conjunto'
import Pijama from './Components/Pijama'
import Calcinha from './Components/Calcinha'
import Body from './Components/Body'
import Sutia from './Components/Sutia'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <div>
      <GlobalStyle />
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Layout} />
          <Route path="/conjunto" component={Conjunto} />
          <Route path="/pijama" component={Pijama} />
          <Route path="/calcinha" component={Calcinha} />
          <Route path="/body" component={Body} />
          <Route path="/sutia" component={Sutia} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
