import React from "react";
import "./InfoNav.css"

const InfoNav = () => {
    return (
        <div className="right__menu">
            <div className="right__menu_itens">
                <a className="btn--calendar"  href="/">save to calendar</a>
                <a className="btn--share" href="/">share <i class="bi bi-share"></i></a>
            </div>
        </div>
    )
}

export default InfoNav;