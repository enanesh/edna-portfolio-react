import React from 'react'

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen  bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-xl p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p
            className="text-4xl font-bold inline border-b-4
              border-purple-500"
          >
            About
          </p>
        </div>
        <p className="text-xl mt-20">
          Hi there! My name is Edna Gonzalez, and I am a full-stack
          developer based in Seattle, originally from Mexico City. I made the
          decision to switch my career from accounting to pursue my passion for
          coding and web development, which has been both challenging and
          rewarding.
        </p>
        <br />
        <p className="text-xl">
          With my experience in front-end and back-end technologies, I have a
          strong foundation in creating visually appealing and user-friendly
          full-stack applications. I have worked with various technologies,
          including JavaScript, Python, React, Node.js, MySQL, MongoDB, Express,
          GraphQL, and Git. As an avid learner, I am always looking for new
          technologies and programming languages to expand my skill set.
        </p>
        <p className='text-xl mt-4'>
          Being new to the industry, I am eager to collaborate with other
          developers and learn from their experiences. I am thrilled to be a
          part of this ever-growing field and excited to take on new challenges
          and opportunities. I invite you to explore my portfolio to learn more
          about my projects and experience. Thank you for your time, and I look
          forward to hearing from you.
        </p>
      </div>
    </div>
  );
}

export default About