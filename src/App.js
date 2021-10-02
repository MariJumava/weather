import React, { useState } from 'react';
import './App.css';

const App = ({sity, temperature}) => {
  const [value, setValue] = useState("");
  return (
    <div className="App">
      <div className="wrapp">
      <div className="card-date"> Сегодня 
              {new Date().toLocaleString("ru", {
                year: "numeric",
                month: "numeric",
                day: "numeric",
              })}
            </div>
            <label> Выберите город:
        <select value={value} onChange={(event) => setValue(event.target.value)}>
          <option selected value="moscow">Москва</option>
          <option value="minsk">Минск</option>
          <option value="kiev">Киев</option>
        </select>
        </label>
        <h1 className="app__title">Погода в {sity}:</h1>
        <span className="temperature">{temperature} градусов</span>
      </div>
    </div>
  );
}

export default App;
