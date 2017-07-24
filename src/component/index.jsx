import React from 'react';

class App extends React.Component{
	constructor(props) {
	  super(props);
	  this.state = {
	  	isBoke:false
	  }
	}
	render() {
		return (
			<div className="main-container">
				{this.props.children}
			</div>
		);
	}
}
export default App;