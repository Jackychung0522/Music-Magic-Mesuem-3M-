import React from "react";
import { Container } from "reactstrap";
import "./HomePage.css";
import { Link } from "react-router-dom";
import routes from "../../AppRouter";
import buttonSound from "../../mp3/clickButtonSound.mp3";
const HomePage = () => {
  const playButtonSound = () => {
    const audio = new Audio(buttonSound);
    audio.play();
    audio.volume = 0.1;
  };
  const buttons = document.querySelectorAll("button");
  buttons.forEach((button) => {
    button.addEventListener("click", playButtonSound);
  });
  return (
    <Container>
      <div className="homePage">
        <div className="home_center">
          <div className="project_full_name">
            <p>Music-Magic-Museum</p>
          </div>
          <div className="buttons">
            <Link to={routes.createyourself} className="link">
              <button className="button_left">Create Now</button>
            </Link>
            <Link to={routes.selectsong} className="link">
              <button className="button_right">Play Now</button>
            </Link>
          </div>
        </div>
      </div>
    </Container>
  );
};
export default HomePage;
