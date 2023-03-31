import React from 'react'
import html from '../assets/html.png'
import css from '../assets/css.png'
import javascript from '../assets/javascript.png'
import reactImage from '../assets/react.png'
import graphql from '../assets/graphql.png'
import github from '../assets/github.png'
import tailwind from '../assets/tailwind.png'
import python from '../assets/python.png'
import node from "../assets/node.png"
import sql from "../assets/sql.png"
import boot from "../assets/bootstrap.png"
import mongo from "../assets/mongo.png";


const Experience = () => {
    const tech = [
      {
        id: 1,
        src: html,
        title: "HTML",
        style: "shadow-orange-500",
      },
      {
        id: 2,
        src: css,
        title: "CSS",
        style: "shadow-blue-500",
      },
      {
        id: 3,
        src: javascript,
        title: "JAVASCRIPT",
        style: "shadow-yellow-500",
      },
      {
        id: 4,
        src: reactImage,
        title: "REACT",
        style: "shadow-blue-600",
      },
      {
        id: 5,
        src: graphql,
        title: "GRAPHQL",
        style: "shadow-pink-400",
      },
      {
        id: 6,
        src: tailwind,
        title: "TAILWIND",
        style: "shadow-sky-400",
      },
      {
        id: 7,
        src: github,
        title: "GIT & GITHUB",
        style: "shadow-gray-400",
      },
      {
        id: 8,
        src: python,
        title: "PYTHON",
        style: "shadow-yellow-500",
      },

      {
        id: 9,
        src: node,
        title: "NODE MODULES",
        style: "shadow-green-500",
      },
      {
        id: 10,
        src: sql,
        title: "MYSQL",
        style: "shadow-blue-500",
      },
      {
        id: 11,
        src: mongo,
        title: "MongoDB",
        style: "shadow-green-500",
      },
      {
        id: 12,
        src: boot,
        title: "BOOTSRAP",
        style: "shadow-purple-500",
      },
    ];


  return (
    <div
      name="experience"
      className="bg-gradient-to-b p-14  from-gray-800 to-black w-full pr-34 py-24 "
    >
      <div className="max-w-screen-lg mx-auto p-16 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-purple-500 p-2 inline">
            {" "}
            Experience{" "}
          </p>
          <p className="py-6"> These are technologies I've worked with </p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {tech.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title} </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experience