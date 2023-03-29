import React from 'react';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from "react-scroll";//Link to the npm library to set the links in the app.


const Navigation = () => {

    const [nav, SetNav] = useState(false);



    // sets the array for the links on the navbar
    const links = [
        {
            id: 1,
            link: 'home',
        },
        {
            id: 2,
            link: 'about',
        },
        {
            id: 3,
            link: 'portfolio',
        },
        {
            id: 4,
            link: 'experience',
        },
        {
            id: 5,
            link: 'contact',
        },


    ];

    return (
      <div className="flex justify-between items-center w-full h20 px-6 bg-gradient-to-r from-black to-purple-800 text-white fixed">
        <div>
          <Link to={"home"}>
            <h1 className="text-5xl font-signature py-6 ml-2">
              Edna Gonzalez{" "}
            </h1>
          </Link>
        </div>
        {/* maps the array  to the ul list  */}
        <ul className="hidden md:flex">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer- text-lg hover:bg-pink-500 rounded-md p-4 text-white  capitalize hover:scale-105 duration-200"
            >
              <Link to={link} smooth duration={500}>
                {link}
              </Link>
            </li>
          ))}
        </ul>

        <div
          onClick={() => SetNav(!nav)}
          className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
        >
          {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>

        {nav && (
          <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-500 text-gray-500">
            {links.map(({ id, link }) => (
              <li
                key={id}
                className="px-4 cursor-pointer capitalize py-6 text-4xl"
              >
                {link}
              </li>
            ))}
          </ul>
        )}
      </div>
    );
};

export default Navigation;