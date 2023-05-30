import { React, useState } from "react";
import { Container } from "reactstrap";
import "./SelectSong.css";
import { Link } from "react-router-dom";
import routes from "../../AppRouter";

const SelectSong = () => {
    const songs = ["Song 1", "Song 2", "Song 3"];
    const [selectedSongIndex, setSelectedSongIndex] = useState(0);

    const handlePreviousSong = () => {
        setSelectedSongIndex((prevIndex) => (prevIndex === 0 ? songs.length - 1 : prevIndex - 1));
    };

    const handleNextSong = () => {
        setSelectedSongIndex((prevIndex) => (prevIndex === songs.length - 1 ? 0 : prevIndex + 1));
    };
    return (
        <Container>
            <p id="selectsong">
                <span role="img" aria-label="fire">🔥</span> Select Song
            </p>
            <div className="songBlock">
                <button id='up' className="triangleButton" onClick={handlePreviousSong}>&#9650;</button>
                <Link  to={routes.playgame} className="link">
                <button id="songButton">
                    
                        <span className="songName">{songs[selectedSongIndex]}</span>
                        <span className="difficulty">&#9733;10000</span>
                    
                </button>
                </Link>
                <button id='down' className="triangleButton" onClick={handleNextSong}>&#9660;</button>
            </div>

        </Container>
    );
};
export default SelectSong;