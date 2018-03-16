import React from 'react';
import PropTypes from 'prop-types';

import Dropdown from './Dropdown.jsx';

class Searchbar extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			input: '',
			dropdownItems: [],
			dropdownLinks: [],
		}
	}

	search = (query) => {
		var promise = this.props.search(query);

		if (!promise) {
			return;
		}

		promise.then((data) => {
			this.setState({
				dropdownItems: data.map((datum) => {
					return datum.name;
				}),
				dropdownLinks: data.map((datum) => {
					return datum.id;
				}),
			});
		})
		.catch((err) => {
			console.error(err);
		});
	}

	updateInput = (event) => {
		let input = event.target.value;
    this.setState({input});

		this.search(input);
	}

	render() {
		return (
			<span className="search-one">
				<span className="search-title">{this.props.title}</span>
				<div className="dropdown">
					<input className="searchbar" placeholder={this.props.hint} onChange={this.updateInput}/>
					{this.state.input !== '' ?
						<Dropdown items={this.state.dropdownItems} hrefs={this.state.dropdownLinks}/>
						: undefined
					}
				</div>
			</span>
		);
	}
}

Searchbar.propTypes = {
	title: PropTypes.string,
	hint: PropTypes.string,
	search: PropTypes.func,
}

export default Searchbar;