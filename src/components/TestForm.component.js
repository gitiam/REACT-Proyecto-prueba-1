import React,{Component} from 'react';

class TestFormComponent extends Component{
	constructor(){
		super();
		this.state = {
			user: {
				first_name: "Formik",
				last_name: " es amor",
				checked: true,
				gender: ''
			}

		};

		this.handlerOnSubmit = this.handlerOnSubmit.bind(this);
		this.handlerOnChange = this.handlerOnChange.bind(this);

	}//END constructor

	handlerOnSubmit(){

	}

	handlerOnChange(event){
		const {name,value,type,checked} = event.target;

		type === 'checkbox' ? 
		this.setState(
			{user: {...this.state.user, [name]: checked}}
		)
		: this.setState(
			{user: {...this.state.user, [name]: value}}
		)
	}
	render(){
		return(

			<form onSubmit={this.handlerOnSubmit}>
				<input 
					type='text'
					value={this.state.user.first_name} 
					name='first_name' 
					placeholder='First name' 
					onChange={this.handlerOnChange}
				/>
				<br/>
				<input 
					type='text'
					value={this.state.user.last_name} 
					name='last_name' 
					placeholder='Last name' 
					onChange={this.handlerOnChange}
				/>
				<br/>
				<input 
					type='checkbox' 
					name='checked' 
					checked={this.state.user.checked}
					onChange={this.handlerOnChange}
				/>
				<br/>
				<input 
					type='radio' 
					name='gender'
					value='Male'
					checked={this.state.user.gender === 'Male'}
					onChange={this.handlerOnChange}
				/> Male
				<br/>
				<input 
					type='radio' 
					name='gender'
					value='Female'
					checked={this.state.user.gender === 'Female'}
					onChange={this.handlerOnChange}
				/> Female
				<h1 style={{color: 'red'}}>
					{this.state.user.first_name} 
					{this.state.user.last_name}
				</h1>
				<h2 style={{color: 'red'}}>
					{this.state.user.gender} 
				</h2>
			</form>
		); //END render->return
	}//END render
}

export default TestFormComponent;