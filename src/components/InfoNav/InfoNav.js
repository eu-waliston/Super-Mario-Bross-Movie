import React from "react";
import "./InfoNav.css"
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const InfoNav = () => {

    const SharePopup = () => (
        <Popup trigger={<button id="btn--share">Share&nbsp;<i class="bi bi-share"></i></button>} position="bottom center">
            <div className="pop_up">
                <i class="popup__item bi bi-facebook"></i>
                <i class="popup__item bi bi-twitter"></i>
                <i class="popup__item bi bi-instagram"></i>
                <i class="popup__item bi bi-chat-left-text-fill"></i>
                <i class="popup__item bi bi-pinterest"></i>
                <i class="popup__item bi bi-telegram"></i>
            </div>
        </Popup>
    );

    const CalendarPopup = () => (
        <Popup trigger={<button className="show__save_menu" id="btn--calendar">save to calendar</button>} position="bottom center">
            <div className="pop_up_calendar">
                <div className="top__info">
                    <h3>Get Tickets</h3>
                    <p>Friday, 07 Apr 2023</p>
                    <p className="web">www.thesupermariobros.movie</p>
                </div>
                <hr />
                <div>
                <p>
                    Choose a calendar
                </p>
                <h3><i class="itens_ask bi bi-google"></i> Google Calendar</h3>
                <h3><i class="itens_ask bi bi-calendar-date"></i> Zpple iCal</h3>
                <h3><i class="itens_ask bi bi-windows"></i> Microsoft Outlook</h3>
                <h3><i class="itens_ask bi bi-calendar4-event"></i> Yahoo</h3>
                </div>
            </div>
        </Popup>
    );

    return (
        <div className="right__menu">
            <div className="right__menu_itens">
                <CalendarPopup />
                <SharePopup />
            </div>
        </div>
    )
}

export default InfoNav;