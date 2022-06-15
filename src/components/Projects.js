import React from "react";
import calculator from "../images/calculator.png";
import solarSystem from "../images/solar-system.png";
import travelBlog from "../images/travel-blog.png";

export const Projects = () => {
  return (
    <>
      <div className="projects">
        <h1>My Latest Works</h1>
        <br />
        <br />

        <div className="project">
          <div className="project1 flex-all-project">
            <img
              src={calculator}
              className="first-third-image"
              alt="calculator"
            />
            <div className="project-info">
              <h1>Prank Calculator</h1>
              <div className="git-liveCode">
                <i className="fa-brands fa-github fa-2x"></i>
                <i className="fa-brands fa-chrome fa-2x"></i>
              </div>
              <p>
                Tech Used: HTML, CSS, JavaScript
                <br />
                Lorem ipsum dolor sit amet.
                <br />
                Lorem ipsum dolor <br />
                sit amet consectetur.
                <br />
                Lorem ipsum dolor sit.
                <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
                est recusandae quas optio quia assumenda.
                <br />
              </p>
            </div>
          </div>

          <div className="project2 flex-all-project">
            <img
              src={solarSystem}
              className="first-third-image"
              alt="calculator"
            />
            <div className="project-info">
              <h1>Solar System</h1>
              <div className="git-liveCode">
                <i className="fa-brands fa-github fa-2x"></i>
                <i className="fa-brands fa-chrome fa-2x"></i>
              </div>
              <p>
                Tech Used: HTML, CSS, JavaScript
                <br />
                Lorem ipsum dolor sit amet.
                <br />
                Lorem ipsum dolor <br />
                sit amet consectetur.
                <br />
                Lorem ipsum dolor sit.
                <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
                est recusandae quas optio quia assumenda.
                <br />
              </p>
            </div>
          </div>

          <div className="project3 flex-all-project">
            <img
              src={travelBlog}
              className="first-third-image"
              alt="calculator"
            />
            <div className="project-info">
              <h1>Travel Blog</h1>
              <div className="git-liveCode">
                <i className="fa-brands fa-github fa-2x"></i>
                <i className="fa-brands fa-chrome fa-2x"></i>
              </div>
              <p>
                Tech Used: HTML, CSS, JavaScript
                <br />
                Lorem ipsum dolor sit amet.
                <br />
                Lorem ipsum dolor <br />
                sit amet consectetur.
                <br />
                Lorem ipsum dolor sit.
                <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
                est recusandae quas optio quia assumenda.
                <br />
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
