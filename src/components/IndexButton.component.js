import React,{Component} from 'react';
import '../styles/indexbutton.style.css';

class IndexButtonComponent extends Component{
	constructor(){
		super();
	}
	render(){
		return (
			<div className="index-button">
				<img src={this.props.boton.avatar} alt="avatar"/>
				<p>{this.props.boton.text}</p>				
			</div>
		);		
	}
}

export default IndexButtonComponent;