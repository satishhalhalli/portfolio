import React from 'react';
import arrayDestruct from '../assets/food.png';
import youtube from '../assets/youtube.png';
import ecommerce from '../assets/sssss.png';
import reactSmooth from '../assets/portfolio/reactSmooth.jpg';

const Projects = () => {
    const pro = [
        {
          id: 1,
          src: arrayDestruct,
          href: 'https://github.com/satishhalhalli/satya-food-order',
        },
        {
          id: 2,
          src: youtube,
          href: 'https://github.com/satishhalhalli/youtube',
        },
        {
          id: 3,
          src: ecommerce,
         href: 'https://github.com/satishhalhalli/E-COMMERCE-WEBSITE1',
        },
        
      ];
      

  return (
    <div name="Projects" className='bg-gradient-to-b from-black to bg-gray-800 w-full text-white md:h-screen'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Projects</p>
          <p className='py-5'>Check out my works</p>
        </div>

        <div className='grid grid-cols-2 gap-8 px-12'>
        {pro.map(({ id, src, href }) => (
  <div key={id} className='shadow-md shadow-gray-500 rounded-lg'>
    <img src={src} className='rounded-md duration-200 hover:scale-100' />
    <div className='flex items-center justify-center'>
      <a href={href}>
        <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Code</button>
      </a>

      
    </div>
  </div>
))}

        </div>
      </div>
    </div>
  );
};

export default Projects;
