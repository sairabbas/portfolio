import Intro from "./components/Intro"
import About from "./components/About"
import NavBar from "./components/NavBar"
import Credits from "./components/Credits"
import "./App.css";
import "./styles/Global.css";

export default function App() {
  return (
      <div className="App">
          <Intro/>
          <About/>
          <NavBar/>
          <Credits/>
      </div>
  )
}

