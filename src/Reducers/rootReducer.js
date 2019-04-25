// set default Redux state
const initialState = {
  // list of recipes
  recipes: [],
  // list of ingredients
  ingredients: [],
  // list of all for a particular recipe, this is where amounts for ingredients exist
  recipeIngredients: []
};

// reducer with cases for Redux
function reducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_RECIPES":
      return { ...state, recpies: action.payload };
    case "ADD_INGREDIENTS":
      return { ...state, recpies: action.payload };
    case "ADD_RECIPE_INGREDIENTS":
      return { ...state, recpies: action.payload };
    default:
      return state;
  }
}

export default reducer;
