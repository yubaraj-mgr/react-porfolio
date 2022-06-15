import React from "react";
import "./App.css";
import { AboutMe } from "./components/AboutMe";
import { FirstPage } from "./components/FirstPage";
import { Footer } from "./components/Footer";
import { Projects } from "./components/Projects";
import { Skill } from "./components/Skill";
import { Skills } from "./components/Skills";

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
