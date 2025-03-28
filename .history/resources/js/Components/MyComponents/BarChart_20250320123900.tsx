import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register required modules for Bar Chart
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarChart = () => {
  // Chart Data
  const data = {
    labels: ["Product A", "Product B", "Product C", "Product D", "Product E"],
    datasets: [
      {
        label: "Revenue (in USD)",
        data: [12000, 19000, 3000, 5000, 25000],
        backgroundColor: [
          "#6366F1", // Tailwind Indigo-500
          "#34D399", // Tailwind Green-400
          "#FBBF24", // Tailwind Amber-400
          "#F87171", // Tailwind Red-400
          "#60A5FA", // Tailwind Blue-400
        ],
        borderColor: "#4B5563", // Tailwind Gray-600
        borderWidth: 1,
      },
    ],
  };

  // Chart Options
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
        labels: {
          color: "#374151", // Tailwind Gray-700
        },
      },
      title: {
        display: true,
        text: "Revenue by Product",
        color: "#374151", // Tailwind Gray-700
        font: {
          size: 18,
          weight: "bold",
        },
      },
      tooltip: {
        backgroundColor: "#F3F4F6", // Tailwind Gray-100
        titleColor: "#111827", // Tailwind Gray-900
        bodyColor: "#111827", // Tailwind Gray-900
      },
    },
    scales: {
      x: {
        ticks: {
          color: "#6B7280", // Tailwind Gray-500
        },
        grid: {
          color: "#E5E7EB", // Tailwind Gray-300
        },
      },
      y: {
        ticks: {
          color: "#6B7280", // Tailwind Gray-500
        },
        grid: {
          color: "#E5E7EB", // Tailwind Gray-300
        },
      },
    },
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Revenue Chart</h2>
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarChart;
