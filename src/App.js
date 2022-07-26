import {React, useState} from "react";
import { Switch, Route, Redirect, NavLink } from "react-router-dom";

import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {
  const [contact, setContact] = useState([]);
  const [appointment, setAppointment] = useState([]);

  const ROUTES = {
    CONTACTS: "/contacts",
    APPOINTMENTS: "/appointments",
  };

  const handleNewContact = (name, phone, email) => {
    setContact([
      ...contact,
      {
        name: name,
        phone: phone,
        email: email
      }
    ])
  }

  
  const handleNewAppoinment = (title, contact, date, time) => {
    setAppointment([
      ...appointment,
      {
        title: title,
        contact: contact,
        date: date,
        time: time
      }
    ])
  }

  return (
    <>
      <nav>
        <NavLink to={ROUTES.CONTACTS} activeClassName="active">
          Contacts
        </NavLink>
        <NavLink to={ROUTES.APPOINTMENTS} activeClassName="active">
          Appointments
        </NavLink>
      </nav>
      <main>
        <Switch>
          <Route exact path="/">
            <Redirect to={ROUTES.CONTACTS} />
          </Route>
          <Route path={ROUTES.CONTACTS}>
            <ContactsPage contacts={contact} addContact={handleNewContact}/>
          </Route>
          <Route path={ROUTES.APPOINTMENTS}>
            <AppointmentsPage appointments={appointment} addAppoinment={handleNewAppoinment} contacts={contact}/>
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;