/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that 
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
import image from "../images/2.jpeg";

const imageAltText = "space";

/**
 * Sort description that expands on your title on the Home component.
 */
const description = [
  "Hey! I am Marilyn Haber, a driven software developer with a passion for technology!",
  "💻 I kick-started my career as a .NET developer, while still an undergraduate computer science student.",
  "🚢 Currently, I am crafting impactful solutions to enhance innovation and efficiency in the freight management industry.",
  "🚀 I have a growth mindset and always seek new opportunities to expand my skills and make a difference in the world!",
  "👂 My experience in retail helped me develop my communication skills and learn the importance of actively listening to clients.",
  "✨As a Facilitator of the Google Developers Student Clubs in Lebanon, my mission is to empower students and help them embark on their own tech journeys!",
  "🎓I decided to pursue me education and get my masters degree. And here I am, a Microsoft Student Learn Ambassador at the Lebanese University!",
];

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = ["Web design", "User experience", "Inclusive design", "Focus group testing"];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detail = "One of the quotes that I love 💫";
const quote =
  '"People who are crazy enough to think they can change the world, are the ones who do"';
const author = "- Rob Siltanen";

const About = () => (
  <section className="padding" id="about">
    <img className="background" src={image} alt={imageAltText} />
    <div
      style={{
        backgroundColor: "white",
        width: "50%",
        padding: "4rem",
        margin: "3rem auto",
        textAlign: "center",
      }}
    >
      <h2>About Me!</h2>
      <div
        style={{
          backgroundColor: "white",
          width: "90%",
          padding: "1rem 3rem 0",
          textAlign: "left",
        }}
      >
        {description.map((line) => (
          <p key={line}>{line}</p>
        ))}
      </div>
      <hr />
      <ul
        style={{
          textAlign: "left",
          columns: 2,
          fontSize: "1.25rem",
          margin: "2rem 3rem",
          gap: "3rem",
        }}
      >
        {skillsList.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
      <hr />
      <p style={{ padding: "1rem 3rem 0" }}>{detail}</p>
      <center>
        <p style={{ width: "50%" }}>
          <b>{quote}</b>
        </p>
      </center>
      <p style={{ padding: "1rem 3rem 0" }}>{author}</p>
    </div>
  </section>
);

export default About;
