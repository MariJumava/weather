import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import './App.css';

const App = ({cityId, setCityId, setCoord}) => {
  const cityMap = [
    {key: "Минске", value: 625144, coord: {lat: 53.9, lon: 27.5667}},
    {key: "Москве", value: 524901, coord: {lat: 55.7522, lon: 37.6156}},
    {key: "Киеве", value: 703448, coord: {lat: 50.4333, lon: 30.5167}},
  ];
  const [value, setValue] = useState(cityMap.find(x => x.value === cityId).key);
  const [currentTemp, setCurrentTemp] = useState(null);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const getSelectedCityId = useCallback((value) => {
    return cityMap.find(x => x.key === value).value;
  })

  const getSelectedCoord = (value) => {
    return cityMap.find(x => x.key === value).coord;
  }

  useEffect(()=> {
      async function fetchTemp () {
      let response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?id=${getSelectedCityId(value)}&appid=ef4f4c72ceb5584c55e8641bb4f3f63e&units=metric`);

      setCurrentTemp(response.data.main.temp);
      }

      fetchTemp();

  }, [getSelectedCityId, value]);

  return (
    <div className="App">
      <div className="wrap">
      <div className="card-date"> Сегодня:&#160;   
              {new Date().toLocaleString("ru", {
                year: "numeric",
                month: "numeric",
                day: "numeric",
              })}
            </div>
            <label className="list"> Выберите город:&#160;
        <select value={value} onChange={(event) => {
          setValue(event.target.value);
          setCityId(getSelectedCityId(event.target.value));
          setCoord(getSelectedCoord(event.target.value));
          }}>
          <option value="Москве">Москва</option>
          <option value="Минске">Минск</option>
          <option value="Киеве">Киев</option>
        </select>
        </label>
        <h1 className="app__title">Погода в {value}:</h1>
        <span className="temperature">{currentTemp} градусов</span>
      </div>
    </div>
  );
}

export default App;
