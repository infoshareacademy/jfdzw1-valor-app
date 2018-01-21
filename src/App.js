import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Home from './Home'
import Login from './components/Login'
import Profile from './components/Profile'
import Register from './components/Register'
import Header from './Header'
import Footer from './Footer'

import {Grid} from 'react-bootstrap'

class App extends React.Component {
  render() {
    return (
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

    )
  }
}


export default App;
