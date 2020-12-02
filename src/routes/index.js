import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Tickets, TicketDetail } from 'pages';

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/:page?">
          <Tickets />
        </Route>
        <Route exact path="/tickets/:page?">
          <Tickets />
        </Route>
        <Route exact path="/ticket-detail/:id">
          <TicketDetail />
        </Route>
      </Switch>
    </Router>
  );
};

export default AppRouter;
