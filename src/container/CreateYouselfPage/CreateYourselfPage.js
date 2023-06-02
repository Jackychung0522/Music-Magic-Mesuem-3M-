import React from "react";
import { useState, useEffect } from "react";
import { Container } from "reactstrap";
import "./CreateYourselfPage.css";
import * as Tone from "tone";
import tempoRun from "../../image/tempoRun.png";
import { Player } from "tone";
import tempoNoise from "../../mp3/1111.mp3";
import record from "../../image/record.png";

const CreateYourselfPage = () => {
  // let pu = [];
  const sound = new Player({
    url: tempoNoise,
  }).toDestination();
  const buttons = document.getElementsByClassName("white");
  const buttons2 = document.getElementsByClassName("black");
  async function handleTempoChange(event) {
    const range = document.getElementById("bpmInput");
    const tempoNum = document.getElementById("tempoNumber");
    range.addEventListener("input", () => {
      range.value = event.target.value;
      tempoNum.innerHTML = event.target.value + "bpm";
    });
  }
  const handleTempoMin = () => {
    const range = document.getElementById("bpmInput");
    const tempoNum = document.getElementById("tempoNumber");
    if (range.value > 30) {
      range.value = parseInt(range.value) - 1;
      tempoNum.innerHTML = parseInt(range.value) + "bpm";
    }
  };
  const handleTempoPlus = () => {
    const range = document.getElementById("bpmInput");
    const tempoNum = document.getElementById("tempoNumber");
    if (range.value < 244) {
      range.value = parseInt(range.value) + 1;
      tempoNum.innerHTML = parseInt(range.value) + "bpm";
    }
    console.log(startTime);
    console.log(currentTime);
  };
  const pikachuShot = () => {
    sound.start();
  };
  const handleSwitchOnTempoRun = () => {
    setIsTempoRun((prevIsTempoRun) => !prevIsTempoRun);
    let range = document.getElementById("bpmInput");
    setTempoNumber(parseInt(range.value));
  };
  const [startTime, setStartTime] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [tempoNumber, setTempoNumber] = useState("100");
  const [IsTempoRun, setIsTempoRun] = useState(false);
  const [IsRecord, setIsRecord] = useState(false);
  const [pu, setPu] = useState([]);
  useEffect(() => {
    let intervalId;
    async function playWithDelay() {
      if (IsTempoRun) {
        intervalId = setInterval(async () => {
          pikachuShot();
        }, 60000 / parseInt(tempoNumber));
      }
    }
    playWithDelay();
    return () => {
      clearInterval(intervalId);
    };
  }, [IsTempoRun, tempoNumber]);
  useEffect(() => {
    const startTime = Date.now();
    setStartTime(startTime);
    setCurrentTime(startTime);
    let startId;
    function playWithDelay() {
      if (IsRecord) {
        startId = setInterval(() => {
          setCurrentTime(Date.now());
        }, 20);
      }
    }
    playWithDelay();
    return () => {
      clearInterval(startId);
    };
  }, [IsRecord]);

  const handleRecordChange = () => {
    setIsRecord((prevIsRecord) => !prevIsRecord);
    if (IsRecord) {
      setPu([]);
      console.log(pu);
    } else {
      console.log(pu);
    }
  };
  useEffect(() => {
    const synth = new Tone.Sampler({
      urls: {
        C3: "C3.mp3",
      },
      release: 1,
      baseUrl: "https://tonejs.github.io/audio/salamander/",
    }).toDestination();

    const handleKeyDown = (event) => {
      if (event.code === "KeyQ") {
        synth.triggerAttackRelease("C3", "4n");
        buttons[0].classList.add("active-white");
        if (IsRecord) {
          setPu((prevPu) => [...prevPu, "Q"]);
        }
      } else if (event.code === "KeyW") {
        synth.triggerAttackRelease("D3", "4n");
        buttons[1].classList.add("active-white");
        if (IsRecord) {
          console.log(IsRecord);
          setPu((prevPu) => [...prevPu, "W"]);
        }
      } else if (event.code === "KeyE") {
        synth.triggerAttackRelease("E3", "4n");
        buttons[2].classList.add("active-white");
      } else if (event.code === "KeyR") {
        synth.triggerAttackRelease("F3", "4n");
        buttons[3].classList.add("active-white");
      } else if (event.code === "KeyT") {
        synth.triggerAttackRelease("G3", "4n");
        buttons[4].classList.add("active-white");
      } else if (event.code === "KeyY") {
        synth.triggerAttackRelease("A3", "4n");
        buttons[5].classList.add("active-white");
      } else if (event.code === "KeyU") {
        synth.triggerAttackRelease("B3", "4n");
        buttons[6].classList.add("active-white");
      } else if (event.code === "KeyC") {
        synth.triggerAttackRelease("C4", "4n");
        buttons[7].classList.add("active-white");
      } else if (event.code === "KeyV") {
        synth.triggerAttackRelease("D4", "4n");
        buttons[8].classList.add("active-white");
      } else if (event.code === "KeyB") {
        synth.triggerAttackRelease("E4", "4n");
        buttons[9].classList.add("active-white");
      } else if (event.code === "KeyN") {
        synth.triggerAttackRelease("F4", "4n");
        buttons[10].classList.add("active-white");
      } else if (event.code === "KeyM") {
        synth.triggerAttackRelease("G4", "4n");
        buttons[11].classList.add("active-white");
      } else if (event.code === "Comma") {
        synth.triggerAttackRelease("A4", "4n");
        buttons[12].classList.add("active-white");
      } else if (event.code === "Period") {
        synth.triggerAttackRelease("B4", "4n");
        buttons[13].classList.add("active-white");
      } else if (event.code === "Slash") {
        synth.triggerAttackRelease("C5", "4n");
        buttons[14].classList.add("active-white");
      } else if (event.code === "Digit2") {
        synth.triggerAttackRelease("C#3", "4n");
        buttons2[0].classList.add("active-black");
      } else if (event.code === "Digit3") {
        synth.triggerAttackRelease("D#3'", "4n");
        buttons2[1].classList.add("active-black");
      } else if (event.code === "Digit5") {
        synth.triggerAttackRelease("F#3'", "4n");
        buttons2[2].classList.add("active-black");
      } else if (event.code === "Digit6") {
        synth.triggerAttackRelease("G#3", "4n");
        buttons2[3].classList.add("active-black");
      } else if (event.code === "Digit7") {
        synth.triggerAttackRelease("A#3", "4n");
        buttons2[4].classList.add("active-black");
      } else if (event.code === "KeyF") {
        synth.triggerAttackRelease("C#4", "4n");
        buttons2[5].classList.add("active-black");
      } else if (event.code === "KeyG") {
        synth.triggerAttackRelease("D#4", "4n");
        buttons2[6].classList.add("active-black");
      } else if (event.code === "KeyJ") {
        synth.triggerAttackRelease("F#4", "4n");
        buttons2[7].classList.add("active-black");
      } else if (event.code === "KeyK") {
        synth.triggerAttackRelease("G#4", "4n");
        buttons2[8].classList.add("active-black");
      } else if (event.code === "KeyL") {
        synth.triggerAttackRelease("A#4", "4n");
        buttons2[9].classList.add("active-black");
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", (event) => {
      if (event.code === "KeyQ") {
        buttons[0].classList.remove("active-white");
      }
      if (event.code === "KeyW") {
        buttons[1].classList.remove("active-white");
      }
      if (event.code === "KeyE") {
        buttons[2].classList.remove("active-white");
      }
      if (event.code === "KeyR") {
        buttons[3].classList.remove("active-white");
      }
      if (event.code === "KeyT") {
        buttons[4].classList.remove("active-white");
      }
      if (event.code === "KeyY") {
        buttons[5].classList.remove("active-white");
      }
      if (event.code === "KeyU") {
        buttons[6].classList.remove("active-white");
      }
      if (event.code === "KeyC") {
        buttons[7].classList.remove("active-white");
      }
      if (event.code === "KeyV") {
        buttons[8].classList.remove("active-white");
      }
      if (event.code === "KeyB") {
        buttons[9].classList.remove("active-white");
      }
      if (event.code === "KeyN") {
        buttons[10].classList.remove("active-white");
      }
      if (event.code === "KeyM") {
        buttons[11].classList.remove("active-white");
      }
      if (event.code === "Comma") {
        buttons[12].classList.remove("active-white");
      }
      if (event.code === "Period") {
        buttons[13].classList.remove("active-white");
      }
      if (event.code === "Slash") {
        buttons[14].classList.remove("active-white");
      }
      if (event.code === "Digit2") {
        buttons2[0].classList.remove("active-black");
      }
      if (event.code === "Digit3") {
        buttons2[1].classList.remove("active-black");
      }
      if (event.code === "Digit5") {
        buttons2[2].classList.remove("active-black");
      }
      if (event.code === "Digit6") {
        buttons2[3].classList.remove("active-black");
      }
      if (event.code === "Digit7") {
        buttons2[4].classList.remove("active-black");
      }
      if (event.code === "KeyF") {
        buttons2[5].classList.remove("active-black");
      }
      if (event.code === "KeyG") {
        buttons2[6].classList.remove("active-black");
      }
      if (event.code === "KeyJ") {
        buttons2[7].classList.remove("active-black");
      }
      if (event.code === "KeyK") {
        buttons2[8].classList.remove("active-black");
      }
      if (event.code === "KeyL") {
        buttons2[9].classList.remove("active-black");
      }
    });
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [IsRecord, buttons, buttons2]);

  return (
    <Container>
      <div className="topOfPiano" style={{ display: "flex" }}>
        <div className="tempo">
          <div className="pikachuButtonBlock">
            <button
              // disabled
              style={{ backgroundColor: IsTempoRun ? "blue" : "" }}
              id="pikachuButton"
              onClick={handleSwitchOnTempoRun}
            >
              <img src={tempoRun} className="pikachu"></img>
            </button>
          </div>
          <div className="bpmBlock">
            <button className="keyMin" onClick={handleTempoMin}>
              -
            </button>
            <input
              id="bpmInput"
              value={tempoNumber}
              max="244"
              min="30"
              type="range"
              onChange={handleTempoChange}
              // onChange={handleChangeTempoNumber}
            ></input>
            <button className="keyPlus" onClick={handleTempoPlus}>
              +
            </button>
          </div>
          <div className="tempoNumberBlock">
            <p id="tempoNumber">100bpm</p>
          </div>
        </div>
        <div className="recordBlock">
          <div style={{ float: "right" }}>
            <button
              className="recordButton"
              style={{ animation: IsRecord ? "colorChange 1s infinite" : "" }}
              onClick={handleRecordChange}
            >
              <img
                className="record"
                src={record}
                style={{ animation: IsRecord ? "spin 2s linear infinite" : "" }}
              />
            </button>
          </div>
        </div>
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
          <button className="black blackType3" id="bG">
            <span className="blackButtonText">F</span>
          </button>
          <button className="black blackType2" id="bH">
            <span className="blackButtonText">G</span>
          </button>
          <button className="black blackType3" id="bK">
            <span className="blackButtonText">J</span>
          </button>
          <button className="black blackType1" id="bL">
            <span className="blackButtonText">K</span>
          </button>
          <button className="black blackType1" id="b">
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

export default CreateYourselfPage;
