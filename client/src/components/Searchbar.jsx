import React from 'react';
import PropTypes from 'prop-types';

import Dropdown from './Dropdown.jsx';

class Searchbar extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			input: '',
			showDropdown: true,
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
    this.setState({
			input: input,
			showDropdown: true,
		});

		this.props.onChange(event);

		this.search(input);
	}

	onItemClick = (index) => {
		this.setState({
			input: this.state.dropdownItems[index],
			showDropdown: false,
		});
	}

	render() {
		return (
			<span className="search-one">
				<span className="search-title">{this.props.title}</span>
				<div className="dropdown">
					<input className="searchbar" placeholder={this.props.hint} value={this.state.input} onChange={this.updateInput}/>
					{this.state.showDropdown && this.state.input !== '' ?
						<Dropdown items={this.state.dropdownItems}
							hrefs={this.state.dropdownLinks}
							onItemClick={this.onItemClick}
						/>
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
	onTextChange: PropTypes.func,
}

export default Searchbar;