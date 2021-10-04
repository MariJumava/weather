import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import App from "./App";
import WeatherTomorrow from "./WeatherTomorrow";

export default function Navigation() {
  const [currentCityId, setCurrentCityId] = useState(625144);
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
          <Route path="/" exact={true}>
            <App setCityId={setCurrentCityId}  cityId={currentCityId}/>
          </Route>
          <Route path="/tomorrow">
            <WeatherTomorrow cityId={currentCityId}/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
