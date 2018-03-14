import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import Dropdown from './Dropdown.jsx';

class Searchbar extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			input: '',
			focused: false,
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
		axios.get('/navbar/business/' + query)
			.then((res) => {
				console.log(res);
			});
	}

	updateInput = (event) => {
    let input = event.target.value;
    this.setState({input});
	}

	toggleFocus = () => {
		this.setState({focused: !this.state.focused});
	}

	render() {
		return (
			<span className="search-one">
				<span className="search-title">{this.props.title}</span>
				<div className="dropdown">
					<input className="searchbar" placeholder={this.props.hint}
						onChange={this.updateInput}
						onFocus={this.toggleFocus}
						onBlur={this.toggleFocus}
					/>
					{this.state.focused && this.state.input !== '' ?
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
}

export default Searchbar;