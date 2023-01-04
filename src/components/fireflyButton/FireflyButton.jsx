import React from 'react';
import styles from './FireflyButton.module.css';

const FireflyNav = ({ onClick = () => {} }) => {
  return (
    <div className={styles.firefly}>
      <button onClick={onClick} className={styles.button} />
    </div>
  );
};

export default FireflyNav;
