import React, { useEffect, useRef } from "react";
import { Pie } from "react-chartjs-2";
import Chart from "chart.js/auto";

const RatioToPieChart = ({ ratio }) => {
  const canvasRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    chartInstance.current = new Chart(canvasRef.current, {
      type: "pie",
      data: {
        labels: [ratio*100+"%"],
        datasets: [
          {
            data: [ratio, 1 - ratio],
            backgroundColor: ["#FF6384", "#36A2EB"],
            hoverBackgroundColor: ["#FF6384", "#36A2EB"]
          }
        ]
      }
    });

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [ratio]);

  // Set the width and height of the chart
  const chartStyle = { width: "10px", height: "10px" };

  return <canvas ref={canvasRef} style={chartStyle} />;
};

export default RatioToPieChart;
