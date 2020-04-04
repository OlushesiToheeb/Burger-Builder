import React from "react";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";
import "./Burger.css";
import { withRouter } from "react-router-dom";

const Burger = (props) => {
  const transformedIngredients = () => {
    const tIngredients = [];
    Object.keys(props.ingredients).map((igKey) => {
      if (props.ingredients[igKey] > 0) {
        for (var j = 0; j < props.ingredients[igKey]; j++) {
          tIngredients.push(
            <BurgerIngredient key={igKey + [j]} type={igKey} />
          );
        }
      }
      return null;
    });

    return tIngredients.reduce((arr, el) => {
      return arr.concat(el);
    }, []);
  };

  return (
    <div className="Burger">
      <BurgerIngredient type="bread-top" />
      {transformedIngredients().length === 0 ? (<p>Please start adding ingredients!</p>) : transformedIngredients()}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default withRouter(Burger);
