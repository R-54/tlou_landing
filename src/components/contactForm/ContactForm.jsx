import React from 'react';
import FireflyButton from '../fireflyButton/FireflyButton';
import styles from './ContactForm.module.css';

const ContactForm = () => {
  return (
    <section className={styles.contact_form}>
      <h2 className={styles.title}>Contact</h2>
      <input className={styles.input} placeholder='Name' />
      <input className={styles.input} placeholder='Email' />
      <input className={styles.input} placeholder='Message' />
      <FireflyButton />
    </section>
  );
};

export default ContactForm;
