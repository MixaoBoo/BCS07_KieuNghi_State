import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";

function App() {
  return (
    <div>
      <Body />
      <div className="overlay"></div>
    </div>
  );
}

export default App;
