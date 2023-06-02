import React, { useState, useEffect } from "react";
import { Container } from "reactstrap";
import "./SelectSong.css";
import { Link } from "react-router-dom";
import routes from "../../AppRouter";
import firebase from "firebase/compat/app";
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
  const [records, setRecords] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await db.collection("Game").get();
        const fetchedSongs = querySnapshot.docs.map((doc) => doc.data().name);
        const fetchedStars = querySnapshot.docs.map((doc) => doc.data().star);
        const fetchedRecords = querySnapshot.docs.map(
          (doc) => doc.data().record
        );
        setSongs(fetchedSongs);
        setStars(fetchedStars);
        setRecords(fetchedRecords);
        console.log(fetchedSongs);
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

  return (
    <Container>
      <p id="selectsong">
        <span role="img" aria-label="fire">
          🔥
        </span>{" "}
        Select Song
      </p>
      <p id="record">{records[selectedSongIndex]}</p>
      <div className="songBlock">
        <button id="up" className="triangleButton" onClick={handlePreviousSong}>
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
        <button id="down" className="triangleButton" onClick={handleNextSong}>
          &#9660;
        </button>
      </div>
    </Container>
  );
};

export default SelectSong;
