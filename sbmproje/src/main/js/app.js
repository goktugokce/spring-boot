'use strict';

const React = require('react');
const ReactDOM = require('react-dom');
const client = require('./client'); 


class App extends React.Component { 

	constructor(props) {
		super(props);
		this.state = {farms: []};
	}

	componentDidMount() {
		client({method: 'GET', path: '/api/farms'}).done(response => {
			this.setState({farms: response.entity._embedded.farms});
		});
	}

	render() { 
		return (
			<FarmList farms={this.state.farms}/>
		)
	}
}


class FarmList extends React.Component{
	render() {
		const farms = this.props.farms.map(farm =>
			<Farms key={farms._links.self.href} farm={farm}/>
		);
		return (
			<table>
				<tbody>
					<tr>
						<th>Farm Name</th>
						<th>Farm Address</th>
						<th>Farm Owner</th>
						<th>Farm Product</th>
					</tr>
					{farms}
				</tbody>
			</table>
		)
	}
}


class Farm extends React.Component{
	render() {
		return (
			<tr>
				<td>{this.props.farm.farmName}</td>
				<td>{this.props.farm.farmAddress}</td>
				<td>{this.props.farm.farmOwner}</td>
				<td>{this.props.farm.farmProduct}</td>
			</tr>
		)
	}
}


ReactDOM.render(
	<App />,
	document.getElementById('react')
)

