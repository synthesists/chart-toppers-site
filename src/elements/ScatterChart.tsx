import DayJS from "dayjs";
import React from "react";
import { Scatter } from "react-chartjs-2";

const NUMBER_OF_VISIBLE_WEEKS = 20;

const ScatterChart = ({
  datasets,
  currentWeek,
  startDate,
}: {
  datasets: any[];
  currentWeek: number;
  startDate: Date;
}) => {
  const options = {
    fill: true,
    animation: false,
    legend: {
      display: false,
    },
    tooltips: {
      enabled: false,
    },
    scales: {
      xAxes: [
        {
          type: "linear",
          ticks: {
            min: currentWeek - NUMBER_OF_VISIBLE_WEEKS,
            max: currentWeek,
            callback: (value: number) => (value % 1 ? undefined : DayJS(startDate).add(7, "day").toISOString()),
          },
          gridLines: {
            drawBorder: false,
          },
        },
      ],
      yAxes: [
        {
          type: "linear",
          ticks: {
            reverse: true,
            min: 0,
            max: 100,
          },
        },
      ],
    },
  };

  return <Scatter data={{ datasets }} options={options} />;
};

export default ScatterChart;
