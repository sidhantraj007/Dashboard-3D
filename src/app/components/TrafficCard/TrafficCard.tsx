// components/TrafficChart.tsx
'use client'
import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import styles from './TrafficCard.module.css';

// Register Chart.js components
Chart.register(ArcElement, Tooltip, Legend);

const TrafficChart: React.FC = () => {
    const data = {
        labels: ['Facebook', 'YouTube', 'Direct Search'],
        datasets: [
            {
                data: [33, 55, 12],
                backgroundColor: ['#AA6CFC', '#FC5A5A', '#1ED5A9'],
                borderWidth: 0,
            },
        ],
    };

    const options = {
        cutout: '70%',
        plugins: {
            legend: {
                display: false,
            },
        },
    };

    return (
        <div className={styles.container}>
            <div className={styles.chartContainer}>
            <Doughnut data={data} options={options} />
            {/* <div className={styles.iconWrapper}>
                <FontAwesomeIcon icon={faGraduationCap} className={styles.icon} />
            </div> */}
            <div className={styles.labels}>
                <div>
                    <span className={styles.facebook}>33%</span> Facebook
                </div>
                <div>
                    <span className={styles.youtube}>55%</span> YouTube
                </div>
                <div>
                    <span className={styles.directSearch}>12%</span> Direct Search
                </div>
            </div>
        </div>
        </div>
        
    );
};

export default TrafficChart;
