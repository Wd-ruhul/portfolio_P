import React from 'react';
import Banner from '../Banner/Banner';
import Projects from '../Projects/Projects';
import Skill from '../Skill/Skill';
import Contact from '../Contact/Contact'
import About from '../About/About';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Projects></Projects>
      <Skill></Skill>
      <About></About>
 <Contact></Contact>
    </div>
  );
};

export default Home;