import logo from "./logo.svg";
import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello World!</p>
        <Weather />
        This project was coded by Mildred Arizpe and is open sourced
        <a href="https://github.com/MArizpe83">at GitHub</a>
      </header>
    </div>
  );
}

export default App;
