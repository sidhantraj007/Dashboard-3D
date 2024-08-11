// components/RecentActivities.tsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faHandshake, faNewspaper, faAnchor } from '@fortawesome/free-solid-svg-icons';
import styles from './RecentActivities.module.css';

interface Activity {
    time: string;
    icon: any;
    title: string;
    description: string;
}

const activities: Activity[] = [
    {
        time: '40 Mins Ago',
        icon: faCheckCircle,
        title: 'Task Updated',
        description: 'Nikolai Updated a Task',
    },
    {
        time: '1 day ago',
        icon: faHandshake,
        title: 'Deal Added',
        description: 'Panshi Updated a Task',
    },
    {
        time: '40 Mins Ago',
        icon: faNewspaper,
        title: 'Published Article',
        description: 'Sanshi Updated an Article',
    },
    {
        time: '1 day ago',
        icon: faAnchor,
        title: 'Dock Updated',
        description: 'Manshi Updated a Dock',
    },
];

const RecentActivities: React.FC = () => {
    return (
        <div className={styles.activitiesContainer}>
            <h3 className={styles.head3}>Recent Activities</h3>
            {activities.map((activity, index) => (
                <div className={styles.activityItem} key={index}>
                    <div className={styles.iconContainer} style={{ backgroundColor: index % 2 === 0 ? '#FF6B81' : '#A39DFF' }}>
                        <FontAwesomeIcon icon={activity.icon} className={styles.icon} />
                    </div>
                    <div className={styles.textContainer}>
                        <span className={styles.time}>{activity.time}</span>
                        <span className={styles.title}>{activity.title}</span>
                        <span className={styles.description}>{activity.description}</span>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default RecentActivities;
