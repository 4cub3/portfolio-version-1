import React from 'react';
import Container from '../../shared/container';
import ProjectItem from './ProjectItem';
import { PROJECT_DAT } from '../../data/projects';

const Projects = () => {
  const projects = PROJECT_DAT.map((item, index) => (
    <ProjectItem
      key={index}
      image={item.image}
      link={item.link}
      title={item.title}
    />
  ));
  return (
    <div className='w-full '>
      <Container
        className={
          'bg-white rounded-lg shadow-xl w-full mx-auto -mt-20  text-gray-800-0 px-4 py-10'
        }
      >
        <h1 className='text-center text-[2.4rem]'>Projects</h1>
        <section className='flex flex-wrap gap-4 items-center justify-start w-full'>
          {projects}
        </section>
      </Container>
    </div>
  );
};

export default Projects;
