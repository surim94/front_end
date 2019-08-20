import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history'
import { Route, BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux';

import store from 'store';
import App from 'App';
import { publicRoutes } from 'routes';
import { MenuContainer } from 'containers';
import { MainHeader, MainFooter } from 'components';

const history = createBrowserHistory();
const rootElement = document.getElementById('root');

const Routers = () => (
      <div>
        <Route exact path="/" component={App} />
          {
            publicRoutes.map((prop, key) => {
              return <Route path={prop.path} component={prop.component} key={key} />;
            })
          }
      </div>
);

ReactDOM.render(
  <Provider store={store}>
      <BrowserRouter>
        <div>
          <MainHeader/>
          <Routers history={history}/>
          <MainFooter/>
        </div>
    </BrowserRouter>
   </Provider>
  , rootElement);
