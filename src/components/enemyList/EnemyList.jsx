import React, { forwardRef } from 'react';
import runner from '../../assets/images/runner.webp';
import bloater from '../../assets/images/bloater.webp';
import clicker from '../../assets/images/clicker.webp';
import ratKing from '../../assets/images/rat_king.webp';
import shambler from '../../assets/images/shambler.webp';
import stalker from '../../assets/images/stalker.webp';
import Enemy from '../enemy/Enemy';
import styles from './EnemyList.module.css';

const EnemyList = forwardRef(({ ...rest }, ref) => {
  const imageList = [
    {
      name: 'Runner',
      image: runner,
      text: 'The infected are humans who have been infected by the Cordyceps brain infection and subsequently mutated into horrific new forms. The resulting creatures are aggressive, and will attack any uninfected human and animals on sight. The infected are one of the main enemy types in The Last of Us, Left Behind, and The Last of Us Part II, the other being the human enemies.',
    },
    {
      name: 'Stalker',
      image: stalker,
      text: 'Stalkers are the second stage of the infected in The Last of Us, The Last of Us Part II and Left Behind. They take between two weeks and one year to reach this stage after exposure to the Cordyceps brain infection.',
    },
    {
      name: 'Clicker',
      image: clicker,
      text: 'Clickers are the third stage of the infected in The Last of Us, The Last of Us Part II, and Left Behind. They take roughly a year to reach this stage of infection after exposure to the Cordyceps brain infection. They have had prolonged exposure to the fungus, and now possess strength that significantly surpasses the average human.',
    },
    {
      name: 'Bloater',
      image: bloater,
      text: 'Bloaters are the fourth, rarest, and most dangerous stage of the infected in The Last of Us and The Last of Us Part II. They take years to develop and reach this stage after years of exposure to the Cordyceps brain infection.',
    },
    {
      name: 'Shambler',
      image: shambler,
      text: 'Shamblers are an alternate fourth stage of the infected that are introduced in The Last of Us Part II, encountered in Seattle and Santa Barbara. They are believed to have developed from exposure to high amounts of water, compared to the typical dry environments bloaters develop in after infection from the Cordyceps brain infection.',
    },
    {
      name: 'Rat King',
      image: ratKing,
      text: 'Introduced in The Last of Us Part II, this infected anomaly, dubbed the rat king, is a super-organism composed of multiple stalkers, clickers, and a bloater that have been connected together by the Cordyceps fungus.',
    },
  ];

  return (
    <div className={styles.enemy_list} ref={ref} {...rest}>
      {imageList.map(({ name, image, text }) => (
        <Enemy name={name} image={image} key={name} text={text} />
      ))}
    </div>
  );
});

export default EnemyList;
