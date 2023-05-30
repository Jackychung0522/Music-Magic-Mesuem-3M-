import React from "react";
import { Container } from "reactstrap";
import "./SelectSong.css";

const  SelectSong= () => {
  return (
    <Container>
      <p id="selectsong">
      <span role="img" aria-label="fire">🔥</span> Select Song
      </p>
    </Container>
  );
};
export default  SelectSong;