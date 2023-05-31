import { React, useState } from "react";
import { Container } from "reactstrap";
import "./SelectSong.css";
import { Link } from "react-router-dom";
import routes from "../../AppRouter";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
const SelectSong = () => {
  const songs = [];
  const db = firebase.firestore();
  db.collection("game")
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        const songData = doc.data().name;
        songs.push(songData);
      });
      console.log(songs);
    })
    .catch((error) => {
      console.log("Error getting songs: ", error);
    });
  const [selectedSongIndex, setSelectedSongIndex] = useState(0);

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
          <button id="songButton">
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
