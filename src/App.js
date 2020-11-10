
import './App.css';
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import { Fragment } from 'react';
import Home from './views/Home';
import Login from './views/Login';
function App() {
  return (
    <BrowserRouter>
      <Fragment>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/login" component={Login}></Route>
        </Switch>
      </Fragment>
    </BrowserRouter>
  );
}

export default App;
