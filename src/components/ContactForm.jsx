// Here we import a helper function that will check if the email is valid
import { validateEmail } from "../utils/helpers";
import { useState, useRef, useEffect } from "react";

function ContactForm() {
  // Create state variables for the fields in the form
  // We are also setting their initial values to an empty string
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [message, setMessage] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const inputRef = useRef(null);

  //Handles the event when the mouse is out of the textbox

  const handleBlur = (event) => {
    if (!message) {
      setShowAlert(true);
    }
    if (inputRef.current && !inputRef.current.contains(event.target)) {
      setShowAlert(false);
    }
  };

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, username, and password
    if (inputType === "email") {
      setEmail(inputValue);
    } else if (inputType === "userName") {
      setUserName(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
    if (!validateEmail(email) || !userName) {
      setErrorMessage("Enter a valid email e.g: email@email.com");
      // We want to exit out of this code block if something is wrong so that the user can correct it
      return;
    }
    if (!message)
      // If everything goes according to plan, we want to clear out the input after a successful registration.
      setUserName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div
      name="contact"
      className="w-full h-screen bg-gradient-to-b from-black to bg-gray-800 p-4 text-white"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full ">
        <div className="pb-8">
          <p className="text-4xl text-white font-bold inline border-b-4 border-purple-500">
            Contact{" "}
          </p>
          <p className="py-4 text-xl">
            {" "}
            Submit the form below to get in touch with me.
          </p>
        </div>

        <div className="flex justify-center items-center">
          <form
            action="https://getform.io/f/6d94ecd1-b25a-46a8-9368-7a8fb8c6b31e"
            className="flex flex-col w-full md:1/2"
          >
            <p className="text-xl">Name:</p>
            <input
              value={userName}
              name="userName"
              onChange={handleInputChange}
              type="text"
              placeholder="Type your name"
              className="p-2 bg-transparent border-2 rounded-md text-white focus-outline-none"
            />

            <p className="pt-2 text-xl">Email :</p>

            <input
              value={email}
              name="email"
              onChange={handleInputChange}
              type="email"
              placeholder="Type your email"
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus-outline-none"
            />
            {errorMessage && (
              <div>
                <p className="error-text py-2 bg-pink-500 rounded">
                  {errorMessage}
                </p>
              </div>
            )}

            <p className="text-xl">Message: </p>
            <textarea
              value={message}
              name="message"
              rows="10"
              placeholder="Type your message"
              onChange={(e) => setMessage(e.target.value)}
              onMouseOut={handleBlur}
              ref={inputRef}
              className="p-2 bg-transparent border-2 rounded-md text-white focus-outline-none"
            />
            
            {showAlert && (
              <div className="py-2 bg-pink-500 rounded">
                Please enter a value!
              </div>
            )}

            <button
              type="button"
              onClick={handleFormSubmit}
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
