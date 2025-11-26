import React from "react";
import { Radar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  RadialLinearScale,
  Filler,
} from "chart.js";

ChartJS.register(
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  RadialLinearScale,
  Filler
);

const PerformanceChart: React.FC = () => {
  const data = {
    labels: [
      "01:00",
      "02:00",
      "03:00",
      "04:00",
      "05:00",
      "06:00",
      "07:00",
      "08:00",
      "09:00",
      "10:00",
      "11:00",
      "12:00",
    ],
    datasets: [
      {
        label: "am",
        data: [5, 6, 8, 0, 7, 5, 3, 2, 8, 5, 9, 6],
        backgroundColor: "rgba(239, 68, 68, 0.2)",
        borderColor: "rgb(239, 68, 68)",
        borderWidth: 2.5,
        pointBackgroundColor: "rgb(239, 68, 68)",
        pointBorderColor: "rgb(30, 41, 59)",
        pointBorderWidth: 2,
        pointRadius: 5,
        pointHoverRadius: 7,
        pointHoverBackgroundColor: "rgb(220, 38, 38)",
      },
    ],
  };
  const options: any = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: {
        display: true,
        labels: {
          color: "rgb(203, 213, 225)",
          font: {
            size: 13,
            weight: 600,
          },
          padding: 20,
          usePointStyle: true,
        },
      },
      tooltip: {
        backgroundColor: "rgba(15, 23, 42, 0.95)", // Slate-900
        borderColor: "rgb(239, 68, 68, 0.5)",
        borderWidth: 1.5,
        titleColor: "rgb(239, 68, 68)",
        bodyColor: "rgb(203, 213, 225)",
        padding: 12,
        displayColors: false,
        titleFont: { size: 14, weight: "bold" },
        bodyFont: { size: 13 },
      },
    },
    scales: {
      r: {
        beginAtZero: true,
        max: 10,
        ticks: {
          color: "rgba(148, 163, 184, 0.6)", // Slate-500
          font: {
            size: 12,
          },
          backdropColor: "transparent",
        },
        grid: {
          color: "rgba(71, 85, 105, 0.3)", // Slate-700
          lineWidth: 1.2,
        },
        pointLabels: {
          color: "rgb(226, 232, 240)", // Slate-200
          font: {
            size: 12,
            weight: 500,
          },
        },
      },
    },
  };

  return (
    <>
      <div className="mt-8 mx-auto  max-w-7xl">
       

        <div className="flex items-center w-full  justify-center">
          <div className="max-w-4xl">
            <Radar data={data} options={options} />
          </div>
        </div>
      </div>
    </>
  );
};

export default PerformanceChart;
