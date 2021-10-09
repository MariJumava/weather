import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";


export default function WeatherTomorrow({ coord }) {
  const [data, setData] = useState([]);

  function mapToData(list) {
    return list.map((x) => {
      return {
        name: new Date(x.dt * 1000),
        temp: x.temp,
      };
    });
  }

  function getToday(data) {
    return data.filter((x) => x.name.getDate() === new Date().getDate());
  }

  function mapResultName(data) {
    return data.map((x) => {
      return {
        name: x.name.toLocaleTimeString(),
        temp: x.temp,
      };
    });
  }

  useEffect(() => {
    async function fetchTemp() {
      let response = await axios.get(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${coord.lat}&lon=${coord.lon}&appid=ef4f4c72ceb5584c55e8641bb4f3f63e&units=metric`
      );

      let result = mapResultName(getToday(mapToData(response.data.hourly)));
      setData(result);
    }

    fetchTemp();
  }, [coord.lat, coord.lon]);

  return (
    <LineChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="temp" stroke="#BDC5D4" />
    </LineChart>
  );
}
