import React from "react";
import "./Navbar.css"


const Navbar = () => {
    const [isNavbar, setIsNavbar] = React.useState(true);

    return (
        <div className="menu__nav">
            <i class={isNavbar ?"bi bi-list lt" :"bi bi-x-lg lt" } onClick={() => setIsNavbar(!isNavbar)}></i>
            
            <div className={isNavbar ? "navbar_invisible" : "navbar_visible"}>
                
                <div className="nav__itens">
                    <img src={require("../images/logo.png")} alt="logo" className="img__nav" />

                    <a className="link__itens" href="/">home</a>
                    <a className="link__itens" href="/">trailer</a>
                    <a className="link__itens" href="/">synopsis</a>
                    <a className="link__itens" href="/">characters</a>
                </div>
            </div>

        </div>
    )
}

export default Navbar;