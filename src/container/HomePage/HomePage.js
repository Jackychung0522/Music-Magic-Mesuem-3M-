import React from "react";
import { Container } from "reactstrap";
import "./HomePage.css";

const HomePage = () => {
  return (
    <Container>
      <div className="homePage">
        <div className="home_center">
          <div className="project_full_name">
            <p>Music-Magic-Museum</p>
          </div>
          <div className="buttons">
            <button className="button_left">Play</button>
            <button className="button_right">Create</button>
          </div>
        </div>
      </div>
    </Container>
  );
};
export default HomePage;
