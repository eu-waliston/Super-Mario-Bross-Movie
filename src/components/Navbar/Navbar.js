import React from "react";
import "./Navbar.css"
import { Link } from "react-router-dom";


const Navbar = () => {
    const [isNavbar, setIsNavbar] = React.useState(true);

    let [changeText, setChangeText] = React.useState(true);
    const handleChange = () => {
        return setChangeText(!changeText);
    }

    return (
        <div className="menu__nav">
            <i class={isNavbar ?"bi bi-list lt" :"bi bi-x-lg lt" } onClick={() => setIsNavbar(!isNavbar)}></i>
            
            <div className={isNavbar ? "navbar_invisible" : "navbar_visible"}>
                
                <div className="nav__itens">
                    <img src={require("../images/logo.png")} alt="logo" className="img__nav" />

                    <li className="link__itens"><Link className="link__itens" to={"/"}>home</Link></li>
                    <li className="link__itens"><Link className="link__itens" to={"/trailers"}>trailers</Link></li>
                    <li className="link__itens"><Link className="link__itens" to={"/synopsis"}>synopsis</Link></li>
                    <li className="link__itens"><Link className="link__itens" to={"/characters"}>characters</Link></li>
                </div>
            </div>

        </div>
    )
}

export default Navbar;