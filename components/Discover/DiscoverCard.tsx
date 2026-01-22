import React from 'react';
import styles from './Discover.module.css';

export interface DiscoverCardProps {
  title: string;
  description: string;
  image: string;
  link?: string;
}

const DiscoverCard: React.FC<DiscoverCardProps> = ({ title, description, image, link }) => {
  const cardContent = (
    <div className={styles.card}>
      <img src={image} alt={title} className={styles.image} />
        <img src={image} alt={title} className={styles.image} loading="lazy" width={200} height={120} />
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
  return link ? (
    <a href={link} className={styles.link}>
      {cardContent}
    </a>
  ) : (
    cardContent
  );
};

export default DiscoverCard;
