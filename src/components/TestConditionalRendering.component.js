import React,{Component} from 'react';

class ConditionalRendering extends Component{
	constructor(){
		super();
		this.state = {
			isLogIn: false
		}

		this.handlerOnClick = this.handlerOnClick.bind(this);
	}

	handlerOnClick(){
		this.setState(prevState => {
			let log = !prevState.isLogIn;
			return ({isLogIn: log});			
		});
	}

	render(){
		return(
			<div>
				<p>{this.state.isLogIn ? 'I am logged in.' : 'I am not logged in.'} </p>
				<button onClick={this.handlerOnClick}>
					{this.state.isLogIn ? 'Log out' : 'Log in'}
				</button>
			</div>
		);
	}
}


export default ConditionalRendering;