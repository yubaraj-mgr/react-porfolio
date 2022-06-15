import React from "react";
import myImage from "../images/myImage.png";

export const AboutMe = () => {
  return (
    <>
      <div className="about-me">
        <img src={myImage} alt="myImage" />
        <div className="my-info">
          <h1>About Me</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            fugiat hic libero saepe ex expedita totam perspiciatis! Perspiciatis
            repellendus vel dolore excepturi harum, itaque ratione tenetur ab
            deserunt hic dolores.
            <br />
            <br />
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non
            impedit molestias maxime unde autem
          </p>
        </div>
      </div>
    </>
  );
};
