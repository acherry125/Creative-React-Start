import React, { useEffect } from 'react';
import * as d3 from "d3";

const fields = function () {
  let currentTime, hour, minute, second;
  currentTime = new Date();
  second = currentTime.getSeconds();
  minute = currentTime.getMinutes();
  hour = currentTime.getHours() + minute / 60;
  return data = [
    {
      "unit": "seconds",
      "numeric": second
    }, {
      "unit": "minutes",
      "numeric": minute
    }, {
      "unit": "hours",
      "numeric": hour
    }
  ];
};

export const D3Controller = (props) => {

  useEffect(() => {
    console.log('Mounting D3', window.innerWidth);



  }, [window.innerWidth]);

  return (
    <svg width={window.innerWidth} height="120">
      <circle cx="40" cy="60" r="10"></circle>
      <circle cx="80" cy="60" r="10"></circle>
      <circle cx="120" cy="60" r="10"></circle>
    </svg>
  )
}

export default D3Controller;