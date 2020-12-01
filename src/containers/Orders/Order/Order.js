import React from 'react';
import './Order.css';
const Order = (props) => {
	const ingredients = [];
	for (let ingredientName in props.ingredients) {
		ingredients.push({
			name: ingredientName,
			amount: props.ingredients[ingredientName],
		});
	}
	const ingredientOutput = ingredients.map((ig) => {
		return (
			<span
				key={ig.name}
				style={{
					textTransform: 'capitalize',
					display: 'inline-block',
					margin: '0 8px',
					border:'1px solid #ccc',
					padding:'8px'
				}}>
				{ig.name} ({ig.amount})
			</span>
		);
	});
	return (
		<div className='Order'>
			{ingredientOutput}
			<p>
				<strong> ₹ {props.price}</strong>
			</p>
		</div>
	);
};

export default Order;
