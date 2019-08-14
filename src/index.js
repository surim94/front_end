import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history'
import { Router, Route, Switch} from 'react-router-dom'
import { Provider } from 'react-redux';

import store from 'store';
import App from 'App';
import { privateRoutes, publicRoutes } from 'routes';
import { AuthRoute } from 'containers';

const history = createBrowserHistory();
const rootElement = document.getElementById('root');

const Routers = () => (
      <div>
        <Switch>
            <Route exact path="/" component={App} />
            {
              privateRoutes.map((prop, key) => {
                return <AuthRoute path={prop.path} component={prop.component} key={key} />;
              })
            }
            {
              publicRoutes.map((prop, key) => {
                return <Route path={prop.path} component={prop.component} key={key} />;
              })
            }
        </Switch>
      </div>
);


ReactDOM.render(
  <Provider store={store}>
      <Router  history={history}>
        <div className="wrap">
          <Routers />
        </div>
    </Router>
   </Provider>
  , rootElement);
