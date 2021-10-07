import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import App from "./App";
import Weather from "./Weather";

export default function Navigation() {
  const [currentCityId, setCurrentCityId] = useState(625144);
  const [currentCoord, setCurrentCoord] = useState({lat: 53.9, lon: 27.5667});

  return (
    <Router>
      <div>
      <nav className="navigation">
          <ul>
            <li>
              <Link to="/">Сегодня</Link>
            </li>
            <li>
              <Link to="/tomorrow">Почасовой прогноз и cледующие три дня</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/" exact={true}>
            <App setCityId={setCurrentCityId}  cityId={currentCityId} setCoord={setCurrentCoord}/>
          </Route>
          <Route path="/tomorrow">
            <Weather cityId={currentCityId} coord={currentCoord}/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
