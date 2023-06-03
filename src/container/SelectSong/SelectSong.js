import React, { useState, useEffect } from "react";
import { Container } from "reactstrap";
import "./SelectSong.css";
import { Link } from "react-router-dom";
import routes from "../../AppRouter";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import db from "../../index";
import buttonSound from "../../mp3/clickButtonSound.mp3";

const SelectSong = () => {
  const playButtonSound = () => {
    const audio = new Audio(buttonSound);
    audio.play();
    audio.volume = 0.3;
  };
  const buttons = document.querySelectorAll("button");
  buttons.forEach((button) => {
    button.addEventListener("click", playButtonSound);
  });
  const [songs, setSongs] = useState([]);
  const [selectedSongIndex, setSelectedSongIndex] = useState(0);
  const [stars, setStars] = useState([]);
  const [easyrecords, setEasyRecords] = useState([]);
  const [normalrecords, setNormalRecords] = useState([]);
  const [hardrecords, setHardRecords] = useState([]);
  const [selectDifficulty, setSelectDifficulty] = useState("easy");
  // const [speed, setSpeed] = useState(1);
  const [easyplayernames, setEasyPlayerName] = useState([]);
  const [normalplayernames, setNormalPlayerName] = useState([]);
  const [hardplayernames, setHardPlayerName] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await db.collection("Game").get();
        const fetchedSongs = querySnapshot.docs.map((doc) => doc.data().name);
        const fetchedStars = querySnapshot.docs.map((doc) => doc.data().star);
        const fetchedEasyRecords = querySnapshot.docs.map(
          (doc) => doc.data().easyrecord
        );
        const fetchedNormalRecords = querySnapshot.docs.map(
          (doc) => doc.data().normalrecord
        );
        const fetchedHardRecords = querySnapshot.docs.map(
          (doc) => doc.data().hardrecord
        );
        const fetchedEasyPlayerNames = querySnapshot.docs.map(
          (doc) => doc.data().easyplayername
        );
        const fetchedNormalPlayerNames = querySnapshot.docs.map(
          (doc) => doc.data().normalplayername
        );
        const fetchedHardPlayerNames = querySnapshot.docs.map(
          (doc) => doc.data().hardplayername
        );
        setSongs(fetchedSongs);
        setStars(fetchedStars);
        setEasyRecords(fetchedEasyRecords);
        setNormalRecords(fetchedNormalRecords);
        setHardRecords(fetchedHardRecords);
        setEasyPlayerName(fetchedEasyPlayerNames);
        setNormalPlayerName(fetchedNormalPlayerNames);
        setHardPlayerName(fetchedHardPlayerNames);
      } catch (error) {
        console.log("Error getting songs: ", error);
      }
    };

    fetchData();
  }, []);

  const handlePreviousSong = () => {
    setSelectedSongIndex((prevIndex) =>
      prevIndex === 0 ? songs.length - 1 : prevIndex - 1
    );
  };

  const handleNextSong = () => {
    setSelectedSongIndex((prevIndex) =>
      prevIndex === songs.length - 1 ? 0 : prevIndex + 1
    );
  };
  const handleClick = () => {
    sessionStorage.setItem("currentSong", songs[selectedSongIndex]);
  };
  const handleEasyButtonClick = () => {
    setSelectDifficulty("easy");
    sessionStorage.setItem("speed", 1);
    sessionStorage.setItem("difficulty", "easy");
  };
  const handleNormalButtonClick = () => {
    setSelectDifficulty("normal");
    sessionStorage.setItem("speed", 3);
    sessionStorage.setItem("difficulty", "normal");
  };
  const handleHardButtonClick = () => {
    setSelectDifficulty("hard");
    sessionStorage.setItem("speed", 1);
    sessionStorage.setItem("difficulty", "hard");
  };
  useEffect(() => {
    const difficultbuttons = document.querySelectorAll(".difficultButton");
    const defaultButton = document.getElementById("easy");
    difficultbuttons.forEach((button) => {
      button.addEventListener("click", () => {
        difficultbuttons.forEach((btn) => {
          btn.classList.remove("active");
        });
        button.classList.add("active");
      });
    });
    defaultButton.click();
  }, []);
  return (
    <Container>
      <div className="selectPage">
        <p id="selectsong">
          <span role="img" aria-label="fire">
            🔥
          </span>{" "}
          Select Song
        </p>
        <div>
          {selectDifficulty === "easy" && (
            <div>
              <p id="playerName">{easyplayernames[selectedSongIndex]}</p>
              <p id="record">{easyrecords[selectedSongIndex]}</p>
            </div>
          )}
          {selectDifficulty === "normal" && (
            <div>
              <p id="playerName">{normalplayernames[selectedSongIndex]}</p>
              <p id="record">{normalrecords[selectedSongIndex]}</p>
            </div>
          )}
          {selectDifficulty === "hard" && (
            <div>
              <p id="playerName">{hardplayernames[selectedSongIndex]}</p>
              <p id="record">{hardrecords[selectedSongIndex]}</p>
            </div>
          )}
        </div>
        <div className="buttonSection">
          <div className="difficulty">
            <div className="difficultButtonBlock">
              <button
                id="easy"
                className="difficultButton"
                onClick={handleEasyButtonClick}
              >
                Easy
              </button>
              <button
                id="normal"
                className="difficultButton"
                onClick={handleNormalButtonClick}
              >
                Normal
              </button>
              <button
                id="hard"
                className="difficultButton"
                onClick={handleHardButtonClick}
              >
                Hard
              </button>
            </div>
          </div>

          <div className="songBlock">
            <button
              id="up"
              className="triangleButton"
              onClick={handlePreviousSong}
            >
              &#9650;
            </button>
            <Link to={routes.playgame} className="link">
              <button id="songButton" onClick={handleClick}>
                <span className="songName">{songs[selectedSongIndex]}</span>
                <span className="difficulty">
                  &#9733;{stars[selectedSongIndex]}
                </span>
              </button>
            </Link>
            <button
              id="down"
              className="triangleButton"
              onClick={handleNextSong}
            >
              &#9660;
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default SelectSong;
