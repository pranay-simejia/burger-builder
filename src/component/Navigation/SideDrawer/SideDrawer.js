import React from 'react';
import Logo from '../../Logo/Logo';
import './SideDrawer.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import NavigationItems from '../NavigationItems/NavigationItems';
const SideDrawer = (props) => {
	let SideDrawerControl='Close';
	if(props.open){
		SideDrawerControl='Open'
	}
	return (
		<React.Fragment>
			<Backdrop show={props.open} click={props.closed} />
			<div className={'SideDrawer ' + SideDrawerControl}>
				<div style={{ height: '21%', marginBottom: '32px' }}>
					<Logo />
				</div>
				<nav>
					<NavigationItems />
				</nav>
			</div>
		</React.Fragment>
	);
};

export default SideDrawer;
