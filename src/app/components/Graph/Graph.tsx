'use client';

import React, { useRef, useEffect } from 'react';
import { Chart, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWallet, faLink, faChartBar, faDollarSign } from '@fortawesome/free-solid-svg-icons';
import styles from './Graph.module.css';

// Register all necessary components
Chart.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const data = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
  datasets: [
    {
      label: 'Online Sales',
      data: [10, 20, 15, 25, 35],
      fill: true,
      backgroundColor: 'rgba(98, 54, 255, 0.2)',
      borderColor: 'rgba(98, 54, 255, 1)',
      tension: 0.4,
    },
    {
      label: 'Store Sales',
      data: [5, 15, 25, 35, 30],
      fill: true,
      backgroundColor: 'rgba(255, 171, 36, 0.2)',
      borderColor: 'rgba(255, 171, 36, 1)',
      tension: 0.4,
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    tooltip: {
      callbacks: {
        label: function (context) {
          return `${context.dataset.label}: $${context.raw}`;
        }
      }
    }
  },
  scales: {
    x: {
      beginAtZero: true,
    },
    y: {
      beginAtZero: true,
    },
  },
};

const Graph: React.FC = () => {
  const chartRef = useRef<HTMLCanvasElement | null>(null);
  const chartInstance = useRef<Chart | null>(null);

  useEffect(() => {
    if (chartRef.current) {
      // Destroy the previous chart instance if it exists
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }

      // Create a new chart instance
      chartInstance.current = new Chart(chartRef.current, {
        type: 'line',
        data: data,
        options: options,
      });

      // Force a resize when the window is resized
      const handleResize = () => {
        if (chartInstance.current) {
          chartInstance.current.resize();
        }
      };
      window.addEventListener('resize', handleResize);

      // Cleanup function to destroy the chart instance and remove event listener
      return () => {
        window.removeEventListener('resize', handleResize);
        if (chartInstance.current) {
          chartInstance.current.destroy();
        }
      };
    }
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.detailsAndChart}>
        <div className={styles.details}>
          <h2>Dashboard</h2>
          <p className={styles.para}>Overview of latest Month</p>
          <h1 className={styles.head1}>$6468.96</h1>
          <span>Current Month Earnings</span>
          <h1>82</h1>
          <span>Current Month Sales</span>
          <button className={styles.summaryButton}>Last Month Summary</button>
        </div>
        <div className={styles.chart}>
          <canvas ref={chartRef} className={styles.canvas}></canvas>
        </div>
      </div>
      <div className={styles.footer}>
        <div className={styles.stat}>
          <FontAwesomeIcon icon={faWallet} className={styles.icon} />
          <div>
            <p>Wallet Balance</p>
            <h3>$3,567.80</h3>
          </div>
        </div>
        <div className={styles.stat}>
          <FontAwesomeIcon icon={faLink} className={styles.icon} />
          <div>
            <p>Referral Earning</p>
            <h3>$1589.53</h3>
          </div>
        </div>
        <div className={styles.stat}>
          <FontAwesomeIcon icon={faChartBar} className={styles.icon} />
          <div>
            <p>Estimate Sales</p>
            <h3>$2651.50</h3>
          </div>
        </div>
        <div className={styles.stat}>
          <FontAwesomeIcon icon={faDollarSign} className={styles.icon} />
          <div>
            <p>Earning</p>
            <h3>$53,567.54</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Graph;
