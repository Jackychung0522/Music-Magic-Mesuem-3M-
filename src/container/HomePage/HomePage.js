import React from "react";
import { Container } from "reactstrap";
import "./HomePage.css";
import { Link } from "react-router-dom";
import routes from "../../AppRouter";

const HomePage = () => {
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
