import React, { useRef } from 'react';
import Welcome from './components/welcome/Welcome';
import EnemyList from './components/enemyList/EnemyList';
import ContactForm from './components/contactForm/ContactForm';
import './App.css';

const App = () => {
  const inputRef = useRef();

  const focusEnemyList = () => {
    inputRef.current.scrollIntoView();
  };

  return (
    <main className='app'>
      <Welcome onClickFirefly={focusEnemyList} />
      <EnemyList ref={inputRef} />
      <ContactForm />
    </main>
  );
};

export default App;
