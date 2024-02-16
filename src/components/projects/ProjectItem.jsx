import React from 'react';
import LinkIcon from './icon/LinkIcon';
const ProjectItem = ({ image, title, link }) => {
  return (
    <div className='relative overflow-hidden w-full  sm:max-w-[48%]   lg:max-w-[32.4%] bg-white rounded-lg outline-4 outline-gray-800-0 outline-offset-2  hover:shadow-none shadow-2xl transition-all duration-300'>
      <img
        src={image}
        className='w-full h-full object-cover'
        alt='Project Image'
      />
      <div className='absolute center bottom-0  bg-gray-800-0   w-full'>
        <a
          className='px-2  flex items-center justify-between gap-4 text-gray-50-0'
          href={link}
          target='_blank'
        >
          <h4 className='text-[1.2rem] font-light leading-[0]'>{title}</h4>
          <LinkIcon />
        </a>
      </div>
    </div>
  );
};

export default ProjectItem;
