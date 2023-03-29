

function ContactForm() {
  

  return (
    <div
      name="contact"
      className="w-full h-screen bg-gradient-to-b from-black to bg-gray-800 p-4 text-white"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full ">
        <div className="pb-8">
          <p className="text-4xl text-white font-bold inline border-b-4 border-purple-500">
            Contact
          </p>
          <p className="py-4 text-xl">
            Submit the form below to get in touch with me.
          </p>
        </div>

        <div className="flex justify-center items-center">

          <form
            action="https://getform.io/f/379bf679-72e2-4135-af3c-1d16899c6d8e"
            method="POST"
            className="flex flex-col w-full md:1/2"
          >
            <p className="text-xl">Name:</p>
            <input
              name="username"
              type="text"
              placeholder="Type your name"
              className="p-2 bg-transparent border-2 rounded-md text-white focus-outline-none"
            />

            <p className="pt-2 text-xl">Email :</p>

            <input
              name="email"
              type="email"
              placeholder="Type your email"
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus-outline-none"
            />

            <p className="text-xl">Message: </p>
            <textarea
              name="message"
              rows="10"
              placeholder="Type your message"
              className="p-2 bg-transparent border-2 rounded-md text-white focus-outline-none"
            />

            <button
              className="text-white w-fit px-6 py-3 my-2 flex items-center  rounded-md bg-gradient-to-r from-purple-800 to-pink-500"
            >
              Submit
            </button>

          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
