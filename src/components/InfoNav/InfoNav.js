import React from "react";
import "./InfoNav.css"


import Modal1 from "./Modal1";
import Modal2 from "./Modal2";

const InfoNav = () => {

    return (
        <div className="right__menu">
            <div className="right__menu_itens">
                <Modal2 />
                <Modal1 />
            </div>
        </div>
    )
}

export default InfoNav;