import "./App.css";
import Navbar from "./Navbar";
import Home from "./Home";
import Contact from "./Contact";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
      </div>
    </div>
  );
}

export default App;