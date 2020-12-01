import React from 'react';
import './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
const burger = (props) => {
	let ingredientsArray = Object.entries(props.ingredients);
	let BurgerIngredients = [];
	ingredientsArray.map((ingredient) => {
		for (let i = 1; i <= ingredient[1]; i++) {
			BurgerIngredients.push(<BurgerIngredient key={ingredient[0]+i} type={ingredient[0]} />);
		}
	});
	if(BurgerIngredients.length===0)
	BurgerIngredients=<p>Start Adding Ingredients!</p>
	return (
		<div className='Burger'>
			<BurgerIngredient type='bread-top' />
			{BurgerIngredients}
			<BurgerIngredient type='bread-bottom' />
		</div>
	);
};
export default burger;
