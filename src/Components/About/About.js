import React from "react";
import "../About/About.css";
import image2 from "../Images/image2.jpeg";
import image3 from "../Images/image3.png";

function About() {
  return (
    <body
      className="about"
      style={{
        backgroundImage: `url(${image3})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center 25px",
        backgroundColor: "#0D0106",
      }}
    >
      <div className="about-image">
        <img src={image2} alt="image of luna performance owner"></img>
      </div>
      <div className="about-me">
        <p>
          Luna Performance & Coatings specializes in powder coating of a wide variety of
          products. My products are targeted towards, but not limited to, the
          fellow biker communities. I began this business in 2018 when my son
          was born. I wanted to be able to leave my son something he can grow
          with. I have further knowledge in motorcycle mechanics dating back to
          2015. Here at Luna Performance I strive to bring the less fortunate
          the best possible quality work without making it feel like it's
          financially impossible. I think we've all been down that road before,
          I painted the picture of Luna Performance with the color of giving
          back in mind.
        </p>
      </div>
    </body>
  );
}

export default About;
