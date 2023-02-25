import React, {Fragment} from "react"

import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import InfoNav from "./components/InfoNav/InfoNav";

const App = () => {
  return (
    <Fragment>
      <Navbar />
      <InfoNav/>
      <Home />
    </Fragment>
  )
}


export default App;