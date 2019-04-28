import React, { Fragment } from "react";

//import components
import Navbar from "../Components/Navbar";
import RandomRecipe from "../Components/RandomRecipe";

//styles
import "./Styles/Navbar.css";

const Homepage = props => {
  return (
    <Fragment>
      <Navbar />
      <RandomRecipe />
    </Fragment>
  );
};

export default Homepage;
