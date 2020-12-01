import React, { Component } from 'react';
import Order from './Order/Order';
import axios from '../../axios-orders';
export class Orders extends Component {
    state={
        orders: [],
        loading: true,
    }
	componentDidMount() {
        axios.get('/orders.json')
        .then(res=>{
            const fetchedOrders=[]
            for(let key in res.data)
            {
                fetchedOrders.push({
                    ...res.data[key],
                    id: key
                })
            }
            this.setState({loading: false, orders: fetchedOrders })
        })
        .catch(err=>{
            this.setState({ loading: false });
            return <div>Oops, something went wrong!</div>
        });
	}
	render() {
		return (
			<div>
                {this.state.orders.map(order=>(<Order
                    ingredients={order.ingredients}
                    price={order.price}
                key={order.id}/>)
                    
                )}
			</div>
		);
	}
}

export default Orders;
