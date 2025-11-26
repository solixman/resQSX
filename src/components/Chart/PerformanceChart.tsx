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
      "01:00", "02:00", "03:00", "04:00", "05:00", "06:00",
      "07:00", "08:00", "09:00", "10:00", "11:00", "12:00",
    ],
    datasets: [
      {
        label: "Incidents par Heure",
        data: [5, 6, 8, 0, 7, 5, 3, 2, 8, 5, 9, 6],
        // Rouge pour symboliser la charge de travail (Incidents)
        backgroundColor: "rgba(239, 68, 68, 0.2)", // Rouge transparent
        borderColor: "rgb(239, 68, 68)", // Rouge vif (Red-600)
        borderWidth: 2.5,
        pointBackgroundColor: "rgb(239, 68, 68)",
        pointBorderColor: "rgb(30, 41, 59)", // bg-slate-900 (pour le contraste)
        pointBorderWidth: 2,
        pointRadius: 5,
        pointHoverRadius: 7,
        pointHoverBackgroundColor: "rgb(220, 38, 38)", // Rouge plus foncé
      },
    ],
  };
const options:any = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: {
        display: true,
        labels: {
          color: "rgb(203, 213, 225)", // Slate-300
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
   <div  className="mt-8 mx-auto w-full max-w-7xl">
    <div className="bg-gray-800 rounded-xl shadow-2xl p-6 md:p-8">
        <h2 className="text-2xl font-bold text-gray-100 mb-6 border-b border-gray-700 pb-3">
            🎯 Performance Analysis: Incident Load by Hour
        </h2>
        
        <div  className="flex items-center w-full min-h-[450px] justify-center">
            <div id="chart" className="max-w-4xl">
                <Radar data={data} options={options} />
            </div>
        </div>
    </div>
</div>
    </>
  );
};

export default PerformanceChart;
