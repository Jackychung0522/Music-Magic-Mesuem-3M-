import React from "react";
import { Container } from "reactstrap";
import "./PlayGame.css";
import * as Tone from "tone";
import { useEffect } from "react";
const PlayGame = () => {
  useEffect(() => {
    const synth = new Tone.Sampler({
      urls: {
        C3: "C3.mp3",
      },
      // release: 1,
      baseUrl: "https://tonejs.github.io/audio/salamander/",
    }).toDestination();

    const handleButtonC3Click = () => {
      synth.triggerAttackRelease("C3", "4n");
    };
    const handleButtonD3Click = () => {
      synth.triggerAttackRelease("D3", "4n");
    };
    const handleButtonE3Click = () => {
      synth.triggerAttackRelease("E3", "4n");
    };
    const handleButtonF3Click = () => {
      synth.triggerAttackRelease("F3", "4n");
    };
    const handleButtonG3Click = () => {
      synth.triggerAttackRelease("G3", "4n");
    };
    const handleButtonA3Click = () => {
      synth.triggerAttackRelease("A3", "4n");
    };
    const handleButtonB3Click = () => {
      synth.triggerAttackRelease("B3", "4n");
    };
    const handleButtonC4Click = () => {
      synth.triggerAttackRelease("C4", "4n");
    };
    const handleButtonD4Click = () => {
      synth.triggerAttackRelease("D4", "4n");
    };
    const handleButtonE4Click = () => {
      synth.triggerAttackRelease("E4", "4n");
    };
    const handleButtonF4Click = () => {
      synth.triggerAttackRelease("F4", "4n");
    };
    const handleButtonG4Click = () => {
      synth.triggerAttackRelease("G4", "4n");
    };
    const handleButtonA4Click = () => {
      synth.triggerAttackRelease("A4", "4n");
    };
    const handleButtonB4Click = () => {
      synth.triggerAttackRelease("B4", "4n");
    };
    const handleButtonC5Click = () => {
      synth.triggerAttackRelease("C5", "4n");
    };
    const handleButtonDoClick = () => {
      synth.triggerAttackRelease("C#3", "4n");
    };
    const handleButtonReClick = () => {
      synth.triggerAttackRelease("D#3'", "4n");
    };
    const handleButtonFaClick = () => {
      synth.triggerAttackRelease("F#3'", "4n");
    };

    const handleButtonSoClick = () => {
      synth.triggerAttackRelease("G#3", "4n");
    };
    const handleButtonLaClick = () => {
      synth.triggerAttackRelease("A#3", "4n");
    };
    const handleButtonMDoClick = () => {
      synth.triggerAttackRelease("C#4", "4n");
    };
    const handleButtonMReClick = () => {
      synth.triggerAttackRelease("D#4", "4n");
    };
    const handleButtonMFaClick = () => {
      synth.triggerAttackRelease("F#4", "4n");
    };
    const handleButtonMSoClick = () => {
      synth.triggerAttackRelease("G#4", "4n");
    };
    const handleButtonMLaClick = () => {
      synth.triggerAttackRelease("A#4", "4n");
    };

    const buttons = document.getElementsByClassName("white");
    buttons[0].addEventListener("mousedown", handleButtonC3Click);
    buttons[1].addEventListener("mousedown", handleButtonD3Click);
    buttons[2].addEventListener("mousedown", handleButtonE3Click);
    buttons[3].addEventListener("mousedown", handleButtonF3Click);
    buttons[4].addEventListener("mousedown", handleButtonG3Click);
    buttons[5].addEventListener("mousedown", handleButtonA3Click);
    buttons[6].addEventListener("mousedown", handleButtonB3Click);
    buttons[7].addEventListener("mousedown", handleButtonC4Click);
    buttons[8].addEventListener("mousedown", handleButtonD4Click);
    buttons[9].addEventListener("mousedown", handleButtonE4Click);
    buttons[10].addEventListener("mousedown", handleButtonF4Click);
    buttons[11].addEventListener("mousedown", handleButtonG4Click);
    buttons[12].addEventListener("mousedown", handleButtonA4Click);
    buttons[13].addEventListener("mousedown", handleButtonB4Click);
    buttons[14].addEventListener("mousedown", handleButtonC5Click);

    const buttons2 = document.getElementsByClassName("black");
    buttons2[0].addEventListener("mousedown", handleButtonDoClick);
    buttons2[1].addEventListener("mousedown", handleButtonReClick);
    buttons2[2].addEventListener("mousedown", handleButtonFaClick);
    buttons2[3].addEventListener("mousedown", handleButtonSoClick);
    buttons2[4].addEventListener("mousedown", handleButtonLaClick);
    buttons2[5].addEventListener("mousedown", handleButtonMDoClick);
    buttons2[6].addEventListener("mousedown", handleButtonMReClick);
    buttons2[7].addEventListener("mousedown", handleButtonMFaClick);
    buttons2[8].addEventListener("mousedown", handleButtonMSoClick);
    buttons2[9].addEventListener("mousedown", handleButtonMLaClick);

    const handleKeyDown = (event) => {
      if (event.code === "KeyQ") {
        synth.triggerAttackRelease("C3", "4n");
      } else if (event.code === "KeyW") {
        synth.triggerAttackRelease("D3", "4n");
      } else if (event.code === "KeyE") {
        synth.triggerAttackRelease("E3", "4n");
      } else if (event.code === "KeyR") {
        synth.triggerAttackRelease("F3", "4n");
      } else if (event.code === "KeyT") {
        synth.triggerAttackRelease("G3", "4n");
      } else if (event.code === "KeyY") {
        synth.triggerAttackRelease("A3", "4n");
      } else if (event.code === "KeyU") {
        synth.triggerAttackRelease("B3", "4n");
      } else if (event.code === "KeyC") {
        synth.triggerAttackRelease("C4", "4n");
      } else if (event.code === "KeyV") {
        synth.triggerAttackRelease("D4", "4n");
      } else if (event.code === "KeyB") {
        synth.triggerAttackRelease("E4", "4n");
      } else if (event.code === "KeyN") {
        synth.triggerAttackRelease("F4", "4n");
      } else if (event.code === "KeyM") {
        synth.triggerAttackRelease("G4", "4n");
      } else if (event.code === "Comma") {
        synth.triggerAttackRelease("A4", "4n");
      } else if (event.code === "Period") {
        synth.triggerAttackRelease("B4", "4n");
      } else if (event.code === "Slash") {
        synth.triggerAttackRelease("C5", "4n");
      } else if (event.code === "Digit2") {
        synth.triggerAttackRelease("C#3", "4n");
      } else if (event.code === "Digit3") {
        synth.triggerAttackRelease("D#3'", "4n");
      } else if (event.code === "Digit5") {
        synth.triggerAttackRelease("F#3'", "4n");
      } else if (event.code === "Digit6") {
        synth.triggerAttackRelease("G#3", "4n");
      } else if (event.code === "Digit7") {
        synth.triggerAttackRelease("A#3", "4n");
      } else if (event.code === "KeyF") {
        synth.triggerAttackRelease("C#4", "4n");
      } else if (event.code === "KeyG") {
        synth.triggerAttackRelease("D#4", "4n");
      } else if (event.code === "KeyJ") {
        synth.triggerAttackRelease("F#4", "4n");
      } else if (event.code === "KeyK") {
        synth.triggerAttackRelease("G#4", "4n");
      } else if (event.code === "KeyL") {
        synth.triggerAttackRelease("A#4", "4n");
      }
    };

    window.addEventListener("keydown", handleKeyDown);
  }, []);
  return (
    <Container>
      <div className="pianoBlock">
        <div className="pianoBlockForBlack">
          <button className="black blackType1" id="b2">
            <span className="blackButtonText">2</span>
          </button>
          <button className="black blackType2" id="b3">
            <span className="blackButtonText">3</span>
          </button>
          <button className="black blackType3" id="b5">
            <span className="blackButtonText">5</span>
          </button>
          <button className="black blackType1" id="b6">
            <span className="blackButtonText">6</span>
          </button>
          <button className="black blackType2" id="b7">
            <span className="blackButtonText">7</span>
          </button>
          <button className="black blackType3" id="bF">
            <span className="blackButtonText">F</span>
          </button>
          <button className="black blackType2" id="bG">
            <span className="blackButtonText">G</span>
          </button>
          <button className="black blackType3" id="bJ">
            <span className="blackButtonText">J</span>
          </button>
          <button className="black blackType1" id="bK">
            <span className="blackButtonText">K</span>
          </button>
          <button className="black blackType1" id="bL">
            <span className="blackButtonText">L</span>
          </button>
        </div>
        <div className="pianoBlockForWhite">
          <button className="white" id="Q">
            <span className="buttonText">Q</span>
          </button>
          <button className="white" id="W">
            <span className="buttonText">W</span>
          </button>
          <button className="white" id="E">
            <span className="buttonText">E</span>
          </button>
          <button className="white" id="R">
            <span className="buttonText">R</span>
          </button>
          <button className="white" id="T">
            <span className="buttonText">T</span>
          </button>
          <button className="white" id="Y">
            <span className="buttonText">Y</span>
          </button>
          <button className="white" id="U">
            <span className="buttonText">U</span>
          </button>
          <button className="white" id="C">
            <span className="buttonText">C</span>
          </button>
          <button className="white" id="V">
            <span className="buttonText">V</span>
          </button>
          <button className="white" id="B">
            <span className="buttonText">B</span>
          </button>
          <button className="white" id="N">
            <span className="buttonText">N</span>
          </button>
          <button className="white" id="M">
            <span className="buttonText">M</span>
          </button>
          <button className="white" id=",">
            <span className="buttonText">,</span>
          </button>
          <button className="white" id=".">
            <span className="buttonText">.</span>
          </button>
          <button className="white" id="/">
            <span className="buttonText">/</span>
          </button>
        </div>
      </div>
    </Container>
  );
};
export default PlayGame;
