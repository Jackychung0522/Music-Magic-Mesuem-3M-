import React from "react";
import { Container } from "reactstrap";
import "./Header.css";
import m3 from  "../../image/3M.jpg"
const Header = () => {
  return (
    <Container>
       <header className="header">
      <nav className="navigation">
        <button className="btn" id="M3"> <img src={m3}/></button>
        <button className="btn">Create By Yourself</button>
        <button className="btn">Play</button>
      </nav>
    </header>
    </Container>
  );
};
export default Header;
