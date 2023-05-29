import React from "react";
import { Container } from "reactstrap";
import "./HomePage.css";
import piano_image from "../../image/piano.jpg";

const HomePage = () => {
  return (
    <Container>
      <div className="homePage">
        <img src={piano_image} alt=""></img>
      </div>
      ;
    </Container>
  );
};
export default HomePage;
