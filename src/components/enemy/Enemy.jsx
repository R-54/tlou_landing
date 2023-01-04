import React from 'react';
import styles from './Enemy.module.css';

const Enemy = ({ image, name, text, ...rest }) => {
  return (
    <section className={styles.enemy} {...rest}>
      <h2 className={styles.title}>{name}</h2>
      <div className={styles.image_container}>
        <img className={styles.image} src={image} alt={name} />
      </div>
      <div className={styles.description_container}>
        <p className={styles.description}>{text}</p>
      </div>
    </section>
  );
};

export default Enemy;
