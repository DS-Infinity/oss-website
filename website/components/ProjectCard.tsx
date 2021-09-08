import styles from '../styles/ProjectCard.module.css';
import { useEffect, useState } from 'react';

interface ProjectCardProps {
  title: string;
  createdBy: string;
  description: string;
  youtubeLink: string;
  githubLink: string;
  websiteLink: string;
}

export const ProjectCard = () => {
  return (
    <div className={styles.project}>

    </div>
  );
};
