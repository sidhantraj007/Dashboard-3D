import React from 'react';
import { BellIcon, SearchIcon } from '@heroicons/react/outline';
import styles from './Navbar.module.css'; // Import the CSS module

const Navbar: React.FC = () => {
  return (
    <div className={styles.navbar}>
      {/* Left Section */}
      <div className={styles.navbarLeft}>
        <h1 className={styles.navbarTitle}>Dashboard</h1>
        <span className={styles.dropdownIcon}>▼</span>
      </div>

      {/* Right Section */}
      <div className={styles.navbarRight}>
        {/* Center Section */}
        <div className={styles.searchContainer}>
          <input
            type="text"
            placeholder="Search"
            className={styles.searchInput}
          />
          <SearchIcon className={styles.searchIcon} />
        </div>

        {/* Notifications */}
        <div className={styles.notificationContainer}>
          <BellIcon className={styles.notificationIcon} />
          <span className={styles.notificationBadge}>2</span>
        </div>

        {/* Date or other info */}
        <div className={styles.dateInfo}>Today, Apr 8</div>

        {/* User Profile */}
        <div className={styles.profileContainer}>
          <img
            src="https://via.placeholder.com/40" // Replace with actual image URL
            alt="Profile"
            className={styles.profileImage}
          />
          <div>
            <p className={styles.profileName}>Sidhant</p>
            <p className={styles.profileUsername}>@user6805</p>
          </div>
          <span className={styles.dropdownIcon}>▼</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
