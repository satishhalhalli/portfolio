import React from 'react'
import html from  "../assets/html.png"
import css from  "../assets/css.png"
import javascript from  "../assets/javascript.png"
import reactimage from  "../assets/react.png"
import nextjs from  "../assets/reduxLogo.png"
import java from  "../assets/javaa.png"
import github from  "../assets/github.png"
import tailwind from  "../assets/tailwind.png"
import cpp from  "../assets/cpppp.png"
const Experience = () => {

    const tech =[
        {
            id : 1,
            src : html,
            title :'HTML',
            style : 'shadow-orange-500'
        },
        {
            id : 2,
            src : css,
            title :'css',
            style : 'shadow-blue-400'
        },
        {
            id : 3,
            src : javascript,
            title :'JS',
            style : 'shadow-yellow-500'
        },
        {
            id : 4,
            src : reactimage,
            title :'react',
            style : 'shadow-blue-600'
        },
        {
            id : 5,
            src : tailwind,
            title :'tailwind',
            style : 'shadow-sky-500'
        },
        {
            id : 6,
            src : nextjs,
            title :'redux',
            style : 'shadow-gray-600'
        },
        {
            id : 7,
            src : java,
            title :'java',
            style : 'shadow-gray-100'
        }
        , {
            id : 8,
            src : github,
            title :'github',
            style : 'shadow-gray-400'
        },
        {
            id : 9,
            src : cpp,
            title :'cpp',
            style : 'shadow-blue-400'
        }
    ]
  return (
    <div name="experince" className='bg-gradient-to-b from-gray-800 to-black w-full h-screen'>
      <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
        <div>
            <p className='text-4xl font-bold py-3'>Skills</p>
        </div>


        <div className='w-full grid grid-cols-4 gap-8 text-center py-8 px-12 sm:px-0'>

            {tech.map(({id, src, title, style}) => (
            <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
            <img src={src} className='w-20 mx-auto'/>
            <p className='mt-4'>{title}</p>
        </div>
            ))}
           
        </div>
      </div>
    </div>
  )
}

export default Experience
