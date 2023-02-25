import React from "react";
import "./Home.css"

import backgroundIMG from "../images/fundo.png";

const Home = () => {
    return (
        <div style={{ backgroundImage: `url(${backgroundIMG})` }} className="Home">
            <img src={require("../images/mario_logo.png")} alt="mario logo" className="mario_logo" />
            <div className="info">
                <h2>only in theatres</h2>
                <h1>april 7</h1>
                <a className="btn" href="/">watch trailer</a>
            </div>

            <div className="link">
                <i class="bi bi-facebook"></i>
                <i class="bi bi-twitter"></i>
                <i class="bi bi-instagram"></i>
                <i class="bi bi-youtube"></i>
            </div>
        </div>
    )
}

export default Home;