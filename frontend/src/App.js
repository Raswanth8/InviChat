import "./App.css";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar.js";
import Partners from "./components/Partners";
import Features from "./components/Features";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Features />
      <Partners />
      <Contact />
    </div>
  );
}

export default App;
