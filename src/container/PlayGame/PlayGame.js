import React from "react";
import { Container } from "reactstrap";
import "./PlayGame.css";
import * as Tone from "tone";
import { useState, useEffect } from "react";
import db from "../../index";
import bigyellowbee from "../../ spectrum/bigyellowbee.json";
let score = 0;
let currentPoint = 0;
const PlayGame = () => {
  const currentSong = sessionStorage.getItem("currentSong");

  let singlepoint = 0;
  let notes = [];
  let validnote = 0;
  if (currentSong === "Big Yellow Bee") {
    notes = bigyellowbee;
    console.log("notelen:", notes.length);
    for (let i = 0; i < notes.length; i++) {
      if (notes[i].note !== "") {
        validnote++;
      }
      singlepoint = 10000 / validnote;
    }
  }
  useEffect(() => {
    const synth = new Tone.Sampler({
      urls: {
        C3: "C3.mp3",
      },
      release: 1,
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
      const keyPressed = event.key.toUpperCase();
      if (keyPressed === "Q") {
        const block = blocks.find((block) => block.element.id === "blockc3");

        if (block && block.top >= 330 && block.top <= 370) {
          block.isAlive = false;
          playingBlock.removeChild(block.element);
          blocks.splice(blocks.indexOf(block), 1);
          score += singlepoint;
        }
      }
      if (keyPressed === "W") {
        const block = blocks.find((block) => block.element.id === "blockd3");

        if (block && block.top >= 330 && block.top <= 370) {
          block.isAlive = false;
          playingBlock.removeChild(block.element);
          blocks.splice(blocks.indexOf(block), 1);
          score += singlepoint;
        }
      }
      if (keyPressed === "E") {
        const block = blocks.find((block) => block.element.id === "blocke3");

        if (block && block.top >= 330 && block.top <= 370) {
          block.isAlive = false;
          playingBlock.removeChild(block.element);
          blocks.splice(blocks.indexOf(block), 1);
          score += singlepoint;
        }
      }
      if (keyPressed === "R") {
        const block = blocks.find((block) => block.element.id === "blockf3");

        if (block && block.top >= 330 && block.top <= 370) {
          block.isAlive = false;
          playingBlock.removeChild(block.element);
          blocks.splice(blocks.indexOf(block), 1);
          score += singlepoint;
        }
      }
      if (keyPressed === "T") {
        const block = blocks.find((block) => block.element.id === "blockg3");

        if (block && block.top >= 330 && block.top <= 370) {
          block.isAlive = false;
          playingBlock.removeChild(block.element);
          blocks.splice(blocks.indexOf(block), 1);
          score += singlepoint;
        }
      }
      if (keyPressed === "Y") {
        const block = blocks.find((block) => block.element.id === "blocka3");

        if (block && block.top >= 330 && block.top <= 370) {
          block.isAlive = false;
          playingBlock.removeChild(block.element);
          blocks.splice(blocks.indexOf(block), 1);
          score += singlepoint;
        }
      }
      if (keyPressed === "U") {
        const block = blocks.find((block) => block.element.id === "blockb3");

        if (block && block.top >= 330 && block.top <= 370) {
          block.isAlive = false;
          playingBlock.removeChild(block.element);
          blocks.splice(blocks.indexOf(block), 1);
          score += singlepoint;
        }
      }
      if (keyPressed === "C") {
        console.log("C");
        const block = blocks.find((block) => block.element.id === "blockc4");

        if (block && block.top >= 330 && block.top <= 370) {
          block.isAlive = false;
          playingBlock.removeChild(block.element);
          blocks.splice(blocks.indexOf(block), 1);
          score += singlepoint;
        }
      }
      if (keyPressed === "V") {
        const block = blocks.find((block) => block.element.id === "blockd4");

        if (block && block.top >= 330 && block.top <= 370) {
          block.isAlive = false;
          playingBlock.removeChild(block.element);
          blocks.splice(blocks.indexOf(block), 1);
          score += singlepoint;
        }
      }
      if (keyPressed === "B") {
        const block = blocks.find((block) => block.element.id === "blocke4");

        if (block && block.top >= 330 && block.top <= 370) {
          block.isAlive = false;
          playingBlock.removeChild(block.element);
          blocks.splice(blocks.indexOf(block), 1);
          score += singlepoint;
        }
      }
      if (keyPressed === "N") {
        const block = blocks.find((block) => block.element.id === "blockf4");

        if (block && block.top >= 330 && block.top <= 370) {
          block.isAlive = false;
          playingBlock.removeChild(block.element);
          blocks.splice(blocks.indexOf(block), 1);
          score += singlepoint;
        }
      }
      if (keyPressed === "M") {
        const block = blocks.find((block) => block.element.id === "blockg4");

        if (block && block.top >= 330 && block.top <= 370) {
          block.isAlive = false;
          playingBlock.removeChild(block.element);
          blocks.splice(blocks.indexOf(block), 1);
          score += singlepoint;
          console.log(singlepoint);
          console.log(score);
        }
      }
      if (keyPressed === ",") {
        const block = blocks.find((block) => block.element.id === "blocka4");
        console.log(keyPressed);
        if (block && block.top >= 330 && block.top <= 370) {
          block.isAlive = false;
          playingBlock.removeChild(block.element);
          blocks.splice(blocks.indexOf(block), 1);
          score += singlepoint;
        }
      }
      if (keyPressed === ".") {
        const block = blocks.find((block) => block.element.id === "blockb4");
        console.log(keyPressed);
        if (block && block.top >= 330 && block.top <= 370) {
          block.isAlive = false;
          playingBlock.removeChild(block.element);
          blocks.splice(blocks.indexOf(block), 1);
          score += singlepoint;
        }
      }
      if (keyPressed === "/") {
        const block = blocks.find((block) => block.element.id === "blockc5");
        console.log(keyPressed);
        if (block && block.top >= 330 && block.top <= 370) {
          block.isAlive = false;
          playingBlock.removeChild(block.element);
          blocks.splice(blocks.indexOf(block), 1);
          score += singlepoint;
        }
      }
      if (keyPressed === "2") {
        const block = blocks.find((block) => block.element.id === "blockuc3");
        console.log(keyPressed);
        if (block && block.top >= 330 && block.top <= 370) {
          block.isAlive = false;
          playingBlock.removeChild(block.element);
          blocks.splice(blocks.indexOf(block), 1);
          score += singlepoint;
        }
      }
      if (keyPressed === "3") {
        const block = blocks.find((block) => block.element.id === "blockud3");
        console.log(keyPressed);
        if (block && block.top >= 330 && block.top <= 370) {
          block.isAlive = false;
          playingBlock.removeChild(block.element);
          blocks.splice(blocks.indexOf(block), 1);
          score += singlepoint;
        }
      }
      if (keyPressed === "5") {
        const block = blocks.find((block) => block.element.id === "blockuf3");
        console.log(keyPressed);
        if (block && block.top >= 330 && block.top <= 370) {
          block.isAlive = false;
          playingBlock.removeChild(block.element);
          blocks.splice(blocks.indexOf(block), 1);
          score += singlepoint;
        }
      }
      if (keyPressed === "6") {
        const block = blocks.find((block) => block.element.id === "blockug3");
        console.log(keyPressed);
        if (block && block.top >= 330 && block.top <= 370) {
          block.isAlive = false;
          playingBlock.removeChild(block.element);
          blocks.splice(blocks.indexOf(block), 1);
          score += singlepoint;
        }
      }
      if (keyPressed === "7") {
        const block = blocks.find((block) => block.element.id === "blockua3");
        console.log(keyPressed);
        if (block && block.top >= 330 && block.top <= 370) {
          block.isAlive = false;
          playingBlock.removeChild(block.element);
          blocks.splice(blocks.indexOf(block), 1);
          score += singlepoint;
        }
      }
      if (keyPressed === "F") {
        const block = blocks.find((block) => block.element.id === "blockuc4");
        console.log(keyPressed);
        if (block && block.top >= 330 && block.top <= 370) {
          block.isAlive = false;
          playingBlock.removeChild(block.element);
          blocks.splice(blocks.indexOf(block), 1);
          score += singlepoint;
        }
      }
      if (keyPressed === "G") {
        const block = blocks.find((block) => block.element.id === "blockud4");
        console.log(keyPressed);
        if (block && block.top >= 330 && block.top <= 370) {
          block.isAlive = false;
          playingBlock.removeChild(block.element);
          blocks.splice(blocks.indexOf(block), 1);
          score += singlepoint;
        }
      }
      if (keyPressed === "J") {
        const block = blocks.find((block) => block.element.id === "blockuf4");
        console.log(keyPressed);
        if (block && block.top >= 330 && block.top <= 370) {
          block.isAlive = false;
          playingBlock.removeChild(block.element);
          blocks.splice(blocks.indexOf(block), 1);
          score += singlepoint;
        }
      }
      if (keyPressed === "K") {
        const block = blocks.find((block) => block.element.id === "blockug4");
        console.log(keyPressed);
        if (block && block.top >= 330 && block.top <= 370) {
          block.isAlive = false;
          playingBlock.removeChild(block.element);
          blocks.splice(blocks.indexOf(block), 1);
          score += singlepoint;
        }
      }
      if (keyPressed === "L") {
        const block = blocks.find((block) => block.element.id === "blockua4");
        console.log(keyPressed);
        if (block && block.top >= 330 && block.top <= 370) {
          block.isAlive = false;
          container.removeChild(block.element);
          blocks.splice(blocks.indexOf(block), 1);
          score += singlepoint;
        }
      }
    };
    const container = document.getElementById("container");
    const playingBlock = document.querySelector(".playingBlock");
    const blocks = [];
    let currentIndex = 0;
    // 创建方块函数
    const createBlock = (note) => {
      // 创建新方块元素
      const block = document.createElement("div");
      block.className = "block";
      currentPoint++;
      console.log(currentPoint);
      if (note === "C3") {
        block.id = "blockc3";
      } else if (note === "D3") {
        block.id = "blockd3";
      } else if (note === "E3") {
        block.id = "blocke3";
      } else if (note === "F3") {
        block.id = "blockf3";
      } else if (note === "G3") {
        block.id = "blockg3";
      } else if (note === "A3") {
        block.id = "blocka3";
      } else if (note === "B3") {
        block.id = "blockb3";
      } else if (note === "C4") {
        block.id = "blockc4";
      } else if (note === "D4") {
        block.id = "blockd4";
      } else if (note === "E4") {
        block.id = "blocke4";
      } else if (note === "F4") {
        block.id = "blockf4";
      } else if (note === "G4") {
        block.id = "blockg4";
      } else if (note === "A4") {
        block.id = "blocka4";
      } else if (note === "B4") {
        block.id = "blockb4";
      } else if (note === "C5") {
        block.id = "blockc5";
      } else if (note === "C#3") {
        block.id = "blockuc3";
      } else if (note === "D#3") {
        block.id = "blockud3";
      } else if (note === "F#3") {
        block.id = "blockuf3";
      } else if (note === "G#3") {
        block.id = "blockug3";
      } else if (note === "A#3") {
        block.id = "blockua3";
      } else if (note === "C#4") {
        block.id = "blockuc4";
      } else if (note === "D#4") {
        block.id = "blockud4";
      } else if (note === "F#4") {
        block.id = "blockuf4";
      } else if (note === "G#4") {
        block.id = "blockug4";
      } else if (note === "A#4") {
        block.id = "blockua4";
      }
      if (note !== "") {
        playingBlock.appendChild(block);
        blocks.push({
          element: block,
          top: 0,
          isAlive: true,
        });
      }
    };

    const animate = () => {
      let droppedBlocks = 0;
      for (let i = 0; i < blocks.length; i++) {
        const block = blocks[i];
        if (block.isAlive) {
          block.top += 2;
          block.element.style.top = block.top + "px";

          if (block.top >= 400) {
            // 将方块从数组和容器中移除
            block.isAlive = false;
            playingBlock.removeChild(block.element);
            blocks.splice(i, 1);
            i--;
          }
        }
      }

      requestAnimationFrame(animate);
    };

    // 设置方块的初始位置

    window.addEventListener("keydown", handleKeyDown);

    const loadNotes = (notes) => {
      setInterval(() => {
        if (currentIndex < notes.length) {
          createBlock(notes[currentIndex].note);
          currentIndex++;
        }
        if (currentIndex === notes.length - 1) {
          // 在最后一个方块创建后的五秒钟后显示成绩
          setTimeout(() => {
            const scoreDisplay = document.createElement("p");
            scoreDisplay.textContent = `Score: ${score}`;
            playingBlock.appendChild(scoreDisplay);
            console.log("Score:", score);
          }, 5000);
        }
      }, 1000);
    };
    loadNotes(notes);

    animate();
  }, []);

  // 启动动画

  return (
    <Container>
      <p className="test"> {score}</p>
      <div className="playingBlockBlock">
        <div className="playingBlock">
          <div id="container"></div>
        </div>
      </div>
      <div className="receivingareaBlock">
        <div className="receivingarea"></div>
      </div>
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
