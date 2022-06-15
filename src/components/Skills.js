import React from "react";
import { Skill } from "./Skill";

export const Skills = () => {
  const getSkill = (skill) => {
    console.log(skill);
  };
  return (
    <>
      <div className="skills">
        <h1>Skills</h1>
        <br />
        <br />
        <Skill getSkill={getSkill} />
      </div>
    </>
  );
};
