import React from "react";
import "./App.css";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { AboutMe } from "./components/AboutMe";
import { Footer } from "./components/Footer";
import { FirstPage } from "./components/FirstPage";

const App = () => {
  return (
    <>
      <FirstPage />
      <Skills />
      <Projects />
      <AboutMe />
      <Footer />
    </>
  );
};

export default App;
