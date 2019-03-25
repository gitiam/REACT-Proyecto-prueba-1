import React,{Component} from 'react';
import testdata from '../TestData';
import TestCheckBox from './TestCheckBox-props.component';

class TestCheckBoxComponent extends Component{
	constructor(){
		super();
		this.state = {
			todos: testdata
		};
		this.handlerOnChange = this.handlerOnChange.bind(this);		
	}
	/*Funcion encargada de cambiar el estado del checkbox*/
	handlerOnChange(id){
		this.setState(prevState => {
			const newarray = prevState.todos.map(obj =>{
				if (obj.id === id) {
					obj.checked = !obj.checked
				}				
				return (obj); 
			});
			/*Return del handler*/
			return({

			todos: newarray
			});
		});		
	}

	render(){
		/*Data es el componente con la informacion del obj del archivo testdata*/
		const data = this.state.todos.map( obj =>
			<TestCheckBox 
				key={obj.id} 
				info={obj} 
				handlerOnChange={this.handlerOnChange}
			/> 
		);
		/*Data es retornada*/
		return(
			<form style={{color: 'red'}}>
				{data}
			</form>
		);
	}
}


export default TestCheckBoxComponent;