import React,{Component} from 'react';

class Prueba extends Component{
	constructor(){
		super();
		this.state = {
			count: 0
		}
		this.sumar = this.sumar.bind(this);
	}

	sumar(){
		this.setState(prevState =>{
			return({
				count: prevState.count + 1 
			});
		});
	}

	render(){
		return(
			<div>
				<h1>{this.state.count}</h1>
				<button onClick={this.sumar}>Cambia</button>
			</div>
		);
	}
}

export default Prueba;