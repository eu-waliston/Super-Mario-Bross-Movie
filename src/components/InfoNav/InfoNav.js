import React from "react";
import "./InfoNav.css"

const InfoNav = () => {
    return (
        <div className="right__menu">
            <div className="right__menu_itens">
                <a className="show__save_menu"  href="/" id="btn--calendar">save to calendar</a>
                <a className="show__share_menu" href="/" id="btn--share">share <i class="bi bi-share"></i></a>
            </div>
        </div>
    )
}

export default InfoNav;