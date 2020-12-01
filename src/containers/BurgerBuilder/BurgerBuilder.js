import React, { Component } from 'react';
import Burger from '../../component/Burger/Burger';
import BuildControls from '../../component/Burger/BuildControls/BuildControls';
import Modal from '../../component/UI/Modal/Modal';
import OrderSummary from '../../component/OrderSummary/OrderSummary';
import axios from '../../axios-orders';
import Spinner from '../../component/UI/Spinner/Spinner';
const INGREDIENT_PRICES = {
	bacon: 10,
	salad: 20,
	cheese: 20,
	meat: 5,
};
export default class BurgerBuilder extends Component {
	state = {
		ingredients: null,
		price: 50,
		purchasable: true,
		purchasing: false,
		loading: false,
	};
	purchasedIngredients = (currentIngredients) => {
		let totalIngredients = 0;
		for (let key in currentIngredients) {
			totalIngredients += currentIngredients[key];
		}
		return totalIngredients > 0;
	};
	addIngredientsHandler = (type) => {
		let currentIngredients = this.state.ingredients;
		currentIngredients[type]++;
		let currentPrice = this.state.price;
		currentPrice += INGREDIENT_PRICES[type];

		this.setState({
			price: currentPrice,
			ingredients: currentIngredients,
			purchasable: this.purchasedIngredients(currentIngredients),
		});
	};

	removeIngredientsHandler = (type) => {
		let currentIngredients = this.state.ingredients;
		if (currentIngredients[type] <= 0) {
			return;
		}
		currentIngredients[type]--;
		let currentPrice = this.state.price;
		currentPrice -= INGREDIENT_PRICES[type];

		this.setState({
			price: currentPrice,
			ingredients: currentIngredients,
			purchasable: this.purchasedIngredients(currentIngredients),
		});
	};

	purchaseHandler = () => {
		// console.log('ckicj');
		this.setState({ purchasing: true });
	};
	purchaseCancelHandler = () => {
		this.setState({ purchasing: false });
	};

	purchaseContinueHandler = () => {
		// alert('Thanks for purchasing');
		// this.setState({ loading: true });
		// const order = {
		// 	ingredients: this.state.ingredients,
		// 	price: this.state.price,
		// 	customer: {
		// 		name: 'First Last',
		// 		address: {
		// 			street: 'blah blah',
		// 			pinCode: '368878',
		// 			country: 'Bharat',
		// 		},
		// 		email: 'test@test.in',
		// 	},
		// 	delivaryMethod: 'fastest',
		// };
		// axios
		// 	.post('/orders.json', order)
		// 	.then((response) => {
		// 		this.setState({ loading: false, purchasing: false });
		// 	})
		// 	.catch((error) => this.setState({ loading: false, purchasing: false }));
		const queryParams = [];
		for (let i in this.state.ingredients) {
			queryParams.push(
				encodeURIComponent(i) +
					'=' +
					encodeURIComponent(this.state.ingredients[i])
			);
		}
		const queryString= queryParams.join('&');

		this.props.history.push({
			pathname: '/checkout',
			search: '?' + queryString,
		});
	};
	componentDidMount() {
		axios
			.get('https://burger-builder-65dcf.firebaseio.com/ingredients.json')
			.then((response) => {
				this.setState({ ingredients: response.data });
			});
	}

	render() {
		console.log(this.props);
		let disabledInfo = {
			...this.state.ingredients,
		};
		for (let key in disabledInfo) {
			disabledInfo[key] = disabledInfo[key] <= 0;
		}
		let orderSummary = null;
		let burger = <Spinner />;
		if (this.state.ingredients) {
			burger = (
				<React.Fragment>
					<Burger ingredients={this.state.ingredients} />
					<BuildControls
						addIngredients={this.addIngredientsHandler}
						removeIngredients={this.removeIngredientsHandler}
						disabledInfo={disabledInfo}
						price={this.state.price}
						purchasable={this.state.purchasable}
						purchasing={this.purchaseHandler}
					/>
				</React.Fragment>
			);
			orderSummary = (
				<OrderSummary
					ingredients={this.state.ingredients}
					purchaseCancelled={this.purchaseCancelHandler}
					puchaseContinue={this.purchaseContinueHandler}
					price={this.state.price}
				/>
			);
			if (this.state.loading) {
				orderSummary = <Spinner />;
			}
		}
		return (
			<React.Fragment>
				<Modal
					show={this.state.purchasing}
					modalClose={this.purchaseCancelHandler}>
					{orderSummary}
				</Modal>
				{burger}
			</React.Fragment>
		);
	}
}
