import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history'
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux';

import store from 'store';
import App from 'App';
import { privateRoutes, publicRoutes } from 'routes';
import { AuthRoute } from 'containers';
import { MainHeader, MainFooter, MenuContainer } from 'components';

const history = createBrowserHistory();
const rootElement = document.getElementById('root');

const Routers = () => (
      <div>
        <Route exact path="/" component={App} />
        <Switch>    
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
      <BrowserRouter>
        <div className="wrap">
          <MainHeader/>
          <MenuContainer/>
            <Routers  history={history}/>
          <MainFooter/>
        </div>
    </BrowserRouter>
   </Provider>
  , rootElement);
