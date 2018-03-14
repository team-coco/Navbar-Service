import React from 'react';
import PropTypes from 'prop-types';

class Dropdown extends React.PureComponent {
	render() {
		console.log('hello world', this.props.items);

		return (
			<div className='dropdown-content-search'>
				{this.props.items.map((item, i) => {
					return <a key={i} href={'/' + this.props.hrefs[i]}>{item}</a>
				})}
			</div>
		);
	}
}

Dropdown.propTypes = {
	items: PropTypes.array,
	hrefs: PropTypes.array,
}

export default Dropdown;