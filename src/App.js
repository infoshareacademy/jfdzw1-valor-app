import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import {createStore, applyMiddleware} from "redux"
import {Provider} from "react-redux";
import thunk from "redux-thunk";

import Home from './Home'
import {Login} from './components/Login'
import Profile from './components/Profile'
import Register from './components/Register'
import Header from './Header'
import Footer from './Footer'

import {Grid} from 'react-bootstrap'

import reducer from "./reducers";

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk),
);

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Grid>
            <Header/>

            <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/login" component={Login}/>
              <Route path="/register" component={Register}/>
              <Route path="/profile" component={Profile}/>
            </Switch>

            <Footer/>
          </Grid>
        </BrowserRouter>
      </Provider>
    )
  }
}


export default App;
