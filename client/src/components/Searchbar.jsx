import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import Dropdown from './Dropdown.jsx';

class Searchbar extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			input: '',
			inputFocused: false,
			dropdownFocused: false,
			dropdownItems: [
        'place1',
        'place2',
        'place3',
      ],
      dropdownLinks: [
        '--9e1ONYQuAa-CB_Rrw7Tw',
        '--cjBEbXMI2obtaRHNSFrA',
        '--DaPTJW3-tB1vP-PfdTEg',
      ],
		}
	}

	queryRestaurants = (query) => {
		if (query === '') {
			return;
		}

		axios.get('/navbar/business/' + encodeURIComponent(query))
			.then((res) => {
				return res.data;
			})
			.then((restaurants) => {
				this.setState({
					dropdownItems: restaurants.map((restaurant) => {
						return restaurant.name;
					}),
					dropdownLinks: restaurants.map((restaurant) => {
						return restaurant.id;
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

		this.queryRestaurants(input);
	}

	toggleInputFocus = (e) => {
		this.setState({inputFocused: !this.state.inputFocused});
	}

	toggleDropdownFocus = () => {
		console.log('hi');
		this.setState({dropdownFocused: !this.state.dropdownFocused});
	}

	render() {
		return (
			<span className="search-one">
				<span className="search-title">{this.props.title}</span>
				<div className="dropdown">
					<input className="searchbar" placeholder={this.props.hint}
						onChange={this.updateInput}
						onBlur={this.toggleInputFocus}
					/>
					{this.state.input !== '' ?
						<Dropdown items={this.state.dropdownItems} hrefs={this.state.dropdownLinks}
							onFocus={this.toggleDropdownFocus}
							onBlur={this.toggleDropdownFocus}
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
}

export default Searchbar;