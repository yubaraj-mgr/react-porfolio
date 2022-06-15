import React from "react";

export const Skill = ({ getSkill }) => {
  const obj = [
    { className: "fa-brands fa-html5 fa-10x", color: "red" },
    { className: "fa-brands fa-css3-alt fa-10x", color: "blue" },
    { className: "fa-brands fa-js-square fa-10x", color: "rgb(216, 216, 7)" },
    { className: "fa-brands fa-react fa-10x", color: "skyblue" },
    { className: "fa-brands fa-node fa-10x", color: "green" },
    { className: "fa-brands fa-figma fa-10x", color: "lightpink" },
    { className: "fa-brands fa-html5 fa-10x", color: "red" },
    { className: "fa-brands fa-css3-alt fa-10x", color: "blue" },
    { className: "fa-brands fa-js-square fa-10x", color: "rgb(216, 216, 7)" },
    { className: "fa-brands fa-react fa-10x", color: "skyblue" },
    { className: "fa-brands fa-node fa-10x", color: "green" },
    { className: "fa-brands fa-figma fa-10x", color: "lightpink" },
    { className: "fa-brands fa-html5 fa-10x", color: "red" },
    { className: "fa-brands fa-css3-alt fa-10x", color: "blue" },
    { className: "fa-brands fa-js-square fa-10x", color: "rgb(216, 216, 7)" },
    { className: "fa-brands fa-react fa-10x", color: "skyblue" },
    { className: "fa-brands fa-node fa-10x", color: "green" },
    { className: "fa-brands fa-figma fa-10x", color: "lightpink" },
    { className: "fa-brands fa-css3-alt fa-10x", color: "blue" },
    { className: "fa-brands fa-js-square fa-10x", color: "rgb(216, 216, 7)" },
    { className: "fa-brands fa-react fa-10x", color: "skyblue" },
    { className: "fa-brands fa-node fa-10x", color: "green" },
    { className: "fa-brands fa-figma fa-10x", color: "lightpink" },
  ];
  getSkill(obj);
  return (
    <>
      <ul className="skill-list">
        {/* <i className="fa-brands fa-html5 fa-10x" style={{ color: "red" }}></i>
        <i
          className="fa-brands fa-css3-alt fa-10x"
          style={{ color: "blue" }}
        ></i>
        <i
          className="fa-brands fa-js-square fa-10x"
          style={{ color: "rgb(216, 216, 7)" }}
        ></i>
        <i
          className="fa-brands fa-react fa-10x"
          style={{ color: "skyblue" }}
        ></i>
        <i className="fa-brands fa-node fa-10x" style={{ color: "green" }}></i>
        <i
          className="fa-brands fa-figma fa-10x"
          style={{ color: "lightpink" }}
        ></i> */}
        {obj.map((eachObj) => {
          return (
            <i
              className={eachObj.className}
              style={{ color: eachObj.color }}
            ></i>
          );
        })}
      </ul>
    </>
  );
};
