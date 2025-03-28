import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register required Chart.js modules
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineChart = () => {
  // Chart data
  const data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Sales",
        data: [65, 59, 80, 81, 56, 55, 40],
        borderColor: "#4F46E5", // Tailwind's Indigo-600
        backgroundColor: "rgba(79, 70, 229, 0.1)", // Semi-transparent background
        tension: 0.4, // Smooth curves
      },
    ],
  };

  const options: ChartOptions<"bar"> = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
        labels: {
          color: "#374151", // Tailwind's Gray-700
        },
      },
      tooltip: {
        bodyColor: "#111827", // Tailwind's Gray-900
        backgroundColor: "#F3F4F6", // Tailwind's Gray-100
        titleColor: "#111827", // Tailwind's Gray-900
      },
    },
    scales: {
      x: {
        ticks: {
          color: "#6B7280", // Tailwind's Gray-500
        },
        grid: {
          color: "#E5E7EB", // Tailwind's Gray-300
        },
      },
      y: {
        ticks: {
          color: "#6B7280", // Tailwind's Gray-500
        },
        grid: {
          color: "#E5E7EB", // Tailwind's Gray-300
        },
      },
    },
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Sales Overview</h2>
      <Line data={data} options={options} />
    </div>
  );
};

export default LineChart;
