import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
// import {BsFillPersonLinesFill} from 'react-icons/bs'

const Footer = () => {

    const links = [
        {
            id: 1,
            child: (
                <>
                  LinkedIn <FaLinkedin size={35} />
                </>
                
            ),
            href: 'https://linkedin.com',
            style:'rounded-tr-md'
        },
        {
            id: 2,
            child: (
                <>
                  GitHub <FaGithub size={35} />
                </>
                
            ),
            href: 'https://github.com/enanesh',
           
        },
        {
            id: 3,
            child: (
                <>
                  Email <HiOutlineMail size={35} />
                </>
                
            ),
            href: 'mailto:edna@gmail.com',
         
        },
        // {
        //     id: 4,
        //     child: (
        //         <>
        //           Resume  <BsFillPersonLinesFill size={35} />
        //         </>
                
        //     ),
        //     href: '/resume.pdf',
        //     style:'rounded-tr-md'
        //   downloand:tue
        // },

    ]
    

  return (
      <div className='hidden lg:flex flex-col top-[35%] left-0 fixed'> 
          <ul>
              {links.map(({id,child,href,style,}) => (
              
                  <li key={id} className={'flex justify-between items-center w-40 h-14 px-4 bg-purple-500 hover:ml-[-10px] hover:rounded-md duration-300 ml-[-100px] ' + " " + style}>
                  <a href={href}
                          className='flex justify-between items-center w-full text-white'
                        //   download={dowload}
                          target='_blank' //allows to open new tab
                          rel="noreferrer" //Avoid errors in terminal
                  >
                      {" "}
                      <>
                         {child}
                      </>
                  </a>
              </li>
            ))}
             
          </ul>
    </div>
  )
}

export default Footer