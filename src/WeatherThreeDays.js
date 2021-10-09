import React, { useState, useEffect } from "react";
import axios from "axios";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";


export default function WeatherThteeDays({ coord }) {
  const [data, setData] = useState([]);

  function mapToData(list) {
    return list.map((x) => {
      return {
        name: new Date(x.dt * 1000),
        temp: x.temp,
      };
    });
  }

  function mapResultName(data) {
    return data.map((x) => {
      return {
        name: x.name,
        temp: x.temp,
      };
    });
  }
  useEffect(() => {
    async function fetchTemp() {
      let response = await axios.get(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${coord.lat}&lon=${coord.lon}&appid=ef4f4c72ceb5584c55e8641bb4f3f63e&units=metric`
      );
     let result = mapResultName(mapToData(response.data.hourly));
      setData(result);
      
    }

    fetchTemp();
  }, [coord.lat, coord.lon]);

  return (
    <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
    >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis yAxisId="left" orientation="left" stroke="#BDC5D4" />
        <YAxis yAxisId="right" orientation="right" stroke="#242424" />
        <Tooltip />
        <Legend />
        <Bar yAxisId="left" dataKey="temp" fill="#BDC5D4" />
        <Bar yAxisId="right" dataKey="temp" fill="#242424" />
    </BarChart>
  );
}
