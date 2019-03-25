import React,{Component} from 'react';


class TestFetchComponent extends Component{
	constructor(){
		super();
		this.state = {
			url: "https://reqres.in/api/users/",
			user: {}

		}

	}

	componentDidMount(){
		let id = 2;
		fetch(this.state.url+id)
			.then(response => response.json())
			.then(data => {
				this.setState({
					user: data
				})
			})
	}


	render(){
		let css = {
			color: 'red'
		}		
		//let nombre = this.setName()
		let nombre = this.state.user.data === undefined ? '...Loading' : this.state.user.data.first_name
		return(
			<div style={css}>
				<h1>User name: {nombre}</h1>
			</div>

		);
	}
}

export default TestFetchComponent;