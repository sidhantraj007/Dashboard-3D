// components/StatCardContainer.tsx
import React from 'react';
import StatCard from './StatCard';
import styles from './StatCardContainer.module.css';
import { faWater, faChartLine, faSignal, faChartBar } from '@fortawesome/free-solid-svg-icons';


const StatCardContainer: React.FC = () => {
    return (
        <div className={styles.container}>
            <StatCard
                title="Revenue Status"
                value="$ 432"
                dateRange="Jan 01 - Jan 10"
                icon={faWater}  // Using faWater instead of faWaveSquare
                backgroundColor="#6C5DD3"
            />
            <StatCard
                title="Page View"
                value="$ 432"
                dateRange=""
                icon={faChartLine}
                backgroundColor="#4BC6EF"
            />
            <StatCard
                title="Bounce Rate"
                value="$ 432"
                dateRange="Monthly"
                icon={faSignal}
                backgroundColor="#34D3C4"
            />
            <StatCard
                title="Revenue Status"
                value="$ 432"
                dateRange="Jan 01 - Jan 10"
                icon={faChartBar}
                backgroundColor="#F5A623"
            />
        </div>
    );
};

export default StatCardContainer;
