// import React from 'react';
// import arrayDestruct from '../assets/food.png';
// import youtube from '../assets/youtube.png';
// import ecommerce from '../assets/sssss.png';


// const Projects = () => {
//     const pro = [
//         {
//           id: 1,
//           src: arrayDestruct,
//           href: 'https://github.com/satishhalhalli/satya-food-order',
//         },
//         {
//           id: 2,
//           src: youtube,
//           href: 'https://github.com/satishhalhalli/youtube',
//         },
//         {
//           id: 3,
//           src: ecommerce,
//          href: 'https://github.com/satishhalhalli/E-COMMERCE-WEBSITE1',
//         },
        
//       ];
      

//   return (
//     <div name="Projects" className='bg-gradient-to-b from-black to bg-gray-800 w-full text-white md:h-screen'>
//       <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full '>
//       {/* <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row' style={{ paddingTop: '20vh' }}> */}

//         <div className='pb-8'>
//           <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Projects</p>
//           <p className='py-5'>Check out my works</p>
//         </div>

//         <div className='grid grid-cols-2 gap-8 px-12'>
//         {pro.map(({ id, src, href }) => (
//   <div key={id} className='shadow-md shadow-gray-500 rounded-lg'>
//     <img src={src} className='rounded-md duration-200 hover:scale-100' />
//     <div className='flex items-center justify-center'>
//       <a href={href}>
//         <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Code</button>
//       </a>

      
//     </div>
//   </div>
// ))}

//         </div>
//       </div>
//     </div>
//   );
// };

// export default Projects;
import React from 'react';
import arrayDestruct from '../assets/food.png';
import youtube from '../assets/youtube.png';
import ecommerce from '../assets/sssss.png';

const Projects = () => {
  const pro = [
    {
      id: 1,
      name : "food-order-web",
      src: arrayDestruct,
      href: 'https://github.com/satishhalhalli/satya-food-order',
      demo: 'https://food-order-sigma.vercel.app/'
    },
    {
      id: 2,
      name : 'YouTube-Clone',
      src: youtube,
      href: 'https://github.com/satishhalhalli/youtube',
      demo:'https://youtube-two-alpha.vercel.app/'
    },
    {
      id: 3,
      name : 'e-commerce-web',
      src: ecommerce,
      href: 'https://github.com/satishhalhalli/E-COMMERCE-WEBSITE1',
      demo: 'https://github.com/satishhalhalli/E-COMMERCE-WEBSITE1'
    },
  ];

  return (
    <div  id="projects" name="Projects" className='bg-gradient-to-b from-black to bg-gray-800 w-full text-white md:h-screen'>
      <div className='max-w-screen-lg py-40 mx-auto'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Projects</p>
          <p className='py-5'>Check out my works</p>
        </div>

        <div className='grid grid-cols-3 gap-8 px-12 py-8'>
       
          {pro.map(({ id, name,src, href, demo}) => (
            <div key={id} className='shadow-md shadow-gray-500 rounded-lg mb-6 mr-6'>
              <h1 className='font-semibold text-center'>{name}</h1>
              <img src={src} className='rounded-md duration-200 hover:scale-100' />
              <div className='flex items-center justify-between'>
                <a href={href}>
                  <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Code</button>
                </a>
                <a href={demo}>
                  <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Demo</button>
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
