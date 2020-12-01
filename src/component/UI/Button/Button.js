import React from 'react';
import './Button.css';
const Button = (props) => {

	const btnType =
		props.btnType === 'Success' ? { color: '#5C9210' } : { color: '#944317' };   
	return (
	<button className=' Button' style={btnType} onClick={props.click}> {props.children}</button>
	);
};

export default Button;
