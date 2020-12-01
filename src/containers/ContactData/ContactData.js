import React, { Component } from 'react';
import Button from '../../component/UI/Button/Button';
import './ContactData.css'
class ContactData extends Component {
	state = {
		name: '',
		email: '',
		address: {
			street: '',
			postalCode: '',
		},
	};
	render() {
		return (
			<div className='ContactData'>
				<h4>Enter your Contact Data</h4>
				<form action=''>
					<input
						className='Input'
						type='text'
						name='name'
						placeholder='your name'
						id=''
					/>
					<input
						className='Input'
						type='text'
						name='email'
						placeholder='your email'
						id=''
					/>
					<input
						className='Input'
						type='text'
						name='street'
						placeholder='your Street'
						id=''
					/>
					<input
						className='Input'
						type='text'
						name='postal code'
						placeholder='your postal code'
						id=''
					/>
					<Button btnType='Success'>Order</Button>
				</form>
			</div>
		);
	}
}

export default ContactData;
