import React from "react";
import { Intro } from "./Intro";
import { Nav } from "./Nav";

export const FirstPage = () => {
  return (
    <div className="first-page">
      <Nav />
      <Intro />
    </div>
  );
};
