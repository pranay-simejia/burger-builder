import React from 'react';
import Button from '../UI/Button/Button';
const OrderSummary = (props) => {
	const ingredientSummary = Object.keys(props.ingredients).map((igKey) => {
		return (
			<li key={igKey}>
				<span style={{ textTransform: 'capitalize' }}>{igKey}</span> :{' '}
				{props.ingredients[igKey]}
			</li>
		);
	});
	return (
		<React.Fragment>
			<h3>Your order</h3>
			<p>A delicious burger with following ingredients</p>
			<ul>{ingredientSummary}</ul>
			<p>
				<strong>Price: ₹ {props.price}</strong>
			</p>
			<p>Continue to checkout?</p>
			<Button btnType='Danger' click={props.purchaseCancelled}>
				CANCEL
			</Button>
			<Button btnType='Success' click={props.puchaseContinue}>
				CONTINUE
			</Button>
		</React.Fragment>
	);
};

export default OrderSummary;
