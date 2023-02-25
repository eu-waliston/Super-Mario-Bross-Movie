import React from "react";
import styled from "styled-components";

import backgroundIMG from "../images/fundo.png";

const Home = () => {
    return (
        <HOME style={{ backgroundImage: `url(${backgroundIMG})` }}>
            <img src={require("../images/mario_logo.png")} alt="mario logo" className="mario_logo" />
            <div className="info">
                <h2>only in theatres</h2>
                <h1>april 7</h1>
                <a href="/">watch trailer</a>
            </div>

            <div className="link">
                <i class="bi bi-facebook"></i>
                <i class="bi bi-twitter"></i>
                <i class="bi bi-instagram"></i>
                <i class="bi bi-youtube"></i>
            </div>
        </HOME>
    )
}
const HOME = styled.div`
    width: 100%;
    height: 100vh;

    background-position: center;
    background-size: cover;

    .mario_logo {
        position: absolute;
        top: 100px;
        width: 100%;
        max-width: 1000px;
    }

    .info {
        text-align: center;
        position: relative;
        top: 600px;
        text-transform: uppercase;

        h2 {
            color: #fff;
            font-size: 40px;
        }

        h1 {
            color: #fff;
            font-size: 60px;
        }

        a {
            text-decoration: none;
            position: relative;
            top: 20px;
            color: #fff;
            border: 2px solid #fff;
            padding: 10px;
            border-radius: 30px;
            transition: .5s;
            font-weight: bold;

            &:hover {
                color: #F9513E;
                border: 2px solid #F9513E;

            }
        }
    }

    .link {
        float: right;
        position: relative;
        right: 30px;
        top: 720px;
        font-size: 30px;
        color: #fff;
        
        i {
            margin-right: 25px;
            transition:  .5s;

            &:hover {
                cursor: pointer;
                color: #F9513E;
            }
        }
    }
`

export default Home;