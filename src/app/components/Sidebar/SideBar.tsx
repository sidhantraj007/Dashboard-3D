import React from 'react';
import { HomeIcon, ClipboardIcon, AcademicCapIcon, CreditCardIcon, CogIcon, LogoutIcon } from '@heroicons/react/outline';
import styles from './Sidebar.module.css';

const Sidebar: React.FC = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.iconGroup}>
        <a href="#" className={styles.iconButton}>
          <HomeIcon className={styles.icon} />
        </a>
        <a href="#" className={styles.iconButton}>
          {/* <SpeakerIcon className={styles.icon} /> */}
        </a>
        <a href="#" className={styles.iconButton}>
          <ClipboardIcon className={styles.icon} />
        </a>
        <a href="#" className={styles.iconButton}>
          <AcademicCapIcon className={styles.icon} />
        </a>
        <a href="#" className={styles.iconButton}>
          <CreditCardIcon className={styles.icon} />
        </a>
      </div>
      <div className={`${styles.iconGroup} ${styles.bottomIcons}`}>
        <a href="#" className={styles.iconButton}>
          <CogIcon className={styles.icon} />
        </a>
        <a href="#" className={styles.iconButton}>
          <LogoutIcon className={styles.icon} />
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
