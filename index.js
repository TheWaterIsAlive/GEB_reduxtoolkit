import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from './geb/src/pages/HomePage';
import CartPage from './geb/src/pages/CartPage';
import FaqPage from './geb/src/pages/FaqPage';
import LoginPage from './geb/src/pages/LoginPage';
import SearchPage from './geb/src/pages/SearchPage';
// import NotFoundPage from 'containers/NotFoundPage/Loadable';
// import config from '../../localConfig/index.ts';
import GlobalStyle from '../../global-styles';

// const Connection = mysql.createConnection(config.mysql);

export default function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/Cart" component={CartPage} />
        <Route exact path="/FAQ" component={FaqPage} />
        <Route exact path="/Login" component={LoginPage} />
        <Route exact path="/Search" component={SearchPage} />
        <Route component={NotFoundPage} />
      </Switch>

      <GlobalStyle />
    </div>
  );
}
