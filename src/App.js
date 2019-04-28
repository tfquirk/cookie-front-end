import React, { useEffect } from "react";

// connect to Redux state
import { connect } from "react-redux";

// import ability to use React Router funcitionality
import { Route, Switch } from "react-router-dom";

// import methods for API calls
import { fetchRecipes } from "./Apis/FetchRecipes";

//pages
import Homepage from "./Pages/Homepage";
import FourZeroFour from "./Pages/FourZeroFour";

const App = props => {
  useEffect(() => {
    //code here
    props.fetchRecipes();
  });

  return (
    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route component={FourZeroFour} />
    </Switch>
  );
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
