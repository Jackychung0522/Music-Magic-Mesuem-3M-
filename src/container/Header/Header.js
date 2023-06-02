import React from "react";
import { Container } from "reactstrap";
import { Link } from "react-router-dom";
import "./Header.css";
import routes from "../../AppRouter";
import logo from "../../image/logo.png";
import buttonSound from "../../mp3/clickButtonSound.mp3";
const Header = () => {
  const playButtonSound = () => {
    const audio = new Audio(buttonSound);
    audio.play();
    audio.volume = 0.5;
  };
  const buttons = document.querySelectorAll("button");
  buttons.forEach((button) => {
    button.addEventListener("click", playButtonSound);
  });
  return (
    <Container>
      <header className="header">
        <nav className="navigation">
          <button className="btn3m" id="M3">
            <Link to={routes.home}>
              <img src={logo} alt="" />
            </Link>
          </button>

          <button className="btn">
            <Link to={routes.createyourself} className="link">
              Create By Yourself
            </Link>
          </button>
          <button className="btn">
            <Link to={routes.selectsong} className="link">
              Play a Game
            </Link>
          </button>
        </nav>
      </header>
    </Container>
  );
};
export default Header;
