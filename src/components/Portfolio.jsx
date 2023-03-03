import React from "react";
import project1 from "../assets/portfolio/project1.jpg";
import project2 from "../assets/portfolio/project2.jpg";
import project3 from "../assets/portfolio/project3.png";
import project4 from "../assets/portfolio/project4.png";
import project5 from "../assets/portfolio/project5.png";
import project6 from "../assets/portfolio/project6.png";


const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: project1,
      title: "Dinner and Drinks ",
      deploy: "https://sely1724.github.io/dinner-and-drinks/",
      linkRepo: "https://github.com/sely1724/dinner-and-drinks",
    },
    {
      id: 2,
      src: project2,
      title: "Hotel California App",
      deploy: "https://hotel-california-app.herokuapp.com/",
      linkRepo: "https://github.com/kas500/hotel-california-app",
    },
    {
      id: 3,
      src: project3,
      title: "TechBro Ideas Style Blog ",
      deploy: "https://cms-styleblog-mvc.herokuapp.com/",
      linkRepo: "https://github.com/enanesh/cms-styleblog-mvc",
    },
    {
      id: 4,
      src: project4,
      title: "Contact Cards PWA ",
      deploy: "https://cac-pwa-directory-cards.herokuapp.com/",
      linkRepo: "https://github.com/enanesh/pwa-directory-cards",
    },
    {
      id: 5,
      src:project5,
      title: "Code Master Quiz ",
      deploy: "https://enanesh.github.io/code-quiz-js/",
      linkRepo: "https://github.com/enanesh/code-quiz-js",
    },
    {
      id: 6,
      src: project6,
      title: "Weather Dashboard  ",
      deploy: "https://enanesh.github.io/weather-dashboard-js/",
      linkRepo: "https://github.com/enanesh/weather-dashboard-js",
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-14">
          <p className="text-4xl font-bold inline border-b-4 border-purple-500">
            Portfolio
          </p>

          <p className="py-6 text-xl">Check out some of my work right here </p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, title, deploy, linkRepo }) => (
            <div key={id} className="shadow-lg shadow-purple-600 rounded-lg">
              <h1 className="text-2xl text-center p-2 bg-gradient-to-r from-purple-900 to bg-purple-600 rounded-lg">
                {" "}
                {title}
              </h1>
              <img
                src={src}
                alt=" "
                className="rounded-md duration-200 hover:scale-105 "
              />

              <div className="flex item-center justify-center border-r-2  border-purple-500 text-lg ">
                <button className="w-1/2 px-4 m-4  justify-center duration-200 hover:scale-105 hover:bg-pink-500 rounded-md">
                  <a href={deploy}>Deploy</a>
                </button>
                <button className="w-1/2 px-4  m-4 duration-200 hover:scale-105 hover:bg-pink-500 rounded ">
                  <a href={linkRepo}>Github</a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
