import React, { Component } from 'react';
import CheckoutSummary from '../../component/Order/CheckoutSummary/CheckoutSummary';
import {Route} from 'react-router-dom'
import ContactData from '../ContactData/ContactData';
export class Checkout extends Component {
	state = {
		ingredients: {
			salad: 1,
			cheese: 1,
			meat: 1,
			bacon: 1,
		},
	};
	componentDidMount() {
		const query = new URLSearchParams(this.props.location.search);
		const ingredients = {};
		console.log(query.entries);
		for (let param of query.entries()) {
			ingredients[param[0]] = +param[1];
		}
		this.setState({ ingredients: ingredients });
	}
	checkoutCancelledHandler = () => {
		this.props.history.goBack();
	};
	checkoutContinueHandler = () => {
		this.props.history.replace('/checkout/contact-data');
	};
	render() {
		return (
			<div>
				<CheckoutSummary
					ingredients={this.state.ingredients}
					checkoutContinued={this.checkoutContinueHandler}
					checkoutCancelled={this.checkoutCancelledHandler}
				/>
				<Route path={this.props.match.path + '/contact-data'}  component={ContactData}/>
			</div>
		);
	}
}

export default Checkout;
