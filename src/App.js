import React, { Fragment } from "react";
import logo from "./logo.svg";
import "./App.css";
import ContactList from "./Components/Contacts/ContactList";
import { Route, Switch } from "react-router-dom";
import AddContact from "./Components/Contacts/AddContact";
import EditContact from "./Components/Contacts/EditContact";
import ViewContact from "./Components/Contacts/ViewContact";

function App() {
  return (
    <Fragment>
      <div className="App">
        <div className="container">
          <Switch>
            <Route exact path="/">
              <ContactList />
            </Route>
            <Route exact path="/add">
              <AddContact />
            </Route>
            <Route exact path="/edit/:id">
              <EditContact />
            </Route>
            <Route exact path="/view/:id">
              <ViewContact />
            </Route>
          </Switch>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
