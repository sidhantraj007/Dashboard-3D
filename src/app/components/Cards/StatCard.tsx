// components/StatCard.tsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWaveSquare, faChartLine, faSignal, faChartBar } from '@fortawesome/free-solid-svg-icons';
import styles from './StatCard.module.css';

interface StatCardProps {
    title: string;
    value: string;
    dateRange: string;
    icon: any;
    backgroundColor: string;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, dateRange, icon, backgroundColor }) => {
    return (
        <div className={styles.container}>
            <div className={styles.card} style={{ backgroundColor }}>
        <div className={styles.iconContainer}>
            <FontAwesomeIcon icon={icon} className={styles.icon} />
        </div>
        <div className={styles.content}>
            <div className={styles.title}>{title}</div>
            <div className={styles.value}>{value}</div>
            <div className={styles.dateRange}>{dateRange}</div>
        </div>
    </div>
    </div>
        
    );
};

export default StatCard;
``