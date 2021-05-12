import React from 'react';
import './App.css';
import Sidebar from "./Sidebar";
import Chat from "./Chat";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
  return (
    <div className="app">
      {/* <h1>Lets build WhatsApp Clone.</h1> */}
      <div className="app__body">
        <Router>
          
            <Sidebar/>
            <Switch>
            <Route path="/rooms/:roomId">
              <Chat/>
            </Route>
            <Route path="/">
              <h1>Home Screen</h1>
            </Route>
          </Switch>
        </Router>
       
      </div>
    </div>
  );
}

export default App;
