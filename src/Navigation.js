import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import App from "./App";
import WeatherTomorrow from "./WeatherTomorrow";

export default function Navigation() {
  return (
    <Router>
      <div>
      <nav>
          <ul>
            <li>
              <Link to="/">Сегодня</Link>
            </li>
            <li>
              <Link to="/tomorrow">Следующие три дня</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/">
            <App />
          </Route>
          <Route path="/tomorrow">
            <WeatherTomorrow />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
