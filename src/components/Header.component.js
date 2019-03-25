import React,{Component} from 'react';
import '../styles/header.style.css';

class HeaderComponent extends Component{
	
	
	render(){
		return (
			<div className="index-header">
				<ul className="idiomas">
					<li><a href="http://google.com">English</a></li>
					<li><a href="http://google.com">Español</a></li>
				</ul>
				<img src="#" alt="alt"/>
				<h1>Titulo</h1>
				<nav className="index-nav">
					<ul>
						<li><a href="http://google.com">Log in</a></li>
						<li><a href="http://google.com">Sign up</a></li>
						<li><a href="http://google.com">About</a></li>
					</ul>
				</nav>				
			</div>
		);		
	}
}

export default HeaderComponent;