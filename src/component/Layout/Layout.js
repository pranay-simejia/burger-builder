import React, { Component } from 'react';
import './Layout.css';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
import Toolbar from '../Navigation/Toolbar/Toolbar';
// import { render } from '@testing-library/react';
class Layout extends Component {
	state = {
		showSideDrawer: false,
	};

	sideDrawerClosedHandler = () => {
		this.setState({ showSideDrawer: false });
	};
	sideDrawerToggleHandler=()=>{
		const prevToggle=this.state.showSideDrawer
		this.setState({showSideDrawer: !prevToggle})
	}
	render() {
		return (
			<React.Fragment>
				<Toolbar 
				drawerToggleClicked={this.sideDrawerToggleHandler} />
				<SideDrawer
					open={this.state.showSideDrawer}
					closed={this.sideDrawerClosedHandler}
				/>
				<main className='Content'>{this.props.children}</main>
			</React.Fragment>
		);
	}
}

export default Layout;
