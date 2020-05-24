import React, {Component} from 'react';
import { connect } from 'react-redux';
import { addProduct } from './redux/actions';

class App extends Component {
	componentDidMount() {
		this.props.add('zzssszzz');
	}
	render() {
		console.log(this.props.catalog);
		return (
			<div>
				z
			</div>
		);
	}
}

const mapStateToProps = state => ({
	catalog: state.catalog
})
const actionCreators = {
	add: addProduct
}

export default connect(
	mapStateToProps,
	actionCreators
)(App);
