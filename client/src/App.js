import "./App.css";
import Nav from "./Nav/Nav";
import { ParticleBackground } from "./Particle/ParticleBackground";
import { Route } from "react-router-dom";
import { Projects } from "./Projects/Projects";
import { Resume } from "./Resume/Resume";
import Home from "./Home/Home";
import ContactForm from "./Contact/ContactForm";
import Footer from "./Footer/Footer";
function App() {
  return (
    <div className="background" class="w-screen h-screen ">
      <Nav />
      <Route path="/resume">
        <Resume />
      </Route>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/projects">
        <Projects />
      </Route>
      <Route path="/contact">
        <ContactForm />
      </Route>
      <div className="particle-background">
        <ParticleBackground />
      </div>
      <Footer class="flex justify-center w-screen py-4 bottom-0  items-center" />
    </div>
  );
}

export default App;
