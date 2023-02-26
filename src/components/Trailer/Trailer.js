import React from "react";
import "./Trailer.css"

import InfoNav from "../InfoNav/InfoNav";
import Navbar from "../Navbar/Navbar"

import Trailer2 from "./Trailer2";
import Trailer1 from "./Trailer1";

const Trailer = () => {
    let [changeText, setChangeText] = React.useState(true);
    const handleChange = () => {
        return setChangeText(!changeText);
    }

    return (
        <>
            <Navbar />
            <InfoNav />
            <div className="trailers__section">
                <div className="left__menu">
                    <div className="itens">
                        <div className="trailer__item1">
                            <button className={changeText ? "btn_fs active" : "btn_fs"} onClick={() => handleChange()}>
                                <img src={require("../images/btn_tailer_1.jpg")} alt="logo" className="image_btn1" />
                            </button>
                            <p>The Super Mario Bros. Movie | Official Trailer</p>
                        </div>
                        <div className="trailer__item1">
                            <button className={changeText ? "btn_fs" : "btn_fs active"} onClick={() => handleChange()}>
                                <img src={require("../images/btn_trailer_2.jpg")} alt="logo" className="image_btn2" />
                            </button>
                            <p>The Super Mario Bros. Movie | Official Teaser Trailer</p>
                        </div>
                    </div>
                </div>

                    {changeText ? <Trailer1 /> : <Trailer2 />}
            </div>
        </>

    )
}

export default Trailer;