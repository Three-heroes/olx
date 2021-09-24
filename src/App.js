import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './App.css';
import Header from './components/container/Header/Header';
import Home from './components/container/pages/Home/Home';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Category from './components/container/pages/Category';
import Search from './components/container/Search';
import Announcement from './components/container/pages/Announcement';

function App() {
  return (
    <div className="App">
      <Header />
      <Search />
      <Router>

        <Switch>
          <Route path="/" exact>
            <Home />
            <Announcement />
          </Route>
          <Route path="/:category" exact>
            <Category />
          </Route>
        </Switch>

      </Router>





    </div>
  )
}


export default App




