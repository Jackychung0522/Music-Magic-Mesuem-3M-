import React, { useState, useEffect } from "react";
import { Container } from "reactstrap";
import "./SelectSong.css";
import { Link } from "react-router-dom";
import routes from "../../AppRouter";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import db from "../../index";

const SelectSong = () => {
  const [songs, setSongs] = useState([]);
  const [selectedSongIndex, setSelectedSongIndex] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await db.collection("Game").get();
        const fetchedSongs = querySnapshot.docs.map((doc) => doc.data().name);
        setSongs(fetchedSongs);
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
      <div className="songBlock">
        <button id="up" className="triangleButton" onClick={handlePreviousSong}>
          &#9650;
        </button>
        <Link to={routes.playgame} className="link">
          <button id="songButton" onClick={handleClick}>
            <span className="songName">{songs[selectedSongIndex]}</span>
            <span className="difficulty">&#9733;10000</span>
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
