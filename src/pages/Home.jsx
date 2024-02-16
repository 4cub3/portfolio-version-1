import React from 'react';
import Header from '../components/headers';
// import Nav from '../components/nav';
import Projects from '../components/projects';
import Container from '../shared/container';
import Footer from '../components/footer';

const Home = () => {
  return (
    <div className='relative'>
      {/* <Nav /> */}
      <Header />
      <main className='mb-10'>
        <Projects />
      </main>
      <footer className=''>
        <Footer/>
      </footer>
    </div>
  );
};

export default Home;
