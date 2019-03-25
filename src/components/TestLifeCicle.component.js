import React,{Component} from 'react';
import LifeCiclePropComponent from './TestLifeCicle-props.component';

class TestLifeCicleComponent extends Component{
	constructor(){
		super();
		this.state = {
			isLoading: true
		};
	}

	componentDidMount(){
		setTimeout(() => {
			this.setState({				
				isLoading: false				
			});
		}, 1500);
	}

	render(){
		return( 
			<div>{this.state.isLoading ? '...loading' : <LifeCiclePropComponent />}</div>			
		);
	}
}

export default TestLifeCicleComponent;