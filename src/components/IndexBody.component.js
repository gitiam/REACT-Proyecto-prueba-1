import React,{Component} from 'react';
import '../styles/indexbody.style.css';
import IndexButton from './IndexButton.component';
import dataIndexButton from '../DataIndexButton';

class IndexBodyComponent extends Component {
	render(){
		const data_button = dataIndexButton.map(data => {
			return (
				<IndexButton key={data.key} boton={data}/>
			);
		});
		return (
			<section className="index-body">				
				<nav>
					<ul>
						<li>{data_button}</li>
					</ul>
				</nav>
			</section>
		);		
	}
}

export default IndexBodyComponent;