// import React from 'react';
// import { FaLinkedin, FaGithub, FaLeetcode } from 'react-icons/fa';
// import { HiOutlineMail } from 'react-icons/hi';
// import { SiLeetcode } from 'react-icons/si';

// const SocialLink = () => {
//   return (
//     <div className='hidden lg:flex flex-col top-[35%] left-0 fixed'>
//       <ul>
//         <li className='flex items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md bg-gray-500 '>
//           <a className="flex justify-between items-center w-full text-white" href='https://www.linkedin.com/in/satish-halhalli/'>
//             <span className='mr-2'>Linkedin</span>
//             <FaLinkedin size={30} />
//           </a>
//         </li>
//         <li className='flex items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md bg-gray-500 '>
//           <a className="flex justify-between items-center w-full text-white" href='https://github.com/satishhalhalli'>
//             <span className='mr-2'>GitHub</span>
//             <FaGithub size={30} />
//           </a>
//         </li>
//         <li className='flex items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md bg-gray-500 '>
//           <a className="flex justify-between items-center w-full text-white" href='mailto:satishhalhalli5456@gmail.com'>
//             <span className='mr-2'>Mail</span>
//             <HiOutlineMail size={30} />
//           </a>
//         </li>
//         <li className='flex items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md bg-gray-500 '>
//           <a className="flex justify-between items-center w-full text-white" href='https://leetcode.com/satishhalhalli7484/'>
//             <span className='mr-2'>Leetcode</span>
//             <SiLeetcode size={30} />
//           </a>
//         </li>
//         {/* Add more social links here */}
//       </ul>
//     </div>
//   );
// };

// export default SocialLink;

import React from 'react';
import { FaLinkedin, FaGithub, FaLeetcode,FaPhone} from 'react-icons/fa'; // Add FaLeetcode import
import { HiOutlineMail } from 'react-icons/hi';
import { SiLeetcode } from 'react-icons/si';

const SocialLink = () => {
  return (
    <div className='hidden lg:flex flex-col top-[35%] left-0 fixed'>
      <ul>
        <li className='flex items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md bg-gray-500 '>
          <a className="flex justify-between items-center w-full text-white" href='https://www.linkedin.com/in/satish-halhalli/'>
            <span className='mr-2'>Linkedin</span>
            <FaLinkedin size={30} />
          </a>
        </li>
        <li className='flex items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md bg-gray-500 '>
          <a className="flex justify-between items-center w-full text-white" href='https://github.com/satishhalhalli'>
            <span className='mr-2'>GitHub</span>
            <FaGithub size={30} />
          </a>
        </li>
        <li className='flex items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md bg-gray-500 '>
          <a className="flex justify-between items-center w-full text-white" href='mailto:satishhalhalli7484@gmail.com'>
            <span className='mr-2'>Mail</span>
            <HiOutlineMail size={30} />
          </a>
        </li>
        <li className='flex items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md bg-gray-500 '>
          <a className="flex justify-between items-center w-full text-white" href='https://leetcode.com/satishhalhalli7484/'>
            <span className='mr-2'>Leetcode</span>
            <SiLeetcode size={30} />
          </a>
        </li>
        <li className='flex items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md bg-gray-500 '>
          <a className="flex justify-between items-center w-full text-white" href='tel:9110265060'>
            <span className='mr-2'>Phone : 9110265060</span>
            <FaPhone size={30} />
          </a>
        </li>

        {/* Add more social links here */}
      </ul>
    </div>
  );
};

export default SocialLink;
