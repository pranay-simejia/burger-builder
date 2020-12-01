import React from 'react';
import BuildControl from './BuildControl/BuildControl';
import './BuildControls.css';
const controls = [
	{ name: 'Salad', type: 'salad' },
	{ name: 'Cheese', type: 'cheese' },
	{ name: 'Bacon', type: 'bacon' },
	{ name: 'Meat', type: 'meat' },
];

const BuildControls = (props) => {
	return (
		<div className='BuildControls'>
			<p>
				<strong>Current Price: ₹{props.price}</strong>
			</p>
			{controls.map((ctrl) => {
				return (
					<BuildControl
						key={ctrl.name}
						label={ctrl.name}
						type={ctrl.type}
						added={() => props.addIngredients(ctrl.type)}
						remove={() => props.removeIngredients(ctrl.type)}
						disabled={props.disabledInfo[ctrl.type]}
					/>
				);
			})}
			<button
				className='OrderButton'
				disabled={!props.purchasable}
				onClick={props.purchasing}>
				Purchase!
			</button>
		</div>
	);
};

export default BuildControls;
