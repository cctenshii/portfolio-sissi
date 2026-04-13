import React from 'react';
import Hero from '../components/sections/Hero';

const Home = ({ language = 'en', setCurrentPage }) => {
  return (
    <main>
      <Hero language={language} setCurrentPage={setCurrentPage} />
    </main>
  );
};

export default Home;
