import React from 'react'
import './DrawerToggle.css'
const DrawerToggle = (props) => {
    return (
			<div className='DrawerToggle' onClick={props.click}>
				<div></div>
				<div></div>
				<div></div>
			</div>
		);
}

export default DrawerToggle
