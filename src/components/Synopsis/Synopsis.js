import React from "react";
import "./Synopsis.css";

import Navbar from "../Navbar/Navbar";
import InfoNav from "../InfoNav/InfoNav";

const Synopsis = () => {
    return (
        <div className="synopsis">
            <Navbar />
            <InfoNav />

            <div className="left__side">
                <h2>From Illumination and Nintendo comes a new animated film based on <br /> the world of Super Mario Bros. The film will be released in North America <br /> on April 7, 2023 and in Japan on April 28, 2023.</h2>
            </div>

            <div className="right__side">
                <div className="img__info">
                    <img src={require("../images/super-mario-bros.jpg")}  alt="logo" className="logo__img__fundo"/>
                </div>

                <div className="text_info">
                    <p>Directed by Aaron Horvath and Michael Jelenic (collaborators on Teen Titans Go!, Teen <br /> Titans Go! To the Movies) from a screenplay by Matthew <br /> Fogel (The LEGO Movie 2: The Second Part, Illuminations’s Minions: The <br /> Rise of Gru), the film stars Chris Pratt as Mario, Anya Taylor-Joy as Princess <br /> Peach, Charlie Day as Luigi, Jack Black as Bowser, Keegan-Michael Key as <br /> Toad, Seth Rogen as Donkey Kong, Fred Armisen as Cranky Kong, Kevin <br /> Michael Richardson as Kamek and Sebastian Maniscalco as Spike.</p>
                    <br />
                    <p>The film is produced by Illumination founder and<br /> CEO Chris Meledandri and by Shigeru Miyamoto for Nintendo. The film will be co-financed by Universal<br /> Pictures and Nintendo and released worldwide by Universal Pictures.</p>
                </div>

            </div>

        </div>
    )
}
export default Synopsis;