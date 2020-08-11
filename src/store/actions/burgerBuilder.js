import * as actionTypes from './actionsTypes';
import axios from "axios";

export const addIngregient = (name) =>{
    return {
        type:actionTypes.ADD_INGREDIENT,
        ingredientName: name
    };
}

export const removeIngregient = (name) =>{
    return {
        type:actionTypes.REMOVE_INGREDIENT,
        ingredientName: name
    };
}

export const setIngredients = (ingredients) =>{
    return{
        type:actionTypes.SET_INGREDIENTS,
        ingredients: ingredients
    }
}

export const fetchIngredientsFail =()=>{
    return{
        type: actionTypes.FETCH_INGREDIENTS_FAIL
    }
}

export const initIngredients = () =>{
    return dispatch =>{
        axios.get('https://react-my-burger-f012b.firebaseio.com/ingredients.json')
            .then(res =>{
               dispatch(setIngredients(res.data))
            })
            .catch(err =>{
                dispatch(fetchIngredientsFail)
            })
    }
}