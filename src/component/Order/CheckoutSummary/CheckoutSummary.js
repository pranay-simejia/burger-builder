import React from 'react'
import Burger from '../../Burger/Burger'
import Button from '../../UI/Button/Button'
import './CheckoutSummary.css'
const CheckoutSummary = (props) => {
    return (
        <div className='CheckoutSummary'>
            <h1> We hope that you like it! </h1>
            <div style={{width: '100%' , margin:'auto'}}>
                <Burger ingredients={props.ingredients}/>
            </div>
            <Button btnType='Danger' click={props.checkoutCancelled}>CANCEL</Button>
            <Button btnType='Success' click={props.checkoutContinued}>CONTINUE</Button>

        </div>
    )
}

export default CheckoutSummary
