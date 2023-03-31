import React from "react";
import project1 from "../assets/portfolio/project1.jpg";
import project2 from "../assets/portfolio/project2.jpg";
import project3 from "../assets/portfolio/project3.png";
import project6 from "../assets/portfolio/project6.png";
import project5 from "../assets/portfolio/project5.png";
import project7 from "../assets/portfolio/project7.png";


const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: project1,
      title: "Dinner and Drinks ",
      description:
        "With this application, users can find a recipe for a meal and a drink all on the same web page.",
      deploy: "https://enanesh.github.io/dinner-and-drinks/",
      linkRepo: "https://github.com/enanesh/dinner-and-drinks",
    },
    {
      id: 2,
      src: project2,
      title: "Hotel California App",
      description:
        "Hotel website offers convenient check-in/check-out, easy reservation making, and an admin mode.",
      deploy: "https://hotel-california24.herokuapp.com/",
      linkRepo: "https://github.com/enanesh/hotel-california-app",
    },
    {
      id: 3,
      src: project7,
      title: "QUIZMAKER ",
      description:
        "Create and test your knowledge with quizmaker. Build and take quizzes on any subject!",
      deploy: "https://quizmaker-app1.herokuapp.com/",
      linkRepo: "https://github.com/enanesh/quizmaker",
    },

    {
      id: 4,
      src: project3,
      title: "TechGirl Ideas Blog ",
      description:
        "A vibrant online community for women passionate about tech, to exchange ideas.",

      deploy: "https://techgirls-ideas-blog.herokuapp.com/",
      linkRepo: "https://github.com/enanesh/techGirls-ideas-blog",
    },

    {
      id: 5,
      src: project5,
      description:
        "CodeMaster app is a fast-paced timed quiz to test your coding skills and knowledge.",
      title: "Code Master Quiz ",
      deploy: "https://enanesh.github.io/code-quiz-js/",
      linkRepo: "https://github.com/enanesh/code-quiz-js",
    },

    {
      id: 6,
      src: project6,
      description:
        "Your one-stop solution for real-time weather updates and personalized forecasts on-the-go.",
      title: "Weather Dashboard ",
      deploy: "https://enanesh.github.io/weather-dashboard-js/",
      linkRepo: "https://github.com/enanesh/weather-dashboard-js",
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white "
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-14">
          <p className="text-4xl font-bold inline border-b-4 border-purple-500">
            Portfolio
          </p>

          <p className="py-6 text-xl">Check out some of my work right here </p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(
            ({ id, src, title, deploy, linkRepo, description }) => (
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
                <div
                  key={id}
                  className="flex item-center justify-center p-4  border-purple-500 border-b-2  "
                >
                  <p className="justify-center "> {description}</p>
                </div>

                <div className="flex item-center justify-center border-r-2  border-purple-500 text-lg ">
                  <button className="w-1/2 px-4 m-4  justify-center  border-purple-500  border-r-2 duration-200 hover:scale-105 hover:bg-pink-500  ">
                    <a href={deploy}>DEMO</a>
                  </button>
                  <button className="w-1/2 px-4  m-4 duration-200 hover:scale-105 hover:bg-pink-500 rounded ">
                    <a href={linkRepo}>CODE</a>
                  </button>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
