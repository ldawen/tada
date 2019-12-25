import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const TadaItem = (props) => {
 	return (
    	<li>
			<div>
				<div>{props.title}</div>
      			<div>{props.details}</div>
			</div>
    	</li>
  	);
};

const TadaItemList = (props) => {
	return (
		<ul>
			{props.tadaItems.map(tadaItem => <TadaItem {...tadaItem} />)}
		</ul>
	);
};

class TadaForm extends React.Component {
	state = {
		data: {
			tadaSearchItem: ''
		}
	}
	handleSubmit = () => {
		alert(this.state.data.tadaSearchItem);
	};

	handleOnchange = (args) => {
		this.setState((previousState) => {
			this.state.data.tadaSearchItem = args.value;
		});
	};

	render() {
		return (
			<form>
				<input type="text" value={this.state.data.tadaSearchItem} onChange={this.handleOnchange} placeholder="Wattada???" />
				<button type="submit" onSubmit={this.handleSubmit}>Tada!</button>
			</form>
		);
	}
}

class TadaApp extends React.Component {
	state = {
		tadaItems: [
			{
				title: 'Tada Item 1',
				details: 'Tada Item Details 1'
			},
			{
				title: 'Tada Item 2',
				details: 'Tada Item Details 2'
			}
		]
	};

	render() {
		return (
			<div>
				<TadaForm />
				<TadaItemList tadaItems={this.state.tadaItems} />
			</div>
		);
	}
}

ReactDOM.render(<TadaApp />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
