import React, { Fragment } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import InfoNav from "./components/InfoNav/InfoNav";

import Trailer from "./components/Trailer/Trailer";

const App = () => {
  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={[<Navbar />, <InfoNav />, <Home />]} />
          <Route exact path="/trailers" element={<Trailer />} />
        </Routes>
      </BrowserRouter>
    </Fragment>
  )
}


export default App;