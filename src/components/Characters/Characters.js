import React from "react";
import "./Characters.css";

import Navbar from "../Navbar/Navbar"
import InfoNav from "../InfoNav/InfoNav"


const Characters = () => {
    return (
        <div className="characters__section">
            <Navbar />
            <InfoNav />
            <div className="image__carrousel">
                <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src={require("../images/image1.jpg")} class="d-block w-100" alt="..." />
                        </div>
                        <div class="carousel-item">
                            <img src={require("../images/image2.jpg")} class="d-block w-100" alt="..." />
                        </div>
                        <div class="carousel-item">
                            <img src={require("../images/image4.jpg")} class="d-block w-100" alt="..." />
                        </div>

                        <div class="carousel-item">
                            <img src={require("../images/image5.jpg")} class="d-block w-100" alt="..." />
                        </div>

                        <div class="carousel-item">
                            <img src={require("../images/image6.jpg")} class="d-block w-100" alt="..." />
                        </div>

                        <div class="carousel-item">
                            <img src={require("../images/image8.jpg")} class="d-block w-100" alt="..." />
                        </div>

                        <div class="carousel-item">
                            <img src={require("../images/image9.jpg")} class="d-block w-100" alt="..." />
                        </div>

                        <div class="carousel-item">
                            <img src={require("../images/image10.jpg")} class="d-block w-100" alt="..." />
                        </div>

                        <div class="carousel-item">
                            <img src={require("../images/image11.jpg")} class="d-block w-100" alt="..." />
                        </div>

                        <div class="carousel-item">
                            <img src={require("../images/image13.jpg")} class="d-block w-100" alt="..." />
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Characters;