import { RECIPES_ENDPOINT } from "./Endpoints";
import { ADD_RECIPES } from "../Types/Types";

export function fetchRecipes(dispatch) {
  return fetch(RECIPES_ENDPOINT)
    .then(resp => resp.json())
    .then(recipes => {
      console.log(recipes);

      dispatch({
        type: ADD_RECIPES,
        payload: recipes
      });
    });
}
