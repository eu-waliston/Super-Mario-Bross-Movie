import React, { Fragment } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import InfoNav from "./components/InfoNav/InfoNav";

import Trailer from "./components/Trailer/Trailer";
import Synopsis from "./components/Synopsis/Synopsis";

const App = () => {
  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={[<Navbar />, <InfoNav />, <Home />]} />
          <Route exact path="/trailers" element={<Trailer />} />
          <Route exact path="/synopsis" element={<Synopsis />} />
        </Routes>
      </BrowserRouter>
    </Fragment>
  )
}


export default App;