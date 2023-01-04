import React from 'react';
import FireflyButton from '../fireflyButton/FireflyButton';
import styles from './Welcome.module.css';

const Welcome = ({ onClickFirefly, ...rest }) => {
  const headingMessage = ' THE\n LAST\n OF US';

  return (
    <section className={styles.welcome} {...rest}>
      <h2 className={styles.heading}>{headingMessage}</h2>
      <FireflyButton onClick={onClickFirefly} />
    </section>
  );
};

export default Welcome;
