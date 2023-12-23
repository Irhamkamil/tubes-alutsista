import React from "react";
import "./styles/App.css";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Logistics from "./components/Logistics";
import Footer from "./components/Footer";

function App() {
  const logHeading = () => {
    return "Our Content";
  };
  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        <h1 class="heading_app1">Sistem Informasi Alutsista</h1>
        <h2 id="heading_app2">PT . TECHNO BAROKAH MANDIRI</h2>
      </header>
      <About />
      <Logistics logHeading={logHeading} />
      <Footer />
    </div>
  );
}

export default App;
