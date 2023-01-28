import React from 'react';
import {FaBars, FaTimes} from "react-icons/fa"

const NavBar = () => {
  return (
   <div className="flex justify-between items-center w-full h-20 text-white px-4 bg-black fixed">
     
      {/* Developer Name */}
      <div>
        <h1 className="text-5xl font-signature">Edna Gonzalez</h1>
      </div>
      
      <ul className="flex">
        <li className=" px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200">Home</li>
      </ul>

    </div>
  )
}

export default NavBar;