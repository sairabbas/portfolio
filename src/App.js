import Intro from "./components/Intro"
import NavBar from "./components/NavBar"
import "./App.css";
import "./styles/Global.css";

export default function App() {
  return (
      <div className="App">
          <Intro></Intro>
          <NavBar></NavBar>
      </div>
  )
}

