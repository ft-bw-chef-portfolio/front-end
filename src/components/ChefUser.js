import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router";
import { fetchChefInfo, fetchChefsRecipes} from "../store/actions";

import ChefRecipeCard from "./ChefRecipeCard";
import ChefInfoCard from './ChefInfoCard';

const ChefUser = ({ fetchChefInfo, fetchChefsRecipes, chefinfo, chefrecipes }) => {

    const { id } = useParams();

    useEffect(() => {
        const recipe_id = id ? id : 1
        fetchChefInfo();
        fetchChefsRecipes(recipe_id);
      }, [id]);

    return(
        <div>
            <h1>My Chef Portfolio: </h1>
           
            <p>{chefrecipes && chefrecipes.map(recipe => (
                <ChefRecipeCard recipe={recipe} />
                ))}</p>
        </div>
    )
};
const mapStateToProps = state => {
    return {
        chefrecipes: state.chefrecipes,
      chefinfo: state.chefinfo,
      isFetching: state.isFetching,
      error: state.error
    };
  };
  
export default connect(mapStateToProps, { fetchChefInfo, fetchChefsRecipes })(ChefUser);