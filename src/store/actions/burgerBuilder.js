import * as actionTypes from './actionsTypes';

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