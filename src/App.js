import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

const App = ({cityId, setCityId}) => {
  const cityMap = [
    {key: "Минске", value: 625144},
    {key: "Москве", value: 524901},
    {key: "Киеве", value: 703448},
  ];
  const [value, setValue] = useState(cityMap.find(x => x.value === cityId).key);
  const [currectTemp, setCurrentTemp] = useState(null);

  const getSelectedCityId = (value) => {
    return cityMap.find(x => x.key === value).value;
  }

  useEffect(()=> {
      async function fetchTemp () {
      let response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?id=${getSelectedCityId(value)}&appid=ef4f4c72ceb5584c55e8641bb4f3f63e&units=metric`);

      setCurrentTemp(response.data.main.temp);
      }

      fetchTemp();

  }, [value]);

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
        <select value={value} onChange={(event) => {
          setValue(event.target.value);
          setCityId(getSelectedCityId(event.target.value));
          }}>
          <option value="Москве">Москва</option>
          <option value="Минске">Минск</option>
          <option value="Киеве">Киев</option>
        </select>
        </label>
        <h1 className="app__title">Погода в {value}:</h1>
        <span className="temperature">{currectTemp} градусов</span>
      </div>
    </div>
  );
}

export default App;
