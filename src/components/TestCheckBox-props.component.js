import React,{Component} from 'react';

class TestCheckBoxComponent extends Component{
	constructor(){
		super();
	}
	render(){
		return(
			<div>
				<input 
					type='checkbox' 
					checked={this.props.info.checked} 
					onChange={()=> this.props.handlerOnChange(this.props.info.id)}
				/>
				<p>{this.props.info.text}</p>
			</div>
		);
	}
}


export default TestCheckBoxComponent;