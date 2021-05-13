import React, { useState } from 'react';
import './App.css';
import Sidebar from "./Sidebar";
import Chat from "./Chat";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Login from "./Login";
import { useStateValue } from "./StateProvider";

function App() {
  // const [user, setUser] = useState(null);
  const [{ user }, dispatch] = useStateValue();
  return (
    <div className="app">
      {!user ? (
        <Login />
        // <h1>Login PLease..</h1>
      ) : (
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
      ) }
      {/* <h1>Lets build WhatsApp Clone.</h1> */}
     
    </div>
  );
}
export default App;
