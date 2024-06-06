import React from "react";
import "./aboutSection.css";
import { Typography } from "@material-ui/core";

const About = () => {
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div>
          <div className="founderSection">
            <Typography component="h2">Suraj Od </Typography>
            <Typography>Frontend Developer</Typography>
            <Typography component="h3">Description</Typography>
            <center> Hy, I am skilled in frontend development, including HTML, CSS, JavaScript, and ReactJs. And also have expertise in C++ programming language, Data Structures and Algorithms, data analysis, and possess basic knowledge of AWS.</center>
          </div>

          <div className="founderSection">
            <Typography component="h2">Harsh Joshi </Typography>
            <Typography>UI/UX & Payment Integration </Typography>
            <Typography component="h3">Description</Typography>
            <center> Hy,  I am skilled in UI/UX Design and Animation and also help in this project payment integration and prepare documentation and research analysis for this Ecommerce project.</center>
           
          </div>

          <div className="founderSection">
            <Typography component="h2">Pranjal Mishra</Typography>
            <Typography>Backend Development</Typography>
            <Typography component="h3">Description</Typography>
            <center> Hy, I am skilled in backend development and api integration and also help in this project for backend setup and write APi logic.</center>
          </div>

          <div className="founderSection">
            <Typography component="h2">Sunil Kumar </Typography>
            <Typography>Database Management</Typography>
            <Typography component="h3">Description</Typography>
            <center> Hy, I am skilled in database management with the help of these technology MySql,MongoDb and in this project I contribute with the help of MongoDb and also implement the dashboard of admin to track the records. </center>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
