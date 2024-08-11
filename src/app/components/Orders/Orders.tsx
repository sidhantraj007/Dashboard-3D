import React from 'react';
import styles from './Orders.module.css';

const Orders: React.FC = () => {
  return (
    <div className={styles.ordersContainer}>
      <div className={styles.header}>
        <h2 className={styles.title}>Order Status</h2>
        <p className={styles.subtitle}>Overview of latest month</p>
      </div>

      <div className={styles.actions}>
        <button className={`${styles.actionButton} ${styles.addButton}`}>
          <span className={styles.addIcon}>+</span> Add
        </button>
        <button className={styles.actionButton}>🗑️</button>
        <button className={styles.actionButton}>🔄</button>
        <button className={styles.actionButton}>📄</button>
      </div>

      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>INVOICE</th>
              <th>CUSTOMERS</th>
              <th>FROM</th>
              <th>PRICE</th>
              <th>STATUS</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>12386</td>
              <td>Charly dues</td>
              <td>Russia</td>
              <td>$2652</td>
              <td><span className={`${styles.status} ${styles.process}`}>Process</span></td>
            </tr>
            <tr>
              <td>12386</td>
              <td>Charly dues</td>
              <td>Russia</td>
              <td>$2652</td>
              <td><span className={`${styles.status} ${styles.open}`}>Open</span></td>
            </tr>
            <tr>
              <td>12386</td>
              <td>Charly dues</td>
              <td>Russia</td>
              <td>$2652</td>
              <td><span className={`${styles.status} ${styles.onHold}`}>On Hold</span></td>
            </tr>
          </tbody>
        </table>
      </div>

    
    </div>
  );
};

export default Orders;
