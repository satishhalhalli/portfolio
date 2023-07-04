// import React, { useState } from 'react';
// import { FaBars, FaTimes } from 'react-icons/fa';
// import { Link } from 'react-scroll';
// import Home from './Home'; // Import the Home component here

// const Navbar = () => {
//   const [nav, setNav] = useState(false);

//   return (
//     <div className='flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed'>
//       <div>
//         <h1 className='text-5xl font-signature ml-2'>Satish Halhalli</h1>
//       </div>

//       <ul className='hidden md:flex'>
//         <Link to='home' smooth duration={500}>
//           <li className='px-4 cursor-pointer font-medium hover:scale-110 duration-75'>Home</li>
//         </Link>
//         <Link to='about' smooth duration={500}>
//           <li className='px-4 cursor-pointer font-medium hover:scale-110 duration-75'>About</li>
//         </Link>
//         <Link to='portfolio' smooth duration={500}>
//         <li className='px-4 cursor-pointer font-medium hover:scale-110 duration-75'>Portfolio</li>
//         </Link>
//         <Link to='projects' smooth duration={500}>
//         <li className='px-4 cursor-pointer font-medium hover:scale-110 duration-75'>Projects</li>
//         </Link>
//         <Link to='contact' smooth duration={500}>
//         <li className='px-4 cursor-pointer font-medium hover:scale-110 duration-75'>Contact</li>
//         </Link>
//       </ul>

//       <div onClick={() => setNav(!nav)} className='cursor-pointer pr-4 z-10 text-gray-500 md:hidden'>
//         {nav ? <FaBars size={30} /> : <FaTimes size={30} />}
//       </div>

//       {nav && (
//         <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to bg-gray-800 text-gray-500'>
//           <li className='px-4 cursor-pointer font-medium hover:scale-110 duration-75'>Home</li>
//           <li className='px-4 cursor-pointer font-medium hover:scale-110 duration-75'>About</li>
//           <li className='px-4 cursor-pointer font-medium hover:scale-110 duration-75'>Portfolio</li>
//           <li className='px-4 cursor-pointer font-medium hover:scale-110 duration-75'>Projects</li>
//           <li className='px-4 cursor-pointer font-medium hover:scale-110 duration-75'>Contact</li>
//         </ul>
//       )}
//     </div>
//   );
// };

// export default Navbar;
import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  return (
    <div className='flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed'>
      <div>
        <h1 className='text-5xl font-signature ml-2'>Satish Halhalli</h1>
      </div>

      <ul className='hidden md:flex'>
        <li>
          <Link to='home' smooth={true} duration={500}>
            <span className='px-4 cursor-pointer font-medium hover:scale-110 duration-75'>Home</span>
          </Link>
        </li>
        <li>
          <Link to='about' smooth={true} duration={500}>
            <span className='px-4 cursor-pointer font-medium hover:scale-110 duration-75'>About</span>
          </Link>
        </li>
        <li>
          <Link to='portfolio' smooth={true} duration={500}>
            <span className='px-4 cursor-pointer font-medium hover:scale-110 duration-75'>Portfolio</span>
          </Link>
        </li>
        <li>
          <Link to='projects' smooth={true} duration={500}>
            <span className='px-4 cursor-pointer font-medium hover:scale-110 duration-75'>Projects</span>
          </Link>
        </li>
        <li>
          <Link to='contact' smooth={true} duration={500}>
            <span className='px-4 cursor-pointer font-medium hover:scale-110 duration-75'>Contact</span>
          </Link>
        </li>
      </ul>

      <div onClick={() => setNav(!nav)} className='cursor-pointer pr-4 z-10 text-gray-500 md:hidden'>
        {nav ? <FaBars size={30} /> : <FaTimes size={30} />}
      </div>

      {nav && (
        <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to bg-gray-800 text-gray-500'>
          <li>
            <Link to='home' smooth={true} duration={500}>
              <span className='px-4 cursor-pointer font-medium hover:scale-110 duration-75'>Home</span>
            </Link>
          </li>
          <li>
            <Link to='about' smooth={true} duration={500}>
              <span className='px-4 cursor-pointer font-medium hover:scale-110 duration-75'>About</span>
            </Link>
          </li>
          <li>
            <Link to='portfolio' smooth={true} duration={500}>
              <span className='px-4 cursor-pointer font-medium hover:scale-110 duration-75'>Portfolio</span>
            </Link>
          </li>
          <li>
            <Link to='projects' smooth={true} duration={500}>
              <span className='px-4 cursor-pointer font-medium hover:scale-110 duration-75'>Projects</span>
            </Link>
          </li>
          <li>
            <Link to='contact' smooth={true} duration={500}>
              <span className='px-4 cursor-pointer font-medium hover:scale-110 duration-75'>Contact</span>
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
