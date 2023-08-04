// import React from 'react'
// import satya from '../assets/satya.png'
// import {MdKeyboardArrowRight} from "react-icons/md"
// const Home = () => {
//   return (
//     <div name="home " className=' h-screen w-full bg-gradient-to-b from-black via-black to bg-gray-800'>
     
//      <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
//         <div className='flex flex-col justify-center h-full'>
//             <h2 className='text-4xl sm:text-7xl font-bold text-white'>
//                 I'm a Full Stack Devloper
//             </h2>
//             <p className='text-gray-500 py-4 max-w-md'>
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta at nostrum vero accusamus. Incidunt animi molestias esse eveniet, maiores, vitae non tenetur vel a sit quibusdam dicta, porro voluptas error qui sapiente.
//             </p>

//             <div>
//                 <button className='text-white w-fit px-6 py-3 my-2 flext items-center rounded-md bg-gradient-to-r from-red-600 to bg-red-300 cursor-pointer' onClick={()=>  <a href='/sathish-resume.pdf'></a>}>
                    
//                     Download Resume
//                     <span >
//                     <MdKeyboardArrowRight/>
//                     </span>
//                 </button>
//             </div>
//         </div>
//         <div>
//             <img src={satya}
//              alt='my profile' className='rounded-2xl mx-auto w-2/3 md:w-1/2 lg:w-1/2'/>
//         </div> 
//      </div>
//     </div>
//   )
// }

// export default Home
import React from 'react';
import satya from '../assets/satya.png';
import { MdKeyboardArrowRight } from 'react-icons/md';

const Home = () => {
  return (
    <div name="home" className='h-screen w-full bg-gradient-to-b from-black via-black to bg-gray-800 '>
      {/* <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'> */}
      <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row' style={{ paddingTop: '20vh' }}>

        <div className='flex flex-col justify-center h-full'>
          <h2 className='text-4xl sm:text-7xl font-bold text-white'>
            I'm a FrontEnd Developer
          </h2>
          <p className=' text-lg text-gray-300 py-4 max-w-md'>
          Motivated and creative front-end developer
with a good foundation in HTML, CSS, and
JavaScript. Completed a comprehensive front-
end development course and proficient in using
React framework to develop dynamic web pages
and applications. Skilled in using tools such as
Visual Studio Code. a team player who is excited
to contribute to a dynamic and innovative team
          </p>

          <div>
            <a href='/satishhalhalli.pdf' download>
              <button className='text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-red-950 to bg-red-400 cursor-pointer'>
                Download Resume
                <span>
                  <MdKeyboardArrowRight />
                </span>
              </button>
            </a>
          </div>
        </div>
        <div className='flex justify-end'>
          <img src={satya} alt='my profile' className='rounded-2xl mx-auto w-2/3 md:w-1/2 lg:w-1/2' />
        </div>
      </div>
    </div>
  );
}

export default Home;

