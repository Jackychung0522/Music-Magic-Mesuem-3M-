import React from "react";
import { Container } from "reactstrap";
import "./PlayGame.css";
import * as Tone from "tone";
import { useEffect } from "react";
const PlayGame = () => {

    useEffect(() => {


        const synth = new Tone.Synth().toDestination();


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

        const buttons = document.getElementsByClassName("white");
        buttons[0].addEventListener("click", handleButtonC3Click);
        buttons[1].addEventListener("click", handleButtonD3Click);
        buttons[2].addEventListener("click", handleButtonE3Click);
        buttons[3].addEventListener("click", handleButtonF3Click);
        buttons[4].addEventListener("click", handleButtonG3Click);
        buttons[5].addEventListener("click", handleButtonA3Click);
        buttons[6].addEventListener("click", handleButtonB3Click);
        buttons[7].addEventListener("click", handleButtonC4Click);
        buttons[8].addEventListener("click", handleButtonD4Click);
        buttons[9].addEventListener("click", handleButtonE4Click);
        buttons[10].addEventListener("click", handleButtonF4Click);
        buttons[11].addEventListener("click", handleButtonG4Click);
        buttons[12].addEventListener("click", handleButtonA4Click);
        buttons[13].addEventListener("click", handleButtonB4Click);
        buttons[14].addEventListener("click", handleButtonC5Click);

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
            }
        };


        window.addEventListener('keydown', handleKeyDown);

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
                    <button className="black blackType3" id="bG">
                        <span className="blackButtonText">G</span>
                    </button>
                    <button className="black blackType2" id="bH">
                        <span className="blackButtonText">H</span>
                    </button>
                    <button className="black blackType3" id="bK">
                        <span className="blackButtonText">K</span>
                    </button>
                    <button className="black blackType1" id="bL">
                        <span className="blackButtonText">L</span>
                    </button>
                    <button className="black blackType1" id="b">
                        <span className="blackButtonText">;</span>
                    </button>
                </div>
                <div className="pianoBlockForWhite">

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
                </div>
            </div>
        </Container>
    );
};
export default PlayGame;
