import React from "react";
import { Container } from "reactstrap";
import "./PlayGame.css";

const  PlayGame= () => {
  return (
    <Container>
        <div className="pianoBlock">
            <button className="white" id='Q'>
                <span className="buttonText">Q</span>
            </button>
            <button className="white" id='W'>
                <span className="buttonText">W</span>
            </button>
            <button className="white" id='E'>
                <span className="buttonText">E</span>
            </button>
            <button className="white" id='R'>
                <span className="buttonText">R</span>
            </button>
            <button className="white" id='T'>
                <span className="buttonText">T</span>
            </button>
            <button className="white" id='Y'>
                <span className="buttonText">Y</span>
            </button>
            <button className="white" id='U'>
                <span className="buttonText">U</span>
            </button>
            <button className="white" id='C'>
                <span className="buttonText">C</span>
            </button>
            <button className="white" id='V'>
                <span className="buttonText">V</span>
            </button>
            <button className="white" id='B'>
                <span className="buttonText">B</span>
            </button>
            <button className="white" id='N'>
                <span className="buttonText">N</span>
            </button>
            <button className="white" id='M'>
                <span className="buttonText">M</span>
            </button>
            <button className="white" id=','>
                <span className="buttonText">,</span>
            </button>
            <button className="white" id='.'>
                <span className="buttonText">.</span>
            </button>
            <button className="white" id='/'>
                <span className="buttonText">/</span>
            </button>
            <button className="white" id='/'>
                <span className="buttonText">/</span>
            </button>
            
        </div>
    </Container>
  );
};
export default  PlayGame;