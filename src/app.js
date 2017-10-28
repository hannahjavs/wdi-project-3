import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'bootstrap-css-only';
// import 'font-awesome/css/font-awesome.css';
import './scss/style.scss';
import OAuthButton from './components/auth/OAuthButton';
import PlansIndex from './components/plans/PlansIndex';
import PlansNew from './components/plans/PlansNew';
import PlansShow from './components/plans/PlansShow';
import PlansEdit from './components/plans/PlansEdit';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <header>
          <OAuthButton provider="spotify" />
          <div className="container">
            <Switch>
              <Route exact path="/" component={PlansIndex} />
              <Route path="/plans/new" component={PlansNew} />
              <Route path="/plans/:id/edit" component={PlansEdit} />
              <Route path="/plans/:id" component={PlansShow} />
            </Switch>
          </div>
        </header>
      </BrowserRouter>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
