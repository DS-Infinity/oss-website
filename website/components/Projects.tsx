import styles from '../styles/Projects.module.css';
import { useEffect, useState } from 'react';

export const Projects = () => {
  return (
    <div className={styles.projects}>
      <div className={styles.main}>
        <div className={styles.title}>
          This Event&#x27;s Projects
        </div>
        <div className={styles.list}>
        </div>
      </div>
    </div>
  );
};
