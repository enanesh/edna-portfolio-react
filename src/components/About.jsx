import React from 'react'

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
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
          Hi there! My name is Edna Gonalez, and I'm a full-stack developer who
          was born and raised in Mexico City. Recently, I made the decision to
          switch career paths from accounting to pursue my passion for coding
          and web development. This decision has been both challenging and
          rewarding, and I'm excited to share my journey with you.
        </p>
        <br />
        <p className="text-xl">
          As a full-stack developer, I have experience with both front-end and
          back-end technologies. I enjoy creating visually appealing and
          user-friendly interfaces using HTML, CSS, and JavaScript, and I also
          have experience working with various back-end technologies such as
          Node.js and Python. I'm always eager to learn new technologies and
          programming languages to further expand my skill set. As someone who
          is new to the industry, I'm constantly seeking out opportunities to
          learn from and collaborate with other developers. I'm excited to be a
          part of this ever-growing field and look forward to the new challenges
          and opportunities that lie ahead.
        </p>
      </div>
    </div>
  );
}

export default About