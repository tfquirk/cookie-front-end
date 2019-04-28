import React, { useEffect } from "react";

// connect to Redux state
import { connect } from "react-redux";

// import methods for API calls
import { fetchRecipes } from "./Apis/FetchRecipes";

const App = props => {
  useEffect(() => {
    //code here
    props.fetchRecipes();
  });

  return <div className="App">This is a test.</div>;
};

const mapStateToProps = state => {
  return {
    recipes: state.recipes
  };
};

// each time a user visits this page, add it to the log history
const mapDispatchToProps = dispatch => {
  return {
    fetchRecipes: () => fetchRecipes(dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
