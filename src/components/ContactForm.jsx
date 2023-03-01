// import React, { useState }from 'react'
// import { validateEmail } from '../utils/helpers';// validates that the email is correct 


// const ContactForm = () => {

//     const [email, setEmail] = useState('');
//     const [userName, setUserName] = useState('');

//     const handleInputChange = (e) => {
//         // Getting the value and name of the input which triggered the change
//         const { target } = e;
//         const inputType = target.name;
//         const inputValue = target.value;

//         // Based on the input type, we set the state of either email, username, and password
//         if (inputType === 'email') {
//             setEmail(inputValue);
//         } else if (inputType === 'userName') {
//             setUserName(inputValue);
//         }
//     ;

    
//     const handleFormSubmit = (e) => {
//         // Preventing the default behavior of the form submit (which is to refresh the page)
//         e.preventDefault();

//         // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
//         if (!validateEmail(email) || !userName) {
//             setErrorMessage('Email or username is invalid');
//             // We want to exit out of this code block if something is wrong so that the user can correct it
//             return;
//             // Then we check to see if the password is not valid. If so, we set an error message regarding the password.
//         }
    
    
//     }
    
    
// //   return (
// //       <div>
          
// //           <div>
// //               <p>Contact</p>
// //               <p>Submit the form below to get in touch with me </p>
// //           </div>


// //           <div>
// //               <form action="">
// //                   <input></input>
// //               </form>

// //           </div> 


// //     </div>
// //   )
// }

// export default ContactForm