import React from 'react'
import arrayDestruct from '../assets/portfolio/arrayDestruct.jpg'
import installNode from '../assets/portfolio/installNode.jpg'
import navbar from '../assets/portfolio/navbar.jpg'
import usestate from '../assets/portfolio/usestate.jpg'
import project1 from '../assets/portfolio/project1.jpg'
import project2 from '../assets/portfolio/project2.jpg'

const Portfolio = () => {

  const portfolios = [
    {
      id: 1,
      src: project1,
      title: "Dinner and Drinks ",
      deploy:"https://sely1724.github.io/dinner-and-drinks/",
      linkRepo:"https://github.com/sely1724/dinner-and-drinks"
    },
     {
      id: 2,
       src: project2,
      title: "Hotel California App",
    },
      {
      id: 3,
        src: navbar,
      title: "TechBro Ideas Style Blog ",
    },
    {
      id: 4,
      src: usestate,
      title: "Dinner and Drinks ",
    },
        {
      id: 5,
          src: installNode,
      title: "Dinner and Drinks ",
    },
    {
      id: 6,
      src: arrayDestruct,
      title: "Dinner and Drinks ",
    },

  ]

  return (
    <div name="portfolio" className='bg-gradient-to-b from-black to-gray-800 w-full text-white  pb-20'>
      
      <div className='max-w-screen-xl p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-14'>
          <p className='text-4xl font-bold inline border-b-4 border-purple-500'>Portfolio</p>
          
          <p className='py-6 text-xl'>Check out some of my workright here  </p>
          

      </div>
      <div  className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
      
      
          {portfolios.map(({ id, src,title }) => (
        
          <div key={id} className='shadow-lg shadow-purple-600 rounded-lg'>
            <h1 className='text-2xl text-center p-2 bg-gradient-to-r from-purple-900 to bg-purple-600 rounded-lg'> {title}</h1>
          <img src={src} alt=" "  className='rounded-lg duration-200 hover:scale-105 p-4 '/>

        <div className='flex item-center justify-center border-r-2  border-purple-500 text-lg '>
          <button className='w-1/2 px-4 m-4 duration-200 hover:scale-105   '>Deploy </button>
          <button className='w-1/2 px-4  m-4 duration-200 hover:scale-105 '> Github </button>
        </div>
        
      </div>
      
          
        ))
        }


        </div>       
     </div>
    </div>
  )
}

export default Portfolio