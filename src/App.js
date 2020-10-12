import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Provider from './context/Provider';
import Home from './pages/home';
import appScreen from './pages/appScreen';
import Login from './pages/login';
import Calendar from './pages/Calendar';
import hour from './pages/hour';
import map from './pages/map';
import sucess from './pages/sucess';
import twist from './pages/twist';
import './App.css';

function App() {
  return (
    <div className="App">
      <Provider>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/appScreen" component={appScreen} />
            <Route path="/hour" component={hour} />
            <Route path="/map" component={map} />
            <Route path="/sucess" component={sucess} />
            <Route path="/twist" component={twist} />
            <Route path="/calendar" component={Calendar} />
          </Switch>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
