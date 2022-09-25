import "./App.css";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar.js";
import Features from "./components/Features";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Features />
    </div>
  );
}

export default App;
