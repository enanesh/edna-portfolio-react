
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import SocialLinks from "./components/SocialLinks";
import About from "./components/About"
import Portfolio from "./components/Portfolio";
import Experience from "./components/Experience";
// import ContactForm from "./components/ContactForm";


function App() {

  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Portfolio />
      <SocialLinks />
      <Experience />
      {/* <ContactForm /> */}
      

    </div>
  );
}

export default App;
