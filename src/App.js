import "./App.css";
import About from "./components'/About.js";
import Header from "./components'/Header.js";
import Hero from "./components'/Hero.js";
import Project from "./components'/Projects.js";
import Resume from "./components'/Resume.js";

let role = "";

if(role == ""){
  role="(Web Developer)"
}

function App() {
  return (
    <section>
      <Header />
      <Hero role={role} />
      <About />
      <Project />
      <Resume />
    </section>
  );
}

export default App;
